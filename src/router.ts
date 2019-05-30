import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"
import Resume from "@/views/Resume.vue"
import Contact from "@/views/Contact.vue"
import Projects from "@/views/Projects.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
  ],
})
