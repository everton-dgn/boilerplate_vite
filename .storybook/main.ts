import type {StorybookConfig} from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/ui/@(components|templates)/**/storybook/stories.@(js|ts)x'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-mobile',
    'storybook-dark-mode'
  ],
  core: {
    disableTelemetry: true
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
  typescript: {
    reactDocgen: 'react-docgen'
  }
}

export default config
