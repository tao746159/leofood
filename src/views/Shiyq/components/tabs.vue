<template>
  <div class="shiyq-tabs">
    <ul>
      <li
        v-for="item in tabs"
        :key="item.icon"
        :class="active === item.icon ? 'active' : ''"
        @click="handleTabs(item.icon)"
      >
        <svg-icon :iconClass="item.icon"></svg-icon>
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SvgIcon from '@/components/SvgIcon.vue'
@Component({
  components: { SvgIcon },
})
export default class Tabs extends Vue {
  @Prop({ default: [] }) tabs!: Array<object>
  @Prop({ default: '' }) active!: string
  handleTabs(name: string) {
    this.$emit('handleTabs', name)
  }
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>