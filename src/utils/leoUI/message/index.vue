<template>
  <transition name="slide">
    <div class="message-wrap" :class="type" v-if="visible">
      <div class="content">{{content}}</div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Message extends Vue {
  private visible = false
  private content = ''
  private type = 'info'

  startTimer() {
    setTimeout(() => {
      this.visible = false
    }, 3000)
  }
  mounted() {
    this.startTimer()
  }
}
</script>

<style scoped lang="scss">
.message-wrap {
  position: fixed;
  background-color: #44b0f3;
  color: #ffffff;
  left: calc(50% - 4.5rem);
  right: 0;
  top: 35%;
  height: 30px;
  z-index: 1001;
  border-radius: 4px;
  text-align: center;
  border: 1px solid #ebeef5;
  padding: 0 10px;
  opacity: 0.8;
  width: 8rem;
  font-size: 12px;
  .content {
    line-height: 30px;
  }
}
.error {
  background-color: #fef0f0;
  color: #f56c6c;
}
.success {
  background-color: #f0f9eb;
  color: #67c23a;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.2s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>