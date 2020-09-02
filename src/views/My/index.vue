<template>
  <div>
    <my-top :avatar="avatar" :username="username" :dingw="dingw" :motto="motto"></my-top>
    <my-icon :iconArr="iconArr"></my-icon>

    <div class="dong">
      <ul>
        <li :class="active === 'dongt'? 'active': ''" @click="active = 'dongt'">
          <span>动态</span>
        </li>
        <li :class="active === 'shouc'? 'active': ''" @click="active = 'shouc'">
          <span>收藏</span>
        </li>
      </ul>
    </div>
    <transition name="slide-fade">
      <div class="dong-cont">
        <scroller>
          <div v-if="active === 'dongt'" class="dongt">
            <ul class="dongt-ul">
              <li v-for="(item, index) in dongt" :key="index">
                <span class="does"></span>
                <div class="span">
                  <span>{{item.date}}</span>
                  <p>{{item.year}}</p>
                </div>
                <p class="title">{{item.title}}</p>
                <div :class="item.images.length > 1 ? 'img-wap imgarr' : 'img-wap'">
                  <ul>
                    <li v-for="(itm, num) in item.images" :key="num">
                      <img :src="require(`../../assets/image/shiyq-list/img/${itm}.jpg`)" />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div v-else class="shouc">
            <ul>
              <li v-for="(item, index) in shouc" :key="index">
                <router-link :to="item.link">
                  <img :src="require(`../../assets/image/shiyq-list/img/${item.src}.jpg`)" />
                </router-link>
              </li>
            </ul>
          </div>
        </scroller>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MyTop from './components/my-top.vue'
import MyIcon from './components/my-icon.vue'
@Component({
  components: { MyTop, MyIcon },
})
export default class My extends Vue {
  public avatar = 'avatar1'
  username = '倔强的小强'
  dingw = '湖北 武汉'
  motto = '空有一颗减肥的心，无奈一条吃货的命'
  public iconArr = [
    {
      icon: 'fensi',
      num: 100,
      text: '粉丝',
    },
    {
      icon: 'guanz',
      num: 20,
      text: '关注',
    },
    {
      icon: 'dianzan',
      num: 15,
      text: '点赞',
    },
  ]
  public active = 'dongt'
  public dongt = [
    {
      date: '7.20',
      year: '2020',
      title: '新发布了照片',
      images: ['img1'],
    },
    {
      date: '7.18',
      year: '2020',
      title: '早餐还是要吃的',
      images: ['img2', 'img3', 'img2', 'img3', 'img2', 'img3', 'img2', 'img3'],
    },
    {
      date: '7.15',
      year: '2020',
      title: '辣子鸡丁',
      images: ['img1'],
    },
    {
      date: '7.10',
      year: '2020',
      title: '丰盛的晚餐',
      images: ['img2', 'img3', 'img2', 'img3', 'img2', 'img3', 'img2', 'img3'],
    },
  ]
  public shouc = [
    {
      src: 'img1',
      link: 'img1',
    },
    {
      src: 'img2',
      link: 'img2',
    },
    {
      src: 'img3',
      link: 'img3',
    },
    {
      src: 'img4',
      link: 'img4',
    },
  ]
}
</script>

<style scoped>
.dong {
  margin-top: 1.2rem;
}
.dong ul {
  display: flex;
  justify-content: space-around;
  padding-bottom: 0.5rem;
}
.dong li {
  color: #888888;
  font-size: 14px;
}
.dong li.active {
  border-bottom: 1px solid #1fc696;
  padding-bottom: 0.5rem;
  transition: all 0.3s ease-out;
  color: #042149;
}
.dong-cont {
  height: 18.5rem;
  position: relative;
  background: #f7f7f7;
}
.dongt {
  padding: 1rem 0;
}
.dongt .dongt-ul > li {
  padding-left: 1rem;
  margin-left: 4rem;
  border-left: 1px solid #1fc696;
  text-align: left;
  font-size: 12px;
  padding-bottom: 1rem;
}
.does {
  position: absolute;
  left: 3.7rem;
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  border: 0.2rem solid #1fc696;
  border-radius: 50%;
}
.span {
  position: absolute;
  left: 1rem;
  color: #1fc696;
}
.title {
  color: #888888;
}

.img-wap li {
  width: 7rem;
  height: 4rem;
  overflow: hidden;
  margin-top: 0.5rem;
}
.imgarr ul {
  display: flex;
  flex-wrap: wrap;
}
.imgarr li {
  margin-right: 0.3rem;
  flex: 0 0 30%;
}
.img-wap img {
  max-width: 100%;
}
.shouc ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.shouc li {
  flex: 0 0 45%;
  margin: 0.5rem;
  break-inside: avoid;
}
.shouc li img {
  max-width: 100%;
}
</style>