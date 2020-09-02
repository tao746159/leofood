<template>
  <div class="swipe">
    <ul ref="swipeUl" class="swipe-ul">
      <li v-for="(item) in list" :key="item.src">
        <img :src="require(`../../../assets/image/swipe/${item.src}.jpg`)" />
      </li>
    </ul>
    <ol class="swipe-ol">
      <li v-for="(item,num) in list" :key="num">
        <span :class="(num+1) === index ? 'active':''"></span>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Swipe extends Vue {
  @Prop({ default: '300px' }) height?: string
  @Prop({ default: [] }) list!: Array<object>
  @Prop({ default: true }) autoplay?: boolean
  @Prop({ default: 3000 }) interval?: number
  public index = 0
  public timer: any = null
  width = document.body.clientWidth

  mounted() {
    this.$refs.swipeUl.style.width = this.width * (this.list.length + 1) + 'px'

    this.swipeAuto()
  }

  swipeAuto() {
    if (this.list.length < 2) return new Error('图片不能小于1')
    for (let i = 0; i < this.list.length; i++) {
      this.$refs.swipeUl.children[i].style.width = this.width + 'px'
    }
    this.$refs.swipeUl.appendChild(
      this.$refs.swipeUl.children[0].cloneNode(true)
    )
    this.timer = setInterval(() => {
      if (this.index >= this.list.length) {
        this.index = 0
        this.stopamintion()
        setTimeout(() => {
          this.index++
          this.leftamintion(this.index)
        }, 50)
      } else {
        this.index++

        this.leftamintion(this.index)
      }
    }, this.interval)
  }
  leftamintion(index: number) {
    this.$refs.swipeUl.style.transition = `1s`
    this.$refs.swipeUl.style.transform = `translateX(${index * -this.width}px)`
  }
  stopamintion() {
    this.$refs.swipeUl.style.transition = `0s`
    this.$refs.swipeUl.style.transform = `translateX(${0}px)`
  }

  destroyed() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>