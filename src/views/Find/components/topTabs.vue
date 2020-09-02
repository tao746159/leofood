<template>
  <div class="find-tabs">
    <span class="remen">热门：</span>
    <ul>
      <li v-for="item in findTabs" :key="item.icon" @click="handleClick(item.text)">
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class TopTabs extends Vue {
  @Prop({ default: [] }) findTabs!: Array<object>

  handleClick(name: string) {
    this.$emit('handleTabs', name)
  }
}
</script>

<style lang="sass" scoped>
@import './index.scss';

</style>