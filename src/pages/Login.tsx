import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, UserRound, Lock, Sparkles, Mail } from "lucide-react";
import { Capacitor } from "@capacitor/core";
import { trpc, API_BASE_URL, TRPC_URL } from "@/providers/trpc";
import { useApp } from "@/context/AppContext";
import { setNativeToken } from "@/lib/nativeAuth";
import { t } from "@/i18n";

export default function Login() {
  const { lang } = useApp();
  const navigate = useNavigate();
  const utils = trpc.useUtils();

  const [tab, setTab] = useState<"login" | "signup">("signup");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [error, setError] = useState<{ message: string; detail: string } | null>(null);

  const onSuccess = async (data: { success: boolean; token: string }) => {
    if (Capacitor.isNativePlatform()) {
      await setNativeToken(data.token);
    }
    await utils.invalidate();
    navigate("/profile");
  };
  const onError = (err: unknown) => {
    const data = (err as { data?: Record<string, unknown> | null } | null)?.data;
    const code = data?.code as string | undefined;
    const httpStatus = data?.httpStatus as number | undefined;
    const rawMessage = (err as { message?: string })?.message;

    console.error("[auth] login/signup failed", {
      tab,
      requestUrl: TRPC_URL,
      apiBaseUrl: API_BASE_URL,
      code: code ?? "<none \u2014 the request never reached the server>",
      httpStatus: httpStatus ?? "<none \u2014 no HTTP response>",
      message: rawMessage,
      zodError: data?.zodError,
      stack: data?.stack,
      error: err,
    });

    // A tRPC error carrying no `data` never got an HTTP response at all: DNS,
    // TLS, App Transport Security, or a CORS preflight the browser refused.
    // Calling that "wrong password" would be a lie, and it is the case that
    // has cost the most time to identify, so it is named explicitly.
    if (!code) {
      setError({
        message: t("errNetwork", lang),
        detail: `NETWORK \u00b7 ${TRPC_URL} \u00b7 ${rawMessage ?? "no response"}`,
      });
      return;
    }

    const message =
      code === "CONFLICT"
        ? t("errTaken", lang)
        : code === "UNAUTHORIZED"
          ? t("errWrong", lang)
          : code === "BAD_REQUEST"
            ? t("errInvalid", lang)
            : t("errGeneric", lang);

    setError({
      message,
      // Small and muted under the message: enough for whoever is holding the
      // phone to report what actually broke, without opening a console.
      detail: `${code}${httpStatus ? ` \u00b7 HTTP ${httpStatus}` : ""} \u00b7 localAuth.${tab}`,
    });
  };

  const loginMutation = trpc.localAuth.login.useMutation({ onSuccess, onError });
  const signupMutation = trpc.localAuth.signup.useMutation({ onSuccess, onError });
  const pending = loginMutation.isPending || signupMutation.isPending;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const un = username.trim().toLowerCase();
    if (tab === "login") {
      loginMutation.mutate({ username: un, password });
    } else {
      signupMutation.mutate({
        username: un,
        password,
        name: name.trim() || undefined,
        email: email.trim(),
        gender: gender ?? undefined,
      });
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-28 pt-6">
      <Link
        to="/"
        className="inline-flex w-fit items-center gap-1 rounded-full bg-atlas-surface px-3 py-1.5 text-xs font-medium text-atlas-body shadow-card"
      >
        <ChevronLeft size={16} />
        {t("back", lang)}
      </Link>

      <div className="flex flex-1 flex-col justify-center py-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-atlas-muted">
          Atlas of Style
        </p>
        <h1 className="mt-3 text-center font-serif text-3xl font-semibold text-atlas-ink">
          {tab === "login" ? t("welcomeBack", lang) : t("createAccount", lang)}
        </h1>
        <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-atlas-muted">
          {t("authDesc", lang)}
        </p>

        {/* Tabs */}
        <div className="mx-auto mt-6 flex w-full max-w-xs rounded-full border border-atlas-line bg-atlas-surface p-1 shadow-card">
          {(["signup", "login"] as const).map((k) => (
            <button
              key={k}
              onClick={() => {
                setTab(k);
                setError(null);
              }}
              className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
                tab === k ? "bg-atlas-clay text-white shadow-card" : "text-atlas-muted"
              }`}
            >
              {k === "signup" ? t("signupTab", lang) : t("loginTab", lang)}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={submit} className="mx-auto mt-6 w-full max-w-xs space-y-3">
          {tab === "signup" && (
            <div className="relative">
              <Sparkles size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-atlas-muted/70" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("nameOptional", lang)}
                className="w-full rounded-full border border-atlas-line bg-atlas-surface py-3 pl-11 pr-4 text-sm text-atlas-ink shadow-card outline-none placeholder:text-atlas-muted/70 focus:border-atlas-clay/50"
              />
            </div>
          )}
          {tab === "signup" && (
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-atlas-muted/70" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("email", lang)}
                autoCapitalize="none"
                autoCorrect="off"
                required
                className="w-full rounded-full border border-atlas-line bg-atlas-surface py-3 pl-11 pr-4 text-sm text-atlas-ink shadow-card outline-none placeholder:text-atlas-muted/70 focus:border-atlas-clay/50"
              />
            </div>
          )}
          {tab === "signup" && (
            <div>
              <p className="mb-1.5 pl-4 text-[11px] text-atlas-muted/70">
                {t("genderOptional", lang)}
              </p>
              <div className="flex w-full rounded-full border border-atlas-line bg-atlas-surface p-1 shadow-card">
                {(["male", "female"] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    aria-pressed={gender === g}
                    /* Nothing is selected by default, and tapping the active
                       choice clears it again — so leaving this blank is a
                       reachable state, not just an undocumented default. */
                    onClick={() => setGender((prev) => (prev === g ? null : g))}
                    className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
                      gender === g ? "bg-atlas-clay text-white shadow-card" : "text-atlas-muted"
                    }`}
                  >
                    {g === "male" ? t("genderMale", lang) : t("genderFemale", lang)}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div>
            <div className="relative">
              <UserRound size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-atlas-muted/70" />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={t("username", lang)}
                autoCapitalize="none"
                autoCorrect="off"
                required
                className="w-full rounded-full border border-atlas-line bg-atlas-surface py-3 pl-11 pr-4 text-sm text-atlas-ink shadow-card outline-none placeholder:text-atlas-muted/70 focus:border-atlas-clay/50"
              />
            </div>
            {tab === "signup" && (
              <p className="mt-1 pl-4 text-[11px] text-atlas-muted/70">{t("usernameHint", lang)}</p>
            )}
          </div>
          <div>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-atlas-muted/70" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("password", lang)}
                required
                className="w-full rounded-full border border-atlas-line bg-atlas-surface py-3 pl-11 pr-4 text-sm text-atlas-ink shadow-card outline-none placeholder:text-atlas-muted/70 focus:border-atlas-clay/50"
              />
            </div>
            {tab === "signup" && (
              <p className="mt-1 pl-4 text-[11px] text-atlas-muted/70">{t("passwordHint", lang)}</p>
            )}
          </div>

          {error && (
            <div
              role="alert"
              className="rounded-xl bg-red-50 px-4 py-2.5 text-center text-red-600"
            >
              <p className="text-sm">{error.message}</p>
              <p className="mt-1 break-all font-mono text-[10px] leading-snug text-red-500/80">
                {error.detail}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-atlas-clay py-3.5 text-sm font-medium text-white shadow-card transition-colors hover:bg-atlas-deep disabled:opacity-60"
          >
            {tab === "login" ? t("loginTab", lang) : t("signupButton", lang)}
          </button>
        </form>
      </div>
    </div>
  );
}
