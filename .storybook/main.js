module.exports = {
  stories: ['../src/ui/@(components|templates)/**/storybook/stories.@(tsx)'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-dark-mode/register',
    'storybook-mobile',
    '@storybook/addon-a11y'
  ],
  features: {
    storyStoreV7: true
  },
  typescript: {
    check: false,
    checkOptions: {}
  },
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  viteFinal: async config => config,
  previewHead: head => `
    ${head}
    <style>
      #root {
        display: grid !important;
        height: 100% !important;
        width: 100% !important;
        justify-content: center !important;
        align-items: center;
      }

      @media screen and (min-width: 90rem) {
        #root {
          padding: 3rem!important;
        }
      }

      .sbdocs-p {
        font-size: 17px !important;
      }
    </style>
  `,
  reactOptions: {
    fastRefresh: true
  },
  framework: '@storybook/react'
}
