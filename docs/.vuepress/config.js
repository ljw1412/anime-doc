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
    // 你可以省略 .md 拓展名，同时以 / 结尾的路径将会被视为 */README.md，这个链接的文字将会被自动获取到（无论你是声明为页面的第一个 header，还是明确地在 YAML front matter 中指定页面的标题）。如果你想要显示地指定链接的文字，使用一个格式为 [link, text] 的数组。
    sidebar: {
      '/': [
        {
          text: 'EUREKA SEVEN',
          collapsible: true,
          children: [
            {
              text: '交响诗篇Eureka seveN',
              collapsible: true,
              children: [
                '/EUREKA_SEVEN/Psalms_of_Planets/',
                {
                  text: '设定',
                  collapsible: true,
                  sidebar: 'false',
                  children: getChildren(
                    '../EUREKA_SEVEN/Psalms_of_Planets/settings/*.md'
                  ),
                },
              ],
            },
            {
              text: '交响诗篇AO',
              collapsible: true,
              children: ['/EUREKA_SEVEN/AO/'],
            },
          ],
        },
      ],
    },
  },
}
