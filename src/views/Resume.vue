<template lang="pug">
  div(v-if="resume").resume__container

    v-layout(:row="$vuetify.breakpoint.lgAndUp" :column="$vuetify.breakpoint.mdAndDown")
      v-flex(xs7)
        v-layout(column)
          v-card(flat).transparent
            v-card-title(primary-title)
                v-icon(large left color="black") fe-user
                span.display-1.text-uppercase.font-weight-bold About
            v-card-text
              resume-about(:summary="resume.basics.summary")

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
                v-icon(large left color="black") fe-award
                span.display-1.text-uppercase.font-weight-bold Awards
            v-card-text
              resume-award(v-for="(award, index) in resume.awards" :key="`award-${index}`" :award="award")

      v-flex(xs4)
        v-layout(column)
          v-card(flat).transparent
            v-card-title(primary-title)
                v-icon(large left color="black") fe-globe
                span.display-1.text-uppercase.font-weight-bold Languages
            v-card-text
              resume-language(v-for="(language, index) in resume.languages" :key="`language-${index}`" :language="language")

          v-card(flat).transparent
            v-card-title(primary-title)
                v-icon(large left color="black") fe-book-open
                span.display-1.text-uppercase.font-weight-bold Education
            v-card-text
              resume-education(v-for="(education, index) in resume.education" :key="`education-${index}`" :education="education")

          v-card(flat).transparent
            v-card-title(primary-title)
                v-icon(large left color="black") fe-thumbs-up
                span.display-1.text-uppercase.font-weight-bold Skills
            v-card-text
              resume-skill(v-for="(skill, index) in resume.skills" :key="`skill-${index}`" :skill="skill")


</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { JSONResume } from "@/plugins/resume/types"

import ResumeWork from "@/components/resume/ResumeWork.vue"
import ResumeEducation from "@/components/resume/ResumeEducation.vue"
import ResumePublication from "@/components/resume/ResumePublication.vue"
import ResumeSkill from "@/components/resume/ResumeSkill.vue"
import ResumeAward from "@/components/resume/ResumeAward.vue"
import ResumeAbout from "@/components/resume/ResumeAbout.vue"
import ResumeLanguage from "@/components/resume/ResumeLanguage.vue"

@Component({
  name: "resume",
  components: { ResumeAbout, ResumeWork, ResumeEducation, ResumePublication, ResumeSkill, ResumeAward, ResumeLanguage },
})
export default class Resume extends Vue {
  private resume: JSONResume.Resume | null = null
  private items: object[] = [
    {
      title: "About",
      icon: "fe-user",
    },
    {
      title: "Work",
      icon: "fe-briefcase",
    },
    {
      title: "Publications",
      icon: "fe-bookmark",
    },
    {
      title: "Education",
      icon: "fe-book-open",
    },
    {
      title: "Skills",
      icon: "fe-thumbs-up",
    },
    {
      title: "Awards",
      icon: "fe-award",
    },
    {
      title: "Languages",
      icon: "fe-globe",
    },
  ]

  private async mounted() {
    this.resume = this.$resume
  }
}
</script>

<style lang="stylus"></style>
