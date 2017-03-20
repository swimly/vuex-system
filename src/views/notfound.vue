<template>
  <div class="w h row bg-f7 notfound">
    <div class="col v-m t-c">
      <img src="static/img/404.gif" alt="">
      <p>您访问的页面正在睡觉，请择时再来！回到<router-link to="/home">首页</router-link></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'users',
  head: {
    title: {
      inner: '404'
    }
  }
}
</script>
<style>
.notfound p{font-size:16px;color:#999;}
.notfound p a{color:#F86868;padding:0 0.5em;}
</style>
