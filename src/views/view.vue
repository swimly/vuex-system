<template>
  <div class="view">
    <my-header></my-header>
    <my-aside></my-aside>
    <router-view name="sub" class="content"></router-view>
  </div>
</template>
<script>
import aside from '@/components/aside'
import header from '@/components/header'
export default {
  name: 'view',
  components: {
    'my-aside': aside,
    'my-header': header
  }
}
</script>
