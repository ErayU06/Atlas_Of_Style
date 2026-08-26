import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.atlasofstyle.app',
  appName: 'Atlas of Style',
  webDir: 'dist/public',
  server: {
    // TEMP: 'http' for local device testing against the plain-HTTP dev
    // server (avoids mixed-content blocking). Revert to 'https' before
    // pointing this at a real deployed backend.
    androidScheme: 'http',
  },
};

export default config;
