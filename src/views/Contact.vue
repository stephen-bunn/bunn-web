<template lang="pug">
  div.contact__container

    div
      span.body-1 You can contact me at any time. I'm available most daytime hours (
      a.body-1(href="https://time.is/EDT" target="_blank") EDT
      span.body-1 ).

    v-list
      v-list-tile(tag="a" v-for="(item, itemIndex) in contactItems" v-if="item.value" :key="`contact-item-${itemIndex}`" :href="item.link" :target="item.target || ''")
        v-list-tile-action
          v-icon {{ item.icon }}
        v-list-tile-content
          v-list-tile-title {{ item.value }}

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({ name: "contact" })
export default class Contact extends Vue {
  get contactItems() {
    return [
      {
        icon: "fe-phone",
        value: this.$resume.basics.phone,
        link: `phone:${this.$resume.basics.phone}`,
      },
    ]
  }
}
</script>

<style lang="stylus"></style>
