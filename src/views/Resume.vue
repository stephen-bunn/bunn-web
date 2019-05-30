<template lang="pug">
  div(v-if="resume").resume__container

    v-card(flat).transparent
      v-card-title(primary-title)
          v-icon(large left color="black") fe-user
          span.display-1.text-uppercase.font-weight-bold About
      v-card-text
        p {{ resume.basics.summary }}

    v-card(flat).transparent
      v-card-title(primary-title)
          v-icon(large left color="black") fe-briefcase
          span.display-1.text-uppercase.font-weight-bold Work
      v-card-text
        resume-work(v-for="(work, index) in resume.work" :key="`work-${index}`" :work="work")

    v-card(flat).transparent
      v-card-title(primary-title)
          v-icon(large left color="black") fe-bookmark
          span.display-1.text-uppercase.font-weight-bold Publications
      v-card-text
        resume-publication(v-for="(publication, index) in resume.publications" :key="`publication-${index}`" :publication="publication")

    v-card(flat).transparent
      v-card-title(primary-title)
          v-icon(large left color="black") fe-book-open
          span.display-1.text-uppercase.font-weight-bold Education
      v-card-text
        resume-education(v-for="(education, index) in resume.education" :key="`education-${index}`" :education="education")

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

import { JSONResume } from "@/plugins/resume/types"
import ResumeWork from "@/components/resume/ResumeWork.vue"
import ResumeEducation from "@/components/resume/ResumeEducation.vue"
import ResumePublication from "@/components/resume/ResumeEducation.vue"

@Component({ name: "resume", components: { ResumeWork, ResumeEducation, ResumePublication } })
export default class Resume extends Vue {
  private resume: JSONResume.Resume | null = null

  private async mounted() {
    this.resume = this.$resume
  }
}
</script>

<style lang="stylus"></style>
