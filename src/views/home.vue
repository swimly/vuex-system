<template>
  <div class="home">
    <card></card>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import card from '@/components/card'
  export default {
    computed: {
      ...mapGetters({
        info: 'showInfo'
      })
    },
    components: {
      card
    }
  }
</script>
