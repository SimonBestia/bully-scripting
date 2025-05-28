import { themes as prismThemes } from 'prism-react-renderer';

import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  /* ------------------------------------------------------------------------ */
  /* SEO                                                                      */
  /* ------------------------------------------------------------------------ */

  title: 'Bully Scripting Docs',

  tagline:
    'The Complete Guide to Scripting Bully: Scholarship Edition with Lua' +
    ' Programming Language',

  customFields: {
    // SEO stuff...
    meta: {
      description:
        'The community hub and resource for scripting and modding Bully:' +
        ' Scholarship Edition using Lua. Discover scripts, tools, tutorials,' +
        ' and join the community.',
    },

    // Checks whether currently in 'production' or 'development' environment
    NODE_ENV: process.env.NODE_ENV,
  },

  favicon:
    process.env.NODE_ENV === 'production' ? 'img/icon.ico' : '../img/icon.ico',

  /* ------------------------------------------------------------------------ */
  /* Production & Deployment                                                  */
  /* ------------------------------------------------------------------------ */

  // Production URL: https://bully-scripting.vercel.app
  // Local Development URL: http://localhost:3000/bully-scripting/

  // Fallback to localhost for local development if no specific URL is set.
  // Vercel provides VERCEL_URL which will be used for preview deployments.
  // For production, set SITE_URL in Vercel environment variables to your
  // canonical URL.
  url:
    process.env.SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'),

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RanggaBS', // Usually your GitHub org/user name.

  // Usually your repo name.
  projectName:
    process.env.NODE_ENV === 'development' ? undefined : 'bully-scripting',

  trailingSlash: false, // 'domain.com/docs', not 'domain.com/docs/'

  /* ------------------------------------------------------------------------ */
  /* Broken Links                                                             */
  /* ------------------------------------------------------------------------ */

  onBrokenLinks: 'warn', // Default: 'throw'
  onBrokenMarkdownLinks: 'warn',

  /* ------------------------------------------------------------------------ */
  /* Internationalization                                                     */
  /* ------------------------------------------------------------------------ */

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: { defaultLocale: 'en', locales: ['en'] },

  /* ------------------------------------------------------------------------ */
  /* Presets                                                                  */
  /* ------------------------------------------------------------------------ */

  presets: [
    [
      'classic',
      {
        // Options for `@docusaurus/plugin-content-docs`. Use `false` to disable.
        // https://docusaurus.io/docs/docs-introduction
        docs: {
          routeBasePath: '/docs', // Set to '/docs' to serve the docs at the root URL.
          sidebarPath: './sidebars.ts',

          // This should point to your actual repository,
          // e.g., 'https://github.com/RanggaBS/bully-scripting/tree/main/'
          // Using an environment variable SITE_EDIT_URL allows for flexibility.
          editUrl:
            process.env.SITE_EDIT_URL ||
            'https://github.com/RanggaBS/bully-scripting/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },

          // This should point to your actual repository,
          // e.g., 'https://github.com/RanggaBS/bully-scripting/tree/main/'
          editUrl:
            process.env.SITE_EDIT_URL ||
            'https://github.com/RanggaBS/bully-scripting/tree/main/',

          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  /* ------------------------------------------------------------------------ */
  /* Theme Config                                                             */
  /* ------------------------------------------------------------------------ */

  themeConfig: {
    /* ---------------------------------------------------------------------- */
    /* Algolia Doc Search                                                     */
    /* ---------------------------------------------------------------------- */

    algolia: {
      apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      appId: process.env.ALGOLIA_APP_ID,
      indexName: process.env.ALGOLIA_INDEX_NAME,
      contextualSearch: false,
    },

    /* ---------------------------------------------------------------------- */
    /* Color Mode                                                             */
    /* ---------------------------------------------------------------------- */

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true, // Auto light/dark mode based on system preferences
    },

    /* ---------------------------------------------------------------------- */
    /* Meta                                                                   */
    /* ---------------------------------------------------------------------- */

    // Meta image
    // You can configure a default image that will be used for your meta tag,
    // in particular og:image and twitter:image.
    image: 'img/social-card.png',

    /* ---------------------------------------------------------------------- */
    /* Navbar                                                                 */
    /* ---------------------------------------------------------------------- */

    navbar: {
      title: 'Bully Scripting Reference',
      logo: { alt: 'Bully game logo', src: '/img/BULLY-B-letter.png' },
      items: [
        { label: 'Docs', position: 'left', to: '/docs' },
        { label: 'Blog', position: 'left', to: '/blog' },
        {
          href: 'https://github.com/RanggaBS/bully-scripting',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    /* ---------------------------------------------------------------------- */
    /* Footer                                                                 */
    /* ---------------------------------------------------------------------- */

    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs' },
            { label: 'Game Reference', to: '/docs/category/game-reference' },
            {
              label: 'Derpy Script Loader (DSL)',
              to: '/docs/category/dsl-reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Bully-Board Forum', href: 'https://bully-board.com' },
            {
              label: 'Discord - Derpy Script Loader',
              href: 'https://discord.gg/r6abc7Avpm',
            },
            {
              label: 'Discord - Bully Modding Community',
              href: 'https://discord.gg/RcCAE8csCP',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/RanggaBS/bully-scripting',
            },
            {
              label: 'RBS ID (YouTube)',
              href: 'https://youtube.com/@rbsid',
            },
          ],
        },
      ],
      copyright:
        `Copyright © ${new Date().getFullYear()} Bully Scripting` +
        ' Community. Made with ❤️ by community. Built with Docusaurus.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.nightOwl,
      additionalLanguages: ['ini', 'lua'],
    },
  } satisfies Preset.ThemeConfig,

  /* ------------------------------------------------------------------------ */
  /* Docusaurus Faster                                                        */
  /* ------------------------------------------------------------------------ */
  // https://docusaurus.io/blog/releases/3.8#docusaurus-faster

  future: { experimental_faster: true, v4: true },
};

export default config;
