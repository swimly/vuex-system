<template>
  <div class="login h row w">
    <div class="col v-m t-c">
      <h1 class="logo mid-layout"><img src="static/img/logo.png" alt=""></h1>
      <div class="banner">
        <div class="mid-layout h t-l">
          <img class="img" src="static/img/login.png" alt="">
          <div class="login-panel">
            <h1 class="title">用户登录</h1>
            <div class="input w icon-left mt-10">
              <input type="text" placeholder="用户名" v-model="email">
              <span class="iconfont icon-users"></span>
            </div>
            <div class="input w icon-left mt-10">
              <input type="text" placeholder="密码" v-model="password">
              <span class="iconfont icon-users"></span>
            </div>
            <div v-on:click="submit" class="btn btn-blue btn-large w mt-10">登录</div>
            <p class="t-r fs-12 c-6">还没有账号？去<router-link class="c-pink" to="/register">注册</router-link>！</p>
          </div>
        </div>
      </div>
      <p class="copyright">大连网月科技开发有限公司 © 版权所有 辽ICP备12008717号</p>
      <top-progress ref="topProgress"></top-progress>
    </div>
  </div>
</template>
<script>
  import api from '../api'
  import topProgress from 'vue-top-progress'
  export default {
    name: 'login',
    components: {
      topProgress
    },
    head: {
      title: {
        inner: '登录'
      }
    },
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      submit () {
        api.loginByEmail(this.email, this.password, this)
      }
    }
  }
</script>
<style>
.login{background:#F8F8F8;}
.banner{display:inline-block;height:500px;background:#447DC8;width:100%;}
.banner .mid-layout{position:relative;}
.banner .img{height:100%;}
.login-panel{position:absolute;right:0;top:50%;transform: translate(0,-50%);padding:20px;background:#fff;display:inline-block;width:300px;border-radius:5px;}
.login-panel .title{margin:0;font-weight:normal;font-size:16px;color:#447DC8;border-bottom:1px solid #ccc;padding-bottom:10px;margin-bottom:10px;}
.logo{text-align:left;height:60px;}
.copyright{font-size:12px;color:#999;height:60px;line-height:60px;}
</style>
