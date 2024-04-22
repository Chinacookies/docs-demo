import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-demo/",
  head: [["link",{rel: "icon",href: "/logo.png"}]],
  title: "My Awesome Project",
  description: "A VitePress Site",
  
  themeConfig: {
    outlineTitle:"目录",
    outline:[2,6],
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', items:[
        {text:'家',link:'/'},
        {text:'MD样例',link:'/markdown-examples'}
      ] },
      { text: '样例', items:[
        {text:'MD样例',link:'/markdown-examples'},
        {text:'API',link:'/api-examples'}
      ] }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text:'Textarticle',
        items:[
          {text:'index',link:'/Textarticle/index.md'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright:"copyright (C) 2024-present COOKIES"

    },
       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
  }

  
})
