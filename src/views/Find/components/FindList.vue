<template>
  <div class="find-list">
    <div v-if="findList.length > 0" class="find-list-scroll">
      <scroller>
        <ul>
          <li v-for="(item, index) in findList" :key="index">
            <div class="img-warpper">
              <img :src="require(`../../../assets/image/find-list/${item.src}.jpg`)" />
            </div>
            <div class="title-wap">
              <p class="title">{{item.text}}</p>
              <p class="summary">{{item.summary}}</p>
            </div>
          </li>
        </ul>
      </scroller>
    </div>
    <div v-else></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class FindList extends Vue {
  @Prop({ default: [] }) findList!: Array<object>
}
</script>

<style lang="sass" scoped>
@import './index.scss';
</style>