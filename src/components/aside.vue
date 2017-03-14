<template>
  <div class="aside">
    <user-panel :data="user"></user-panel>
    <menu-item :data="aside"></menu-item>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import userPanel from '@/components/userPanel'
import menuItem from '@/components/menuItem'
export default {
  name: 'aside',
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
