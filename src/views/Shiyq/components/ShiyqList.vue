<template>
  <div class="shiyq-list">
    <ul>
      <li v-for="item in shiyqList" :key="item.id">
        <div class="warpper">
          <div class="list-top">
            <div class="avatar">
              <img :src="require(`../../../assets/image/shiyq-list/avatar/${item.avatar}.jpg`)" />
            </div>
            <div>
              <span class="name">{{item.username}}</span>
              <br />
              <span class="dingw">{{item.dingw}}</span>
            </div>
          </div>
          <div class="list-cont">
            <div class="list-cont-img">
              <img :src="require(`../../../assets/image/shiyq-list/img/${item.images}.jpg`)" />
            </div>
            <div class="summary">{{item.summary}}</div>
          </div>
          <div class="list-bot">
            <div class="like">
              <span class="likes">{{item.like}}</span>
              <span>喜欢</span>
            </div>
            <div class="praise-war">
              <div class="praise">
                <svg-icon iconClass="praise"></svg-icon>
                <span>{{item.praise}}</span>
              </div>
              <div class="leave">
                <svg-icon iconClass="leave"></svg-icon>
                <span>{{item.leave}}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class ShiyqList extends Vue {
  @Prop({ default: [] }) shiyqList!: Array<object>
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>