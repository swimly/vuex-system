<template>
  <div class="aside">
    <user-panel class="aside-hd" :data="user"></user-panel>
    <VuePerfectScrollbar class="scroll-area" v-once :settings="settings" @ps-scroll-y="scrollHanle">
      <menu-item :data="aside" :length="6"></menu-item>
    </VuePerfectScrollbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import userPanel from '@/components/userPanel'
import menuItem from '@/components/menuItem'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  name: 'aside',
  data () {
    return {
      settings: {
        suppressScrollX: false
      }
    }
  },
  methods: {
    scrollHanle (evt) {
      console.log(evt)
    }
  },
  components: {
    'user-panel': userPanel,
    'menu-item': menuItem,
    VuePerfectScrollbar
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
.aside{padding-top:100px;}
.aside .user{margin-top:-100px;height:100px;padding:10px 0;}
.ps-container>.ps-scrollbar-y-rail>.ps-scrollbar-y{width:5px !important;background:#2E62A2 !important;}
.ps-container>.ps-scrollbar-y-rail{width:9px !important;background:none !important;}
.scroll-area {
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
}
</style>
