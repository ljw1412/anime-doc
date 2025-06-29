import { defineConfig } from 'vitepress'
import nodePath from 'node:path'
import * as EurekaRoute from './config.eureka'
import mdRules from './md-rules'
import MDFootnote from 'markdown-it-footnote'

const PACKAGE_ROOT = __dirname

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-cn',
  title: '御宅世界',
  description: '动漫专题资料库',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/anime-doc/favicon.ico' }]],
  srcDir: './src',
  base: '/anime-doc/',
  themeConfig: {
    outline: { level: 2, label: '页面导航' },
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '资料库', link: '/welcome' }
    ],

    sidebar: [
      {
        text: '欢迎来到「御宅世界」资料库',
        link: '/welcome',
        items: [...EurekaRoute.sidebar]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ljw1412/anime-doc' }
    ]
  },
  markdown: {
    config(md) {
      md.use(mdRules).use(MDFootnote)
    }
  },
  vite: {
    publicDir: '../public',
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    },
    resolve: {
      alias: {
        '/@vitepress/': PACKAGE_ROOT + nodePath.sep,
        '/@/': nodePath.join(PACKAGE_ROOT, '..', 'src') + nodePath.sep
      }
    }
  }
})
