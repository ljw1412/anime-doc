// https://vitepress.dev/guide/custom-theme
import { Component, h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

const componentMap = import.meta.glob<Component>('../components/*.vue', {
  import: 'default',
  eager: true
})

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // console.log(siteData)

    Object.keys(componentMap).forEach((key) => {
      const matched = key.match(/components\/(\S+)\.vue/)
      if (matched) {
        app.component(matched[1], componentMap[key])
        // console.log('[全局组件注册]', matched[1], componentMap[key])
      }
    })
  }
} satisfies Theme
