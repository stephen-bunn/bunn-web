<template lang="pug">
  v-layout(row align-center).resume__language.transparent
    span.headline {{ language.language }}
    v-chip(small dark color="primary") {{ language.fluency }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { JSONResume } from "@/plugins/resume/types"

@Component({ name: "resume-language" })
export default class ResumeLanguage extends Vue {
  @Prop({ type: Object, required: true }) private readonly language!: JSONResume.Language
}
</script>

<style lang="stylus"></style>
