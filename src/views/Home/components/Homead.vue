<template>
  <div class="home-ad">
    <div v-for="item in adlist" :key="item.src" class="ad">
      <img :src="require(`../../../assets/image/home-ad/${item.src}.jpg`)" />
      <div>
        <span>{{item.title}}</span>
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HomeAd extends Vue {
  @Prop({ default: [] }) adlist!: Array<object>
}
</script>

<style lang="sass" scoped>
@import './index.scss';
</style>