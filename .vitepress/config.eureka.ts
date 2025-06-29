import { type DefaultTheme } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

const sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'PROJECT EUREKA',
    base: '/PROJECT_EUREKA',
    collapsed: true,
    link: '/',
    items: [
      {
        text: '动画',
        base: '/PROJECT_EUREKA/',
        items: [
          {
            text: '交响诗篇 优莱卡7',
            collapsed: false,
            link: 'Anime/Psalms_of_Planets/',
            items: [
              {
                text: '角色',
                collapsed: true,
                link: 'Anime/Psalms_of_Planets/characters/',
                items: generateSidebar({
                  documentRootPath: '/src/PROJECT_EUREKA',
                  scanStartPath: '/Anime/Psalms_of_Planets/characters/',
                  useTitleFromFrontmatter: true
                }) as DefaultTheme.SidebarItem[]
              },
              {
                text: '设定',
                collapsed: true,
                items: generateSidebar({
                  documentRootPath: '/src/PROJECT_EUREKA',
                  scanStartPath: '/Anime/Psalms_of_Planets/settings/',
                  useTitleFromFrontmatter: true
                }) as DefaultTheme.SidebarItem[]
              }
            ]
          },
          {
            text: '优莱卡7 AO',
            collapsed: false,
            link: 'Anime/AO/',
            items: [
              {
                text: '角色',
                collapsed: true,
                link: 'Anime/AO/characters/',
                items: []
              },
              {
                text: '设定',
                collapsed: true,
                items: []
              }
            ]
          }
        ]
      },
      {
        text: '电影',
        items: [
          {
            text: '满载彩虹',
            collapsed: true,
            link: '/Movie/eureka_pocket/Good_night_Sleep_tight_Young_lovers.md',
            items: [
              {
                text: '设定',
                collapsed: true,
                base: '/PROJECT_EUREKA/',
                items: generateSidebar({
                  documentRootPath: '/src/PROJECT_EUREKA',
                  scanStartPath: '/Movie/eureka_pocket/settings/',
                  useTitleFromFrontmatter: true
                }) as DefaultTheme.SidebarItem[]
              }
            ]
          },
          {
            text: '超进化系列',
            collapsed: false,
            link: '/Movie/HI-EVOLUTION.md',
            items: [
              {
                text: '超进化1',
                link: '/Movie/HI-EVOLUTION_1.md'
              },
              { text: '安妮莫奈', link: '/Movie/ANEMONE.md' },
              { text: '优莱卡', link: '/Movie/EUREKA.md' }
            ]
          }
        ]
      },
      {
        text: '漫画',
        items: [
          {
            text: '重力少年&滑空少女',
            link: '/Comic/Gravity_Boys_and_Lifting_Girl'
          },
          {
            text: '交响诗篇优莱卡7',
            link: '/Comic/EUREKA_SEVEN'
          },
          {
            text: '交响诗篇优莱卡7 新秩序',
            link: '/Comic/EUREKA_SEVEN_new_order'
          },
          { text: '优莱卡7 AO', link: '/Comic/AO' },
          { text: '优莱卡7 nAnO', link: '/Comic/AO_nAnO' },
          {
            text: '优莱卡7 AO ~Save A Prayer~',
            link: '/Comic/AO_Save_A_Prayer'
          }
        ]
      },
      {
        text: '游戏',
        items: [{ text: '优莱卡 7 TR 系列', link: '/Game/PS2_TR' }]
      },
      { text: '小说', items: [] },
      { text: '更多资料', link: '/Project/More_Data' }
    ]
  }
]

export { sidebar }
