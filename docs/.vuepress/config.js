module.exports = {
  title: 'Soft UI',
  description: '一个基于 Vue 的 UI 组件库',
  plugins: ['demo-block'],
  head: [
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    // ['script', { src: 'https://unpkg.com/element-ui/lib/index.js' }],
    // [
    //   'link',
    //   {
    //     rel: 'stylesheet',
    //     href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
    //   }
    // ]
  ],
  themeConfig: {
    nav: [{ text: '首页', link: '/' }],
    sidebar: [
      '/introduce/', // 对应 docs/introduce 目录下的 README.md 文件
      {
        title: '入门',
        children: [
          '/install/', // 对应 docs/install 目录下的 README.md 文件
          '/get-start/' // 对应 docs/get-start 目录下的 README.md 文件
        ]
      },
      {
        title: '组件',
        children: [
          '/components/grid.md',
          '/components/button.md',
          '/components/notice.md',
          '/components/table.md',
          '/components/switch.md',
          '/components/checkbox.md',
          '/components/input.md',
          '/components/radio.md',
          '/components/message.md',
          '/components/form.md'
        ]
      }
    ]
  }
}
