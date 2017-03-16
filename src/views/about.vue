<template>
  <div class="about">
    <editor></editor>
  </div>
</template>
<script>
  import editor from '@/components/editor'
  export default {
    name: 'about',
    head: {
      title: {
        inner: '关于'
      }
    },
    components: {
      editor
    }
  }
</script>
