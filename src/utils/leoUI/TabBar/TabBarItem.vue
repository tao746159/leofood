<template>
  <div class="tabbar-item" :title="title" :class="selclass" @click="handleClick(icon)">
    <svg-icon :iconClass="icon"></svg-icon>
    <span>{{title}}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SvgIcon from '@/components/SvgIcon.vue'
@Component({
  components: { SvgIcon },
})
export default class TabBar extends Vue {
  @Prop({ default: '' }) title!: string
  @Prop({ default: '' }) icon!: string
  @Prop({ default: '' }) selclass!: string
  @Prop({ default: '' }) tintColor!: string

  created() {
    const paths = this.$route.path.slice(1)
    this.$emit('handleTabSelected', paths)
  }
  handleClick(name: string) {
    this.$emit('handleTabSelected', name)
    const paths = this.$route.path.slice(1)
    if (name === paths) return
    this.$router.push(name)
  }
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>