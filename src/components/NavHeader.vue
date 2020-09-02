<template>
  <div class="header">
    <span class="dingw" v-if="ding">定位</span>
    <h4>{{title}}</h4>
    <span class="icon" v-if="icon">
      <svg-icon iconClass="search" class="search-icon"></svg-icon>
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import SvgIcon from '@/components/SvgIcon.vue'

@Component({
  components: { SvgIcon },
})
export default class NavHeader extends Vue {
  @Prop({ default: '' }) title!: string
  @Prop({ default: false }) ding!: boolean
  @Prop({ default: '' }) icon!: string
  public value = ''
}
</script>

<style lang="sass" scoped>
@import './index.scss';
</style>
