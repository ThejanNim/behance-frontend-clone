import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'assetstore',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
