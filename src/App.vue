<template>
  <div id="app" class="app">
    <router-view class="h" name="default"></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import '@/assets/css/main.css'
import '@/assets/fonts/iconfont.css'
export default {
  name: 'app',
  components: {
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
