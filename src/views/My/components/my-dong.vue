<template>
  <div class="my-dong">
    <ul>
      <li v-for="(item, index) in dongArr" :key="index">
        <div></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class MyDong extends Vue {
  @Prop({ default: [] }) dongArr!: Array<object>
}
</script>

<style lang="sass" scoped>

</style>