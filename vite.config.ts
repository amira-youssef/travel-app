import { reactRouter } from '@react-router/dev/vite';
import { sentryReactRouter, type SentryReactRouterBuildOptions } from '@sentry/react-router';
import { defineConfig } from 'vite';

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "amiraysf",
  project: "travel-agency",

  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
    plugins: [reactRouter(),sentryReactRouter(sentryConfig, config)],
  };
});
