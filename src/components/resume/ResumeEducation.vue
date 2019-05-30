<template lang="pug">
  v-card(flat max-width="600").resume__education.transparent
    v-card-title(primary-title)
      v-layout(column)
        div.headline {{ education.institution }}
        div.subheading
          span {{ education.studyType }} of {{ education.area }}
          span &nbsp;for {{ duration }}
          span(v-if="!endDate").subheading
            span &nbsp;&mdash;&nbsp;
            span.font-italic Current Position
    v-card-text
      v-layout(column)
        v-list(dense).transparent
          v-list-tile(v-for="course in education.courses" :key="course").course
            v-list-tile-content
              v-list-tile-title {{ course }}
</template>

<script lang="ts">
import _ from "lodash"
import moment, { Moment } from "moment"
import { Component, Vue, Prop } from "vue-property-decorator"
import { JSONResume } from "@/plugins/resume/types"

@Component({ name: "resume-education" })
export default class ResumeEducation extends Vue {
  @Prop({ type: Object, required: true }) private readonly education!: JSONResume.Education

  get startDate(): Moment {
    return moment(this.education.startDate)
  }

  get endDate(): Moment | null {
    return !_.isNil(this.education.endDate) ? moment(this.education.endDate) : null
  }

  get duration(): string {
    return !_.isNil(this.education.endDate)
      ? moment(this.education.endDate).from(this.education.startDate, true)
      : moment(this.education.startDate).fromNow(true)
  }
}
</script>

<style lang="stylus">
</style>
