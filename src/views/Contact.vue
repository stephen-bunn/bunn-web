<template lang="pug">
  div.contact__container

    v-flex(mb-4)
      span.body-1.font-weight-bold Feel free to contact me at any time!
      div
        span I'm available most daytime hours (
        a.body-1(href="https://time.is/EDT" target="_blank") EDT
        span.body-1 ) and am open to all opportunities.

    v-flex(v-for="(item, itemIndex) in contactItems" v-if="item.value" :key="`contact-item-${itemIndex}`")
      span
        v-icon(left) {{ item.icon }}
        a(:href="item.link" :target="item.target || ''").headline {{ item.value }}

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
        link: `tel:${this.$resume.basics.phone}`,
      },
      {
        icon: "fe-mail",
        value: this.$resume.basics.email,
        link: `mailto:${this.$resume.basics.email}`,
      },
    ]
  }
}
</script>

<style lang="stylus">
.contact__container {
  width: 600px;
}
</style>
