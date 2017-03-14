<template>
  <div class="user">
    <div class="face">
      <img :src="data.face" alt="">
    </div>
    <div class="panel">
      <ul class="row w">
        <li class="col v-t">
          <span class="face"><img :src="data.face" alt=""></span>
        </li>
        <li class="col v-t">
          <span class="name v-m" v-text="data.name"></span>
          <span class="v-m">({{data.degree}})</span>
          <div class="mt-5">
            <router-link class="btn btn-light btn-mini" to="editface">修改头像</router-link>
          </div>
        </li>
      </ul>
      <p class="summary" v-text="data.summary"></p>
      <ul class="row w">
        <li class="col v-m t-r">
          <router-link class="link" to="/editpassword">
            <span class="iconfont icon-edit v-m"></span>
            <span>修改密码</span>
          </router-link>
          <router-link class="link" to="/logout">
            <span class="iconfont icon-logout v-m"></span>
            <span>退出登录</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'userPanel',
    props: {
      data: {
        type: Object,
        default: {}
      }
    }
  }
</script>
<style>
.user{margin-right:-5px;padding-right:5px;}
.face{display:block;border-radius:50%;width:80px;height:80px;overflow:hidden;margin:0 auto;cursor: pointer;}
.face img{width:100%;}
.user{position:relative;}
.panel{display:block;position:absolute;left:105px;top:0;background:#fff;box-shadow:0 1px 5px #ccc;padding:15px;min-width:300px;min-height:150px;font-size:12px;display:none;}
.panel .name{font-size:24px;color:#C99045;}
.panel .row{font-weight:normal;font-size:12px;color:#666;margin:0;}
.panel .summary{font-size:12px;color:#999;margin:0;line-height:1.6;margin-top:10px;text-indent:2em;text-align:justify;text-align-last:auto;margin-top:15px;padding-top:10px;border-top:1px solid #eee;}
.panel .row{margin-top:10px;}
.panel .link{color:#447DC8;margin-left:10px;}
.panel .face{width:60px;height:60px;}
.user:hover .panel{display:block;}
</style>
