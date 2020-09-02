<template>
  <div class="home">
    <nav-header title="Leo Food" ding="true" icon="search"></nav-header>
    <top-tabs :topTabs="topTabs" :busy="busy" @handletabs="handletabs"></top-tabs>
    <home-list :homeList="arr" v-if="arr.length > 0"></home-list>
    <div v-else class="zwsj">
      <svg-icon iconClass="zwsj"></svg-icon>
      <br />
      <span>暂时没有数据</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import NavHeader from '@/components/NavHeader.vue'
import TopTabs from './components/topTabs.vue'
import HomeList from './components/homelist.vue'
import SvgIcon from '@/components/SvgIcon.vue'

@Component({
  name: 'Home',
  components: { NavHeader, TopTabs, HomeList },
})
export default class Home extends Vue {
  public array = [
    {
      src: 'swipe1',
    },
    {
      src: 'swipe2',
    },
    {
      src: 'swipe3',
    },
    {
      src: 'swipe4',
    },
  ]
  public adlist = [
    {
      src: 'zaoc',
      title: '早餐',
      text: '5793份作品',
    },
    {
      src: 'zhongc',
      title: '中餐',
      text: '4026份作品',
    },
    {
      src: 'wanc',
      title: '晚餐',
      text: '6318份作品',
    },
  ]
  public homeList = [
    {
      src: 'kelejichi',
      title: '蜜汁鸡翅',
      summary:
        '蜜汁鸡翅一直以来都是我的心头大爱，香嫩口感带来抵挡不住的美味诱惑，色香味俱全，营养又健康做法也简单，一个接着一个吃！',
      pirce: '38',
      production: '48',
    },
    {
      src: 'jiucaixianggang',
      title: '酒香肉丝豆干',
      summary:
        '豆干为黄豆加工而成，营养价值较高。豆干含有多种矿物质，补充钙质，防止因缺钙引起的骨质疏松，促进骨骼发育，对青少年及儿童骨骼生长极为有利！',
      pirce: '18',
      production: '28',
    },
    {
      src: 'lazijiding',
      title: '辣子鸡丁',
      summary:
        '饭店里面的这道菜都要辣椒堆里找鸡丁，自己在家做就可以鸡丁堆里找辣椒了。',
      pirce: '38',
      production: '48',
    },
    {
      src: 'guobaorou',
      title: '锅包肉',
      summary: '只需要几步，就可以做出称霸东北的名菜，好吃又好看',
      pirce: '24',
      production: '30',
    },
  ]
  public topTabs = [
    {
      icon: 'zaocang',
      text: '早餐',
    },
    {
      icon: 'wucang',
      text: '午餐',
    },
    {
      icon: 'biandang',
      text: '便当',
    },
    {
      icon: 'dianxin',
      text: '点心',
    },
    {
      icon: 'xiaoye',
      text: '宵夜',
    },
  ]
  public busy = 'zaocang'

  public homeArr = [
    {
      src: 'xxcmjjmt',
      text: '小熊草莓挤挤馒头',
      summary: '味道可口松软，营养丰富',
      sort: 'zaocang',
    },
    {
      src: 'youtiao',
      text: '油条',
      summary: '长条形中空的油炸食品，口感松脆有韧劲',
      sort: 'zaocang',
    },
    {
      src: 'ngxmg',
      text: '元气早餐之南瓜小米羹',
      summary: '助消化、具有丰富的营养价值',
      sort: 'zaocang',
    },
    {
      src: 'tsjdb',
      text: '吐司鸡蛋饼',
      summary: '简单、快捷、营养丰富',
      sort: 'zaocang',
    },
    {
      src: 'nrrgcmb',
      text: '牛肉热狗肠面包',
      summary: '淡奶油，搭配牛肉热狗肠',
      sort: 'zaocang',
    },
    {
      src: 'lzjk',
      text: '辣子鸡块',
      summary: '入口香嫩,香脆，新鲜微咸',
      sort: 'wucang',
    },
  ]
  public arr: Array<object> = []
  created() {
    this.arr = this.homeArr
  }
  handletabs(name: string) {
    this.busy = name
    this.arr = this.homeArr.filter((item) => {
      console.log(item.sort === name)
      return item.sort === name
    })
  }
}
</script>
<style  scoped>
.home {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.scroll {
  position: absolute;
  width: 100%;
  height: calc(100% - 40px - 48px);
  overflow-y: auto;
  left: 0;
  top: 40px;
}
.zwsj {
  margin-top: 6rem;
}
.zwsj span {
  display: inline-block;
  margin-top: 1rem;
}
.svg-icon {
  width: 6rem;
  height: 6rem;
}
</style>