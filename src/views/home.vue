<template>
  <div class="home">
    首页{{info}}
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        info: 'showInfo'
      })
    }
  }
</script>
