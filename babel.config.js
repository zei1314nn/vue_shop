// 这是项目发布阶段需要用到的 babel 插件
const prodplugins = []
if (process.env.MODE_ENV === 'production') {
  prodplugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 发布产品时候的插件数组
    ...prodplugins,
    "@babel/plugin-syntax-dynamic-import"
  ]
}
