import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { check, clientAddress, forget, record, reset } from "./rate-limit";

const WINDOW = 60_000;
const LIMIT = 5;

describe("attempt counting", () => {
  beforeEach(() => {
    reset();
    vi.useFakeTimers();
  });
  afterEach(() => vi.useRealTimers());

  it("allows an address that has never failed", () => {
    expect(check("a", LIMIT).allowed).toBe(true);
  });

  it("allows exactly the allowance before refusing", () => {
    for (let i = 0; i < LIMIT; i++) {
      expect(check("a", LIMIT).allowed).toBe(true);
      record("a", WINDOW);
    }
    expect(check("a", LIMIT).allowed).toBe(false);
  });

  it("says how long the caller has to wait", () => {
    for (let i = 0; i < LIMIT; i++) record("a", WINDOW);
    const { retryAfterMs } = check("a", LIMIT);
    expect(retryAfterMs).toBeGreaterThan(0);
    expect(retryAfterMs).toBeLessThanOrEqual(WINDOW);
  });

  it("lets the caller back in once the window passes", () => {
    for (let i = 0; i < LIMIT; i++) record("a", WINDOW);
    expect(check("a", LIMIT).allowed).toBe(false);
    vi.advanceTimersByTime(WINDOW + 1);
    expect(check("a", LIMIT).allowed).toBe(true);
  });

  it("counts each key separately", () => {
    for (let i = 0; i < LIMIT; i++) record("a", WINDOW);
    expect(check("a", LIMIT).allowed).toBe(false);
    expect(check("b", LIMIT).allowed).toBe(true);
  });

  it("forgets a key outright on a correct password", () => {
    for (let i = 0; i < LIMIT; i++) record("a", WINDOW);
    expect(check("a", LIMIT).allowed).toBe(false);
    forget("a");
    expect(check("a", LIMIT).allowed).toBe(true);
  });

  it("never refuses someone who keeps signing in successfully", () => {
    // Twenty sign-ins in the same minute, each one clearing the record.
    for (let i = 0; i < 20; i++) {
      expect(check("a", LIMIT).allowed).toBe(true);
      forget("a");
    }
  });

  it("refuses only after the last of the allowance is spent, not before", () => {
    record("a", WINDOW);
    record("a", WINDOW);
    expect(check("a", LIMIT).allowed).toBe(true);
  });
});

describe("client address", () => {
  const headers = (h: Record<string, string>) => new Headers(h);

  it("reads a plain forwarded address", () => {
    expect(clientAddress(headers({ "x-forwarded-for": "1.2.3.4" }))).toBe("1.2.3.4");
  });

  it("takes the proxy's entry, not one the caller supplied", () => {
    // A caller sending its own X-Forwarded-For would otherwise pick its own
    // bucket and sidestep the limit entirely.
    const spoofed = headers({ "x-forwarded-for": "9.9.9.9, 1.2.3.4" });
    expect(clientAddress(spoofed)).toBe("1.2.3.4");
  });

  it("falls back to x-real-ip", () => {
    expect(clientAddress(headers({ "x-real-ip": "5.6.7.8" }))).toBe("5.6.7.8");
  });

  it("has a last resort rather than throwing", () => {
    expect(clientAddress(headers({}))).toBe("unknown");
  });
});
