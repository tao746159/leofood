<template>
  <div class="input-warpper">
    <!-- 前置内容 -->
    <span v-if="leftText"></span>
    <input v-bind="$attrs" :value="value" @input="handleChangeInput" />
    <span
      v-if="clear && isShow"
      :class="search ? 'clear clearright' : 'clear'"
      @click="handleClear"
    >x</span>
    <svg-icon iconClass="search" v-if="search" class="search" @click="() => {$emit('search')}"></svg-icon>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import SvgIcon from '@/components/SvgIcon.vue'

@Component({
  inheritAttrs: false,
  components: { SvgIcon },
})
export default class Input extends Vue {
  @Prop() value!: string
  @Prop({ default: false }) leftText?: boolean
  @Prop({ default: false }) clear?: boolean
  @Prop({ default: '' }) search?: string
  public isShow = false

  handleChangeInput(e: any) {
    this.$emit('input', e.target.value)
  }
  handleClear() {
    this.$emit('input', '')
  }

  @Watch('value')
  handleIsShow() {
    if (this.value.length > 0) {
      this.isShow = true
    } else {
      this.isShow = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import './input.scss'
</style>