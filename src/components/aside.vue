<template>
  <div class="aside">
    <user-panel :data="user"></user-panel>
    <ul class="menu">
      <li v-for="item in aside">
        <router-link :to="item.url">
          <span class="iconfont" :class="item.icon"></span>
          <span v-text="item.text"></span>
        </router-link>
        <ul class="sub-menu" v-if="item.sub">
          <li v-for="item in item.sub">
            <router-link v-text="item.text" :to="item.url"></router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import userPanel from '@/components/userPanel'
export default {
  name: 'aside',
  components: {
    'user-panel': userPanel
  },
  computed: {
    ...mapGetters({
      aside: 'getaside',
      user: 'getuser'
    })
  }
}
</script>
<style>
.menu li{position:relative;padding:0 5px;}
.menu a{color:#fff;display:block;padding:10px 5px;position:relative;border-bottom:1px solid #4B83CE;}
.menu a span{display:block;text-align:center;font-size:12px;padding:5px;}
.menu a .iconfont{font-size:24px;}
.sub-menu{position:absolute;left:105px;top:0;background:#fff;width:500px;box-shadow:0 1px 5px #ccc;padding:15px;}
.sub-menu li{display:inline-block;}
.sub-menu a{color:#666;border:none;font-size:12px;display:inline-block;}
</style>
