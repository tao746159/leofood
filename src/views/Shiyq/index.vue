<template>
  <div class="shiyq">
    <nav-header title="分享"></nav-header>
    <tabs :tabs="tabs" :active="active" @handleTabs="handleTabs"></tabs>
    <div class="shiyq-list-wap">
      <scroller>
        <shiyq-list :shiyqList="shiyqList"></shiyq-list>
      </scroller>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import NavHeader from '@/components/NavHeader.vue'
import Tabs from './components/tabs.vue'
import ShiyqList from './components/ShiyqList.vue'
@Component({
  components: { NavHeader, Tabs, ShiyqList },
})
export default class Shiyq extends Vue {
  public tabs: Array<object> = [
    {
      icon: 'new',
      text: '最新',
    },
    {
      icon: 'attention',
      text: '关注',
    },
    {
      icon: 'publish',
      text: '发布',
    },
  ]
  public active = 'new'
  public shiyqList: Array<object> = [
    {
      avatar: 'avatar1',
      username: '疯狂的跳蚤',
      dingw: '湖南 长沙',
      images: 'img1',
      summary:
        '今天做了一道超级无敌下饭的肉末茄子！不油炸不油腻，简单又健康💯轻轻松松横扫三碗米饭，赶紧跟着一起做起来吧！！',
      like: '1000',
      praise: '100',
      leave: '20',
      id: 1,
    },
    {
      avatar: 'avatar2',
      username: '倔强的小强',
      dingw: '湖北 武汉',
      images: 'img2',
      summary:
        '炒鸡杂是一道补血食谱，制作原料有酸白菜、鸡肠、鸡肝等。咸香醇鲜，嫩脆爽口，注意芹菜和辣椒不宜炒得太熟。',
      like: '800',
      praise: '120',
      leave: '30',
      id: 2,
    },
  ]

  handleTabs(name: string) {
    this.active = name
  }
}
</script>

<style scoped>
.shiyq-list-wap {
  position: absolute;
  width: 100%;
  height: calc(100% - 114px - 48px);
  top: 114px;
  left: 0;
}
</style>