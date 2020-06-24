# 快速开始


### 按需引入

在Vue Cli 中使用，配置`babel.config.js`
#### 配置babel-plugin-component插件
```diff
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
+  plugins: [
+    [
+      'component',
+      {
+        libraryName: 'soft-ui',
+        styleLibraryName: 'styles'
+      }
+    ]
+  ]
}

```

#### main.js 中使用
```js
import Vue from 'vue'
import App from './App.vue'
import { button } from 'soft-ui'
Vue.config.productionTip = false
Vue.use(button)

new Vue({
  render: (h) => h(App)
}).$mount('#app')

```