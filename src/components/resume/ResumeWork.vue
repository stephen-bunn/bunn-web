<template lang="pug">
  v-card(flat max-width="600").resume__work.transparent
    v-card-title(primary-title)
      v-layout(column)
        div.headline {{ work.position }}
        div
          span.subheading at&nbsp;
          a(:href="work.website" target="_blank").subheading {{ work.company }}
          span.subheading &nbsp;for {{ duration }}
    v-card-text
      v-layout(column)
        v-flex
          p {{ work.summary }}
      v-flex
        v-chip(outline disabled v-for="(highlight, index) in work.highlights" :key="`hightlight-${index}`") {{ highlight }}
</template>

<script lang="ts">
import _ from "lodash"
import moment, { Moment } from "moment"
import { Component, Vue, Prop } from "vue-property-decorator"
import { JSONResume } from "@/plugins/resume/types"

@Component({ name: "resume-work" })
export default class ResumeWork extends Vue {
  @Prop({ type: Object, required: true }) private readonly work!: JSONResume.Work

  get startDate(): Moment {
    return moment(this.work.startDate)
  }

  get endDate(): Moment | null {
    return !_.isNil(this.work.endDate) ? moment(this.work.endDate) : null
  }

  get duration(): string {
    return !_.isNil(this.work.endDate)
      ? moment(this.work.endDate).from(this.work.startDate, true)
      : moment(this.work.startDate).fromNow(true)
  }
}
</script>

<style lang="stylus"></style>
