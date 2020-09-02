<template>
  <div class="find">
    <div class="search">
      <leo-input search="search" clear="true" v-model="search" @search="handleSearch"></leo-input>
    </div>
    <top-tabs :findTabs="findTabs" @handleTabs="handleTabs"></top-tabs>
    <find-list :findList="findList"></find-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TopTabs from './components/topTabs.vue'
import LeoInput from '@/utils/leoUI/Search/input.vue'
import FindList from './components/FindList.vue'
@Component({
  components: { TopTabs, LeoInput, FindList },
})
export default class Find extends Vue {
  public findTabs: Array<object> = [
    {
      icon: 'meishi',
      text: '创意美食',
    },
    {
      icon: 'jinxuan',
      text: '厨师精选',
    },
    {
      icon: 'huanguang',
      text: '火热菜谱',
    },
    {
      icon: 'shoushen',
      text: '瘦身食谱',
    },
  ]
  public findList: Array<object> = [
    {
      sort: 'shoushen',
      src: 'qzqkjzg',
      text: '清蒸秋葵金针菇',
      summary:
        '这两个都是比较适合清蒸的菜，所以把他们组合在一起，卖相不错，口感也挺不错，可清淡可重口，喜辣的多加泡椒。',
    },
    {
      sort: 'shoushen',
      src: 'syhsymz',
      text: '山药红薯燕麦粥',
      summary: '营养丰富，简单快捷。',
    },
    {
      sort: 'shoushen',
      src: 'qzqkjzg',
      text: '清蒸秋葵金针菇',
      summary:
        '这两个都是比较适合清蒸的菜，所以把他们组合在一起，卖相不错，口感也挺不错，可清淡可重口，喜辣的多加泡椒。',
    },
    {
      sort: 'shoushen',
      src: 'syhsymz',
      text: '山药红薯燕麦粥',
      summary: '营养丰富，简单快捷。',
    },
    {
      sort: 'shoushen',
      src: 'qzqkjzg',
      text: '清蒸秋葵金针菇',
      summary:
        '这两个都是比较适合清蒸的菜，所以把他们组合在一起，卖相不错，口感也挺不错，可清淡可重口，喜辣的多加泡椒。',
    },
    {
      sort: 'shoushen',
      src: 'syhsymz',
      text: '山药红薯燕麦粥',
      summary: '营养丰富，简单快捷。',
    },
  ]
  public search = ''

  handleSearch() {
    console.log(this.search)
  }
  handleTabs(name: string) {
    this.search = name
    this.handleSearch()
  }
}
</script>

<style scoped>
.find {
  background: #f9f9f9;
  margin-top: 1rem;
}
.search {
  background-color: #ffffff;
  padding: 0 1rem;
  padding-bottom: 0.5rem;
}
</style>