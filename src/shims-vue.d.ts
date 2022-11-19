/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.png' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '*.svg' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

// declare module 'vite-svg-loader' {
//   import { Plugin } from 'vite'
//   import { OptimizeOptions } from 'svgo'
//   function svgLoader(options?: {
//     svgoConfig?: OptimizeOptions
//     svgo?: boolean
//     defaultImport?: 'url' | 'raw' | 'component'
//   }): Plugin
//   export default svgLoader
// }

// declare module '*.svg?component' {
//   import { FunctionalComponent, SVGAttributes } from 'vue'
//   const src: FunctionalComponent<SVGAttributes>
//   export default src
// }
