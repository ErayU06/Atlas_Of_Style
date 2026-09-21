import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.atlasofstyle.app',
  appName: 'Atlas of Style',
  webDir: 'dist/public',
  server: {
    androidScheme: 'https',
    // Matches androidScheme so both platforms serve the bundle from
    // `https://localhost` — the origin already allow-listed for credentialed
    // API calls in api/boot.ts. Capacitor's iOS default is
    // `capacitor://localhost`, which is allow-listed too, but keeping the two
    // platforms on one origin means one CORS entry and one localStorage
    // namespace instead of two. Set before the first iOS release on purpose:
    // the scheme keys localStorage, so changing it later would strand every
    // installed user's favourites, notes and passport stamps.
    iosScheme: 'https',
  },
  ios: {
    // The Xcode scheme `npx cap add ios` generates. Stated explicitly so
    // `cap run ios` and CI builds don't have to guess it.
    scheme: 'App',
  },
};

export default config;
