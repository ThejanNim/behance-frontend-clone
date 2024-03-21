import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'explore',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
