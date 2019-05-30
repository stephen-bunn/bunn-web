<template lang="pug">
  div(v-scroll="onScroll")#scroll-button-anchor
    slot
    transition(:name="transition")
      v-tooltip(left)
        v-btn(fab icon fixed bottom right slot="activator" :dark="dark" :color="color" :disabled="disabled" @click="scroll" v-show="visible")
          v-icon(large) {{ icon }}
        span {{ text }}
</template>

<script lang="ts">
import { debounce } from "helpful-decorators"
import { Component, Vue, Prop } from "vue-property-decorator"
import { VuetifyGoToEasing, VuetifyGoToOptions } from "vuetify"

@Component({ name: "scroll-button" })
export default class ScrollButton extends Vue {
  pixelOffset: number = 0

  @Prop({ type: Boolean, default: false, required: false }) readonly fold!: boolean
  @Prop({ type: String, default: "fade-transition", required: false }) readonly transition!: string
  @Prop({ type: Number, default: 1, required: false }) readonly offset!: number
  @Prop({ type: Boolean, default: false, required: false }) readonly dark!: boolean
  @Prop({ type: Boolean, default: false, required: false }) readonly disabled!: boolean
  @Prop({ type: String, default: "primary", required: false }) readonly color!: string
  @Prop({ type: String, default: "fe-arrow-up", required: false }) readonly icon!: string | null
  @Prop({ type: String, default: "Back to top", required: false }) readonly text!: string
  @Prop({ type: String, default: "#scroll-button-anchor", required: false }) readonly target!: string
  @Prop({ type: Number, default: 500, required: false }) readonly scrollDuration!: number
  @Prop({ type: Number, default: 0, required: false }) readonly scrollOffset!: number
  @Prop({ type: String, default: "easeInOutCubic", required: false }) readonly scrollEasing!: VuetifyGoToEasing

  get visible(): boolean {
    return (this.fold ? this.foldOffset : this.pixelOffset) > this.offset
  }

  get foldOffset(): number {
    return this.pixelOffset / window.innerHeight
  }

  get options(): VuetifyGoToOptions {
    return {
      duration: this.scrollDuration,
      offset: this.scrollOffset,
      easing: this.scrollEasing,
    }
  }

  @debounce(100)
  onScroll(): void {
    this.pixelOffset = window.pageYOffset || document.documentElement.scrollTop
  }

  scroll(): void {
    this.$vuetify.goTo(this.target, this.options)
  }
}
</script>

<style lang="stylus"></style>
