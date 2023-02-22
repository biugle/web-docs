/*
 * @Author: HxB
 * @Date: 2023-02-13 13:42:01
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-02-20 16:42:22
 * @Description: 配置文件
 * @FilePath: \web-docs\source\_conf\init.js
 */
window.$docsify = {
  // https://docsify.js.org/#/zh-cn/configuration
  el: '#bio-main',
  basePath: '/source/',
  name: '前端文档',
  // logo: './favicon.png',
  nameLink: '/',
  loadSidebar: './_conf/_sidebar.md',
  loadNavbar: './_conf/_navbar.md',
  coverpage: './_conf/_coverpage.md',
  alias: {
    '/.*/_sidebar.md': './_conf/_sidebar.md',
    '/.*/_navbar.md': './_conf/_navbar.md',
    '/.*/_coverpage.md': './_conf/_coverpage.md'
  },
  notFoundPage: './404.md',
  mergeNavbar: true,
  autoHeader: false,
  onlyCover: true,
  subMaxLevel: 5,
  maxLevel: 5,
  auto2top: true,
  search: {
    maxAge: 86400000,
    paths: 'auto',
    placeholder: 'Search',
    noData: 'No Results!',
    depth: 5,
    hideOtherSidebarContent: false,
    namespace: 'biugle-web'
  },
  tabs: {
    persist: true,
    sync: false,
    theme: 'classic' // material
  },
  plugins: [
    EditOnGithubPlugin.create(
      'https://github.com/biugle/web-docs/tree/main/source/',
      null,
      "<span id='edit-btn'>Edit Online</span>"
    )
  ]
};
