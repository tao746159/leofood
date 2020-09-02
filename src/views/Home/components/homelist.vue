<template>
  <div class="home-list">
    <scroller>
      <ul>
        <li v-for="item in homeList" :key="item.src">
          <div class="home-item">
            <div class="image-warpper">
              <img :src="require(`../../../assets/image/home-list/${item.src}.jpg`)" />
            </div>
            <h4>{{item.text}}</h4>
            <p class="summary">{{item.summary}}</p>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HomeList extends Vue {
  @Prop({ default: [] }) homeList!: Array<object>
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>