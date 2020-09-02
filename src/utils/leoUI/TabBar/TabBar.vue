<template>
  <div class="tabbar" ref="tabbar">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TabBar extends Vue {
  @Prop({ default: '' }) bgcolor!: string
  @Prop({ default: '' }) tintColor!: string
  @Prop({ default: '' }) unselectedTintColor!: string

  mounted() {
    this.$refs.tabbar.style.background = this.bgcolor
    this.$refs.tabbar.style.color = this.unselectedTintColor
  }
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>