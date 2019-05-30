<template lang="pug">
  v-card(flat).resume__about.transparent
    v-card-text
      p {{ summary }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component({ name: "resume-about" })
export default class ResumeAbout extends Vue {
  @Prop({ type: String, required: true }) private readonly summary!: string
}
</script>

<style lang="stylus"></style>
