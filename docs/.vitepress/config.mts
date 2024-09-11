import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "神秘的干货屋",
  description: "Training plan in Youthol",
  lastUpdated: true,
  base: "/youthol-training-plan/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "训练计划", link: "/training-plan/" },
      { text: "高级技巧", link: "/advanced-tech/" },
    ],

    sidebar: {
      "/training-plan/": [
        { text: "Welcome", link: "/training-plan/" },
        {
          text: "Level 1:",
          collapsed: false,
          items: [
            { text: "入门知识", link: "/training-plan/1-basic" },
            { text: "HTML知识", link: "/training-plan/2-html" },
            { text: "CSS入门知识", link: "/training-plan/3-basic-css" },
            { text: "CSS进阶", link: "/training-plan/4-advanced-css" },
          ],
        },
        {
          text: "Level 2:",
          collapsed: false,
          items: [
            { text: "JavaScript", link: "/training-plan/5-javascript" },
            { text: "Node.js", link: "/training-plan/7-node" },
            { text: "Vue.js", link: "/training-plan/8-vue" },
          ],
        },
        {
          text: "Level 3:",
          collapsed: true,
          items: [
            { text: "服务器知识", link: "/training-plan/9-server" },
            { text: "Python", link: "/training-plan/10-python" },
            { text: "Django", link: "/training-plan/11-django" },
          ],
        },
        {
          text: "Level 4:",
          collapsed: true,
          items: [
            { text: "数据库", link: "/training-plan/12-database" },
            { text: "MongoDB", link: "/training-plan/13-mongodb" },
            { text: "React", link: "/training-plan/14-react" },
          ],
        },
      ],
      "/advanced-tech/": [
        { text: "本部分简介", link: "/advanced-tech/" },
        {
          text: "高级技巧",
          collapsed: false,
          items: [
            {
              text: "提高编写HTML代码效率的小技巧",
              link: "/advanced-tech/effective-edit-html",
            },
          ],
        },
      ],
    },
    
    footer: {
      message: 'Released under the MIT Licence.',
      copyright: 'Copyright © 2019 Youthol. All rights reserved.',
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    search: {
      provider: "local",
    },
  },
})