<template lang="pug">
  div(v-if="resume")
    resume-work(v-for="(work, index) in resume.work" :key="`work-${index}`" :work="work")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

import { JSONResume } from "@/plugins/resume/types"
import ResumeWork from "@/components/resume/ResumeWork.vue"

@Component({ name: "resume", components: { ResumeWork } })
export default class Resume extends Vue {
  private resume: JSONResume.Resume | null = null

  private async mounted() {
    this.resume = this.$resume
    setTimeout(() => {
      this.$anime({
        targets: ".resume__work",
        easing: "easeOutExpo",
        translateX: [-500, 0],
        opacity: [0, 1],
        duration: 1500,
        direction: "normal",
        delay: this.$anime.stagger(200),
      })
    }, 200)
  }
}
</script>

<style lang="stylus">
.resume__work
  opacity 0
</style>
