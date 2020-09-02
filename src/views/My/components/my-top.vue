<template>
  <div class="top">
    <div class="avatar">
      <img :src="require(`../../../assets/image/shiyq-list/avatar/${avatar}.jpg`)" />
    </div>
    <div class="user-wap">
      <div>
        <span class="username">{{username}}</span>
        <a class="edit">
          <svg-icon iconClass="edit"></svg-icon>
          <span>编辑</span>
        </a>
      </div>

      <span class="dingw">{{dingw}}</span>
      <p class="motto">{{motto}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SvgIcon from '@/components/SvgIcon.vue'
@Component({
  components: { SvgIcon },
})
export default class MyTop extends Vue {
  @Prop({ default: '' }) avatar!: string
  @Prop({ default: '' }) username!: string
  @Prop({ default: '' }) dingw!: string
  @Prop({ default: '' }) motto!: string
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>