<template>
  <div class="my-icon">
    <ul>
      <li v-for="(item, index) in iconArr" :key="index">
        <div class="icon">
          <svg-icon :iconClass="item.icon"></svg-icon>
        </div>
        <span>{{item.num}} {{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SvgIcon from '@/components/SvgIcon.vue'
@Component({
  components: { SvgIcon },
})
export default class MyIcon extends Vue {
  @Prop({ default: [] }) iconArr!: Array<object>
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>