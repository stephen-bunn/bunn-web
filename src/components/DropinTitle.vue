<template lang="pug">
  h1.dropin-title
    span(v-for="(char, index) in characters" :key="`dropin-title__character-${index}`" v-html="char").character
</template>

<script lang="ts">
import _ from "lodash"
import { Component, Vue, Prop } from "vue-property-decorator"

@Component({ name: "dropin-title" })
export default class DropinTitle extends Vue {
  @Prop({ type: String, required: true }) private readonly title!: string
  @Prop({ type: Number, default: 1000 }) private readonly delay!: number

  get characters(): string[] {
    return _.map(_.toArray(this.title), (value: string) => {
      return /^\s+$/.test(value) ? "&nbsp;" : value
    })
  }

  private async mounted() {
    setTimeout(() => {
      this.$anime({
        targets: ".dropin-title .character",
        easing: "easeOutExpo",
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: (el: Element, i: number) => {
          return 50 * i
        },
        direction: "normal",
        complete: () => {
          this.$emit("complete")
        },
      })
    }, this.delay)
  }
}
</script>

<style lang="stylus">
.dropin-title
  font-family "Advent Pro", sans-serif
  font-size 100px
  line-height 100px
  text-align center
  letter-spacing -1.25px
  width 100%
  overflow hidden
  text-transform uppercase

  .character
    opacity 0
    display inline-block
</style>
