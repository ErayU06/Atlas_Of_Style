import { Preferences } from "@capacitor/preferences";

// The Capacitor Android app can't rely on a cross-origin session cookie
// (see api/kimi/auth.ts), so it keeps its own copy of the session token
// and sends it as a Bearer header instead. Web never touches this file.
const TOKEN_KEY = "aos-native-token";

export async function getNativeToken(): Promise<string | null> {
  const { value } = await Preferences.get({ key: TOKEN_KEY });
  return value;
}

export async function setNativeToken(token: string): Promise<void> {
  await Preferences.set({ key: TOKEN_KEY, value: token });
}

export async function clearNativeToken(): Promise<void> {
  await Preferences.remove({ key: TOKEN_KEY });
}
