import Vue from "vue"
import resume from "@/assets/resume.json"
import { JSONResume } from "./types"

Vue.use({
  install: (v: any) => {
    v.prototype.$resume = resume as JSONResume.Resume
  },
})
