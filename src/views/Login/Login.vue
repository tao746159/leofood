<template>
  <div class="login">
    <h1>LEO FOOD</h1>
    <div class="logo">
      <img src="../../assets/image/login/login_1.jpg" />
    </div>
    <div class="login-wap">
      <Form
        :model="info"
        :rules="rules"
      >
        <form-item porp="username">
          <Input
            lefticon="user"
            clear="true"
            @handleClear="handleClear"
            v-model="info.username"
            placeholder="请输入用户名"
          />
        </form-item>
        <form-item prop="password">
          <Input
            type="password"
            lefticon="password"
            v-model="info.password"
            placeholder="请输入密码"
          />
          <p class="forget-wap">
            <router-link
              to="/forget"
              class="forget"
            >忘记密码？</router-link>
          </p>
        </form-item>
      </Form>
      <Buttion @click="handleClick">登 录</Buttion>
      <div class="register_link">
        还没有账号，
        <router-link to="/register">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Input from '@/utils/leoUI/Input/Input.vue'
import Form from '@/utils/leoUI/Form/Form.vue'
import FormItem from '@/utils/leoUI/Form-Item/Form-Item.vue'
import Buttion from '@/utils/leoUI/Buttion/Buttion.vue'
@Component({
  components: { Input, Form, FormItem, Buttion },
})
export default class Login extends Vue {
  public info = {
    username: '',
    password: '',
  }
  public rules = {
    username: [{ required: true, message: "请输入用户名称" }],
    password: [{ required: true, message: "请输入密码" }]
  }
  handleClick() {
    console.log(this.info)
  }
  handleClear() {
    this.info.username = ''
  }
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>