import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.atlasofstyle.app',
  appName: 'Atlas of Style',
  webDir: 'dist/public',
  server: {
    androidScheme: 'https',
  },
};

export default config;
