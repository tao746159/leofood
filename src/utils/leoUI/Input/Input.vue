<template>
  <div class="input">
    <span v-if="lefticon" class="lefticon">
      <svg-icon :iconClass="lefticon"></svg-icon>
    </span>
    <input :type="type" @input="handleChange" :placeholder="placeholder" :value="value" />
    <a class="clear" v-if="clear && value.length > 0" @click="handleClick">x</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Input extends Vue {
  @Prop({ default: '' }) value!: string
  @Prop({ default: 'text' }) type!: string
  @Prop({ default: '' }) lefticon!: string
  @Prop({ default: '' }) placeholder!: string
  @Prop({ default: '' }) clear!: string
  handleChange(e: any) {
    this.$emit('input', e.target.value)
    // 通知父级执行校验
    this.$parent.$emit('validate')
  }
  handleClick() {
    this.$emit('handleClear')
  }
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>