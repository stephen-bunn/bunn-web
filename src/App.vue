<template lang="pug">
  v-app(:dark="dark")
    v-toolbar(app flat)
      v-toolbar-items
        v-btn(flat :to="{name: 'resume'}")
          v-icon(left) fe-book-open
          span Resume
        v-btn(flat :to="{name: 'contact'}")
          v-icon(left) fe-at-sign
          span Contact
        v-btn(flat :to="{name: 'projects'}")
          v-icon(left) fe-box
          span Projects
      v-spacer
      template(v-for="(profile, index) in $resume.basics.profiles")
        v-btn(icon flat :key="`profile-${index}`" :href="profile.url" target="_blank")
          v-icon {{ profileIcons[profile.network.toLowerCase()] }}
    v-content
      v-container(transparent)
        scroll-button(fold target="body")
          v-layout(column align-center mb-5)
            resume-avatar(:picture="$resume.basics.picture" :email="$resume.basics.email")
            h1.headline {{ $resume.basics.label }}
            dropin-title(:title="$resume.basics.name" @complete="showTabs")
          router-view
</template>

<script lang="ts">
import _ from "lodash"
import { Component, Vue, Watch } from "vue-property-decorator"

import { JSONResume } from "@/plugins/resume/types"
import ResumeAvatar from "@/components/resume/ResumeAvatar.vue"
import DropinTitle from "@/components/DropinTitle.vue"
import ScrollButton from "@/components/ScrollButton.vue"

@Component({ name: "app", components: { ResumeAvatar, DropinTitle, ScrollButton } })
export default class App extends Vue {
  private dark: boolean = false
  private profileIcons: { [key: string]: string } = {
    github: "fe-github",
    linkedin: "fe-linkedin",
    twitter: "fe-twitter",
    facebook: "fe-facebook",
    medium: "mdi-medium",
  }

  @Watch("dark")
  private onDarkChanged(value: boolean, oldValue: boolean) {
    this.$cookies.set("dark", JSON.stringify(value))
  }

  private async showTabs() {
    this.$anime({
      targets: ".tab",
      opacity: [0, 1],
      direction: "normal",
      delay: this.$anime.stagger(100),
      duration: 1000,
    })
  }

  private async mounted() {
    this.dark = JSON.parse(this.$cookies.get("dark") || "false") || false
  }
}
</script>

<style lang="stylus">
@import '~@icon/feather/feather.css';
@import '~@/assets/styles/main';
</style>
