<template>
  <ul class="menu">
    <li v-for="(item, index) in data">
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
</template>
<script>
  export default {
    name: 'menuItem',
    props: {
      data: {
        type: Array,
        default: []
      },
      length: {
        type: Number,
        default: 6
      }
    }
  }
</script>
<style>
.menu{padding:10px 0;}
.menu li{position:relative;padding:0;}
.menu a{color:#fff;display:block;padding:10px 5px;position:relative;border-bottom:1px solid #4B83CE;}
.menu a span{display:block;text-align:center;font-size:12px;padding:5px;}
.menu a .iconfont{font-size:24px;padding-bottom:0;}
.sub-menu{position:absolute;left:105px;top:0;background:#fff;width:400px;box-shadow:0 1px 5px #ccc;padding:10px;display:none;z-index:100;}
.sub-menu li{display:inline-block;}
.sub-menu a{color:#666;border:none;font-size:12px;display:inline-block;position:relative;padding:0 1em;}
.sub-menu a:before{content:"";display:inline-block;width:1px;height:12px;background:#ccc;position:absolute;left:0;top:50%;margin-top:-6px;}
.sub-menu li:first-child a:before{display:none;}
.menu .sub-menu li:hover a{background:none;}
.menu .sub-menu a:hover{background:none;}
.menu li:hover .sub-menu{display:block;}
.menu li:hover > a{background:#396CAA;}
.menu .router-link-active{background:#396CAA;}
.menu .sub-menu .router-link-active{background:none;color:#447DC8;}
@media screen and (max-height: 768px) {
  .menu a{padding:5px;}
  .sub-menu{left:85px;}
}
</style>
