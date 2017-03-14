<template>
  <div id="app" class="app">
  <my-aside></my-aside>
  <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import aside from '@/components/aside'
import '@/assets/css/main.css'
import '@/assets/fonts/iconfont.css'
export default {
  name: 'app',
  components: {
    'my-aside': aside
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
