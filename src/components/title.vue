<template>
  <h2 class="title">{{data}}</h2>
</template>
<script>
  export default {
    name: 'title',
    props: {
      data: {
        type: String,
        default: ''
      }
    },
    components: {
    }
  }
</script>
<style>
.title{font-size:24px;color:#464646;margin:0;font-weight:normal;}
</style>
