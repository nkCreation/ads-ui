import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  extras: {
    experimentalImportInjection: true,
  },
  namespace: 'ads-ui',
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'ads-ui',
      directivesProxyFile: '../ads-ui-angular/projects/ads-ui-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../ads-ui-angular/projects/ads-ui-angular/src/lib/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: 'ads-ui',
      proxiesFile: '../ads-ui-vue/src/components.ts',
    }),
  ],
};
