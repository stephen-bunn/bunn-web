<template lang="pug">
  v-card(flat).resume__skill.transparent
    v-card-text
      div.headline {{ skill.name }}
      v-chip(label disabled v-for="(keyword, index) in skill.keywords" :key="`skill-${skill.name}-${index}-${keyword}`") {{ keyword }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { JSONResume } from "@/plugins/resume/types"

@Component({ name: "resume-skill" })
export default class ResumeSkill extends Vue {
  @Prop({ type: Object, required: true }) private readonly skill!: JSONResume.Skill
}
</script>

<style lang="stylus"></style>
