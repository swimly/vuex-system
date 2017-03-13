<template>
  <div class="aside">
    <user-panel class="aside-hd" :data="user"></user-panel>
    <menu-item :data="aside" length="6"></menu-item>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import userPanel from '@/components/userPanel'
import menuItem from '@/components/menuItem'
export default {
  name: 'aside',
  data () {
    return {
    }
  },
  components: {
    'user-panel': userPanel,
    'menu-item': menuItem
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
</style>
