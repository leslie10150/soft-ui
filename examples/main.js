import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import DemoBlock from "./components/demo-block.vue"
import element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import soft from "@/index.js"
import "@/styles/index.scss"
Vue.use(element)
Vue.use(soft)
Vue.component("demo-block", DemoBlock)


new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
