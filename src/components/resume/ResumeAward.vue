<template lang="pug">
  v-card(flat).resume__award.transparent
    v-card-title(primary-title)
      v-layout(column)
        span.headline {{ award.title }}
        div.subheading
          span By {{ award.awarder }} {{ duration }}
    v-card-text
      p {{ award.summary }}
</template>

<script lang="ts">
import moment, { Moment } from "moment"
import { Component, Vue, Prop } from "vue-property-decorator"
import { JSONResume } from "@/plugins/resume/types"

@Component({ name: "resume-award" })
export default class ResumeAward extends Vue {
  @Prop({ type: Object, required: true }) private readonly award!: JSONResume.Award

  get date(): Moment {
    return moment(this.award.date)
  }

  get duration(): string {
    return this.date.fromNow()
  }
}
</script>

<style lang="stylus"></style>
