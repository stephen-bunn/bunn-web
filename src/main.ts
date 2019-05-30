import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
import "@/service-worker"

import "roboto-fontface/css/roboto/roboto-fontface.css"
import "@mdi/font/css/materialdesignicons.css"

import "@/plugins/vuetify"
import "@/plugins/cookies"
import "@/plugins/anime"
import "@/plugins/resume"

import "@/assets/styles/main.styl"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount("#app")
