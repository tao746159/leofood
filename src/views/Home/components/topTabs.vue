<template>
  <div class="top-tabs">
    <ul>
      <li
        v-for="item in topTabs"
        :key="item.src"
        :class="item.icon === busy ? 'active': ''"
        @click="handletabsClick(item.icon)"
      >
        <svg-icon :iconClass="item.icon"></svg-icon>
        <br />
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SvgIcon from '@/components/SvgIcon.vue'

@Component
export default class TopTabs extends Vue {
  @Prop({ default: [] }) topTabs!: Array<object>
  @Prop({ default: 'busy' }) busy!: string

  handletabsClick(name: string) {
    this.$emit('handletabs', name)
  }
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>