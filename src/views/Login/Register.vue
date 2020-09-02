<template>
  <div class="register">
    <h1>LEO FOOD</h1>
    <div class="logo">
      <img src="../../assets/image/login/login_1.jpg" />
    </div>
    <div class="form">
      <Form :model="userInfo" ref="loginForm" :rules="rules">
        <form-item prop="username">
          <Input lefticon="user" v-model="userInfo.username" placeholder="用户名" />
        </form-item>
        <form-item prop="password">
          <Input lefticon="password" v-model="userInfo.password" placeholder="密码" />
        </form-item>
        <form-item prop="password">
          <Input lefticon="password" v-model="userInfo.twopass" placeholder="重复密码" />
        </form-item>
        <Buttion @click="register">注 册</Buttion>
        <p class="login_link">
          已有账号，
          <router-link to="/login">马上登录</router-link>
        </p>
      </Form>
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
export default class Register extends Vue {
  userInfo = {
    username: '',
    password: '',
    towpass: '',
  }
  rules = {
    username: [{ required: true, message: '请输入用户名称' }],
    password: [{ required: true, message: '请输入密码' }],
  }
  register_step = false

  register() {
    const { username, password, towpass } = this.userInfo
    if (username === '' || password === '' || towpass === '') {
      return
    }

    if (password !== towpass) {
      return this.$message.error('两次密码输入不一致！！')
    }
  }
}
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>