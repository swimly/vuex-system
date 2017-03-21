<template>
  <div class="edit" v-on:click="hideInfo">
    <my-title data="修改资料"></my-title>
    <my-tab :data="tab" basic="/editInfo/" class="mt-10 mb-10"></my-tab>
    <router-view name="tab"></router-view>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'about',
    created () {
      this.$store.dispatch('setInfo', false)
    },
    head: {
      title: {
        inner: '修改资料'
      }
    },
    components: {
      'my-title': require('@/components/title'),
      'my-tab': require('@/components/tab')
    },
    computed: {
      ...mapGetters({
        tab: 'gettab'
      })
    },
    methods: {
      hideInfo () {
        this.$store.dispatch('setInfo', false)
      }
    }
  }
</script>
