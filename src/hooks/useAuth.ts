import { Capacitor } from "@capacitor/core";
import { trpc } from "@/providers/trpc";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { LOGIN_PATH } from "@/const";
import { clearNativeToken } from "@/lib/nativeAuth";

type UseAuthOptions = {
  redirectOnUnauthenticated?: boolean;
  redirectPath?: string;
};

export function useAuth(options?: UseAuthOptions) {
  const { redirectOnUnauthenticated = false, redirectPath = LOGIN_PATH } =
    options ?? {};

  const navigate = useNavigate();

  const utils = trpc.useUtils();

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = trpc.auth.me.useQuery(undefined, {
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  // Navigate immediately and clean up in the background — awaiting the
  // token clear + cache invalidation here blocked the redirect on network
  // roundtrips, which felt like a freeze on flaky mobile connections. Also
  // fires on error: logout is a local action from the user's point of
  // view, it shouldn't hang the UI just because the backend is unreachable.
  const finishLogout = useCallback(() => {
    navigate(redirectPath);
    void (async () => {
      if (Capacitor.isNativePlatform()) {
        await clearNativeToken();
      }
      await utils.invalidate();
    })();
  }, [navigate, redirectPath, utils]);

  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: finishLogout,
    onError: finishLogout,
  });

  const logout = useCallback(() => logoutMutation.mutate(), [logoutMutation]);

  // Unlike logout, this one only redirects on confirmed success — the
  // account may still exist if the request failed, so the caller (the
  // confirmation dialog) needs a real error to show the user.
  const deleteAccountMutation = trpc.auth.deleteAccount.useMutation({
    onSuccess: finishLogout,
  });
  const deleteAccount = useCallback(
    () => deleteAccountMutation.mutateAsync(),
    [deleteAccountMutation],
  );

  useEffect(() => {
    if (redirectOnUnauthenticated && !isLoading && !user) {
      const currentPath = window.location.pathname;
      if (currentPath !== redirectPath) {
        navigate(redirectPath);
      }
    }
  }, [redirectOnUnauthenticated, isLoading, user, navigate, redirectPath]);

  return useMemo(
    () => ({
      user: user ?? null,
      isAuthenticated: !!user,
      isLoading: isLoading || logoutMutation.isPending,
      error,
      logout,
      deleteAccount,
      isDeletingAccount: deleteAccountMutation.isPending,
      refresh: refetch,
    }),
    [
      user,
      isLoading,
      logoutMutation.isPending,
      error,
      logout,
      deleteAccount,
      deleteAccountMutation.isPending,
      refetch,
    ],
  );
}
