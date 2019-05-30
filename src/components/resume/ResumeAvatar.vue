<template lang="pug">
  div.resume__avatar
    v-avatar(:size="size")
      v-img(v-if="use == 'picture'" :src="picture" :lazy-src="loadingImage" @error="pictureFailed = true")
      v-img(v-else-if="use == 'gravatar'" :src="gravatarUrl" :lazy-src="loadingImage" @error="gravatarFailed = true")
      v-icon(v-else :size="size") {{ icon }}
</template>

<script lang="ts">
import _ from "lodash"
import gravatar from "gravatar"
import { Component, Vue, Prop } from "vue-property-decorator"

@Component({ name: "resume-avatar" })
export default class ResumeAvatar extends Vue {
  private pictureFailed: boolean = false
  private gravatarFailed: boolean = false

  @Prop({ type: String }) private readonly picture!: string | null
  @Prop({ type: String, required: false }) private readonly email!: string | null
  @Prop({ type: String, required: false, default: "fe-user" }) private readonly icon!: string
  @Prop({ type: Number, required: false, default: 128 }) private readonly size!: number

  get loadingImage(): string {
    return `https://picsum.photos/10/6?image=${_.random(10, 100)}`
  }

  get use(): "picture" | "gravatar" | "icon" {
    if (_.isNil(this.picture) || _.isEmpty(this.picture) || this.pictureFailed) {
      if (this.gravatarFailed) {
        return "icon"
      } else {
        return "gravatar"
      }
    } else {
      return "picture"
    }
  }

  get gravatarUrl(): string | null {
    if (!_.isNil(this.email)) {
      return gravatar.url(this.email, { size: this.size.toString(), rating: "pg", default: "404" }, true)
    }
    return null
  }
}
</script>
