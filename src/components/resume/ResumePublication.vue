<template lang="pug">
  v-card(flat max-width="600").resume__publication.transparent
    v-card-title(primary-title)
      v-layout(column)
        a(:href="publication.website" target="_blank").headline {{ publication.name }}
        div.subheading
          span Published by {{ publication.publisher }} {{ duration }}
    v-card-text
      p {{ publication.summary }}
</template>

<script lang="ts">
import _ from "lodash"
import moment, { Moment } from "moment"
import { Component, Vue, Prop } from "vue-property-decorator"
import { JSONResume } from "@/plugins/resume/types"

@Component({ name: "resume-publication" })
export default class ResumePublication extends Vue {
  @Prop({ type: Object, required: true }) private readonly publication!: JSONResume.Publication

  get releaseDate(): Moment {
    return moment(this.publication.releaseDate)
  }

  get duration(): string {
    return this.releaseDate.fromNow(true)
  }
}
</script>

<style lang="stylus"></style>
