<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from 'vue-property-decorator'
@Component
export default class extends Vue {
  @Provide() form = this
  @Prop() model!: object
  @Prop() rules!: object
}
</script>

<style scoped>
</style>