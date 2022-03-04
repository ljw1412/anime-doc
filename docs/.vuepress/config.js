const glob = require('glob')
const { join, relative } = require('path')

function getChildren(pattern) {
  let children = glob.sync(join(__dirname, pattern))
  children = children.map((item) =>
    ('\\' + relative(join(__dirname, '..'), item)).replace(/\\/g, '/')
  )
  console.log(children)
  return children
}

module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '御宅世界',
  description: '动画专题文档',

  // 主题和它的配置
  // theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.png',
    docsRepo: 'ljw1412/anime-doc',
    docsDir: 'docs',
    editLinkText: '编辑此页',
    lastUpdatedText: '最后更新时间',
    contributorsText: '贡献者',
    contributors: false,
    navbar: [
      // NavbarItem
      {
        text: '库主B站',
        link: 'https://space.bilibili.com/6517603',
      },
    ],
    // 你可以省略 .md 拓展名，同时以 / 结尾的路径将会被视为 */README.md，这个链接的文字将会被自动获取到（无论你是声明为页面的第一个 header，还是明确地在 YAML front matter 中指定页面的标题）。如果你想要显示地指定链接的文字，使用一个格式为 [link, text] 的数组。
    sidebar: {
      '/': [
        '/welcome',
        {
          text: 'PROJECT EUREKA',
          collapsible: true,
          children: [
            {
              text: '项目相关',
            },
            {
              text: '动画',
              children: [
                {
                  text: '交响诗篇Eureka seveN',
                  collapsible: true,
                  children: [
                    '/EUREKA_SEVEN/Psalms_of_Planets/',
                    {
                      text: '角色',
                      collapsible: true,
                      link: '/EUREKA_SEVEN/Psalms_of_Planets/characters/',
                      children: getChildren(
                        '../EUREKA_SEVEN/Psalms_of_Planets/characters/!(README).md'
                      ),
                    },
                    {
                      text: '设定',
                      collapsible: true,
                      children: getChildren(
                        '../EUREKA_SEVEN/Psalms_of_Planets/settings/*.md'
                      ),
                    },
                  ],
                },
                {
                  text: 'EUREKA SEVEN AO',
                  collapsible: true,
                  children: ['/EUREKA_SEVEN/AO/'],
                },
              ],
            },
            {
              text: '漫画',
              children: [
                {
                  text: 'EUREKA SEVEN 重力少年&滑空少女',
                },
                {
                  text: '交响诗篇EUREKA SEVEN',
                },
                {
                  text: '交响诗篇EUREKA SEVEN 新秩序',
                },

                {
                  text: 'EUREKA SEVEN AO',
                },
              ],
            },
            {
              text: '游戏',
              children: [
                { text: 'Eureka Seven vol.1: The New Wave' },
                { text: 'Eureka Seven vol.2: The New Vision' },
              ],
            },
          ],
        },
      ],
    },
  },
}
