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
              <input type="text" placeholder="用户名" v-model="username">
              <span class="iconfont icon-users"></span>
            </div>
            <div class="input w icon-left mt-10">
              <input type="text" placeholder="密码" v-model="password">
              <span class="iconfont icon-users"></span>
            </div>
            <div v-on:click="submit" class="btn btn-blue btn-large w mt-10">登录</div>
          </div>
        </div>
      </div>
      <p class="copyright">大连网月科技开发有限公司 © 版权所有 辽ICP备12008717号</p>
    </div>
  </div>
</template>
<script>
  import api from '../api'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      submit () {
        api.login()
        this.$router.push('/home')
      }
    }
  }
</script>
<style>
.login{background:#F8F8F8;}
.banner{display:inline-block;height:500px;background:#3082E0;width:100%;}
.banner .mid-layout{position:relative;}
.banner .img{height:100%;}
.login-panel{position:absolute;right:0;top:50%;transform: translate(0,-50%);padding:20px;background:#fff;display:inline-block;width:300px;border-radius:5px;}
.login-panel .title{margin:0;font-weight:normal;font-size:16px;color:#3082E0;border-bottom:1px solid #ccc;padding-bottom:10px;margin-bottom:10px;}
.logo{text-align:left;height:60px;}
.copyright{font-size:12px;color:#999;height:60px;line-height:60px;}
</style>
