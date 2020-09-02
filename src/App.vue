<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
    <tab-bar
      bgcolor="#27c79a"
      unselectedTintColor="#ffffff"
      tintColor="#f8cc2f"
      :selectedTab="selectedTab"
    >
      <tab-bar-item
        :selclass="selectedTab === 'home' ? 'active': '' "
        title="首页"
        icon="home"
        @handleTabSelected="handleTabSelected"
      ></tab-bar-item>
      <tab-bar-item
        :selclass="selectedTab === 'find' ? 'active': '' "
        title="发现"
        icon="find"
        @handleTabSelected="handleTabSelected"
      ></tab-bar-item>
      <tab-bar-item
        :selclass="selectedTab === 'shiyq' ? 'active': '' "
        title="食友圈"
        icon="shiyq"
        @handleTabSelected="handleTabSelected"
      ></tab-bar-item>
      <tab-bar-item
        :selclass="selectedTab === 'my' ? 'active': '' "
        title="我的"
        icon="my"
        @handleTabSelected="handleTabSelected"
      ></tab-bar-item>
    </tab-bar>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TabBar from '@/utils/leoUI/TabBar/TabBar.vue'
import TabBarItem from '@/utils/leoUI/TabBar/TabBarItem.vue'

@Component({
  components: { TabBar, TabBarItem },
})
export default class App extends Vue {
  public selectedTab = 'home'

  mounted() {
    if (window.location.pathname === '/') {
      this.selectedTab = 'home'
    } else {
      this.selectedTab = window.location.pathname.slice(1)
    }
  }
  handleTabSelected(name: string) {
    this.selectedTab = name
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
