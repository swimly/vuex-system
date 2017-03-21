<template>
  <div class="tab">
    <router-link v-for="item in data" :to="basic + item.url">{{item.name}}</router-link>
  </div>
</template>
<script>
  export default {
    name: 'title',
    props: {
      data: {
        type: Array,
        default: ''
      },
      basic: {
        type: String,
        default: ''
      }
    },
    components: {
    }
  }
</script>
<style>
.tab{background:#EFEFEF;}
.tab a{display:inline-block;padding:1em;font-size:14px;color:#474747;margin:0 1em;}
.tab .router-link-active{color:#ff4600;border-bottom:2px solid #ff4600;}
</style>
