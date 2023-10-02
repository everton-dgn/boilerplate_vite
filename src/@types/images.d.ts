// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg?react' {
  import type * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { role?: string; title?: string }
  >

  const src: string
  export default src
}

declare module '*.jpg'

declare module '*.webp'

declare module '*.png'
