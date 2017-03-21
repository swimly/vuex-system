<template>
  <div class="tab">
    <router-link v-for="item in data" :to="item.url">{{item.name}}</router-link>
  </div>
</template>
<script>
  export default {
    name: 'title',
    props: {
      data: {
        type: Array,
        default: ''
      }
    },
    components: {
    }
  }
</script>
<style>
</style>
