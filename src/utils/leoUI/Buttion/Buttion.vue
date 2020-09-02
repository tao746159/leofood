<template>
  <div class="button">
    <button @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Buttion extends Vue {
  handleClick() {
    this.$emit('click')
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>