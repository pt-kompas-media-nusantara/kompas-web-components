import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { inlineSvg } from 'stencil-inline-svg';
import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import tailwind from 'tailwindcss';
import tailwindStencil, { PluginOpts } from 'stencil-tailwind-plugin';
import tailwindConfig from './tailwind.config';
const opts = Object.assign(
  {},
  PluginOpts.DEFAULT,
  {
    debug: true,
    stripComments: true,
    enablePurge: true,
    tailwindConf: tailwindConfig
  }
)

export const config: Config = {
  namespace: 'kompas-web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
      footer: '*Terbikin oleh tim front-end kompas.id*'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    // disable ssr hydrate app
    // {
    //   type: 'dist-hydrate-script'
    // }
  ],
  plugins: [
    tailwindStencil(opts),
    postcss({
      plugins: [
        nested(),
        autoprefixer(),
        tailwind()
      ]
    }),
    inlineSvg()
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  },
  bundles: [
    {
      components: [
        'kompas-footer',
        'kompas-footer-default',
        'kompas-footer-supports',
        'kompas-footer-products'
      ]
    },
    // Header Account bundle
    {
      components: [
        'kompas-header-account',
        'kompas-header-account-menu',
        'kompas-header-account-help-center',
        'kompas-header-account-profile'
      ]
    },
    {
      components: [
        'kompas-paywall',
        'kompas-paywall-banner-registration',
        'kompas-paywall-information-header',
        'kompas-paywall-body',
        'kid-metered-paywall',
      ]
    }
  ]
};
