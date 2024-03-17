import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'jobs',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
