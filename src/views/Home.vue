<template lang="pug">
  h1 Home
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

import DropinTitle from "@/components/DropinTitle.vue"
import ResumeAvatar from "@/components/resume/ResumeAvatar.vue"

@Component({ name: "home", components: { DropinTitle, ResumeAvatar } })
export default class Home extends Vue {
  private async showTabs() {
    this.$anime({
      targets: ".tab",
      opacity: [0, 1],
      direction: "normal",
      delay: this.$anime.stagger(100),
      duration: 1000,
    })
  }
}
</script>

<style lang="stylus">
.name
  margin-left 22px

.tab
  font-family "Advent Pro", sans-serif
  color #0288D1
  font-size 18px
  font-weight bold
  opacity 0
</style>
