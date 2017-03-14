<template>
  <div id="app" class="app">
    <my-header></my-header>
    <my-aside></my-aside>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import aside from '@/components/aside'
import header from '@/components/header'
import '@/assets/css/main.css'
import '@/assets/fonts/iconfont.css'
export default {
  name: 'app',
  components: {
    'my-aside': aside,
    'my-header': header
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      list: 'getList'
    })
  }
}
</script>

<style>
</style>
