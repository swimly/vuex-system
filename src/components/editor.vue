<template>
  <div class="editor">
    <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
  </div>
</template>
<script>
  import { markdownEditor } from 'vue-simplemde'
  export default {
    name: 'editor',
    components: {
      markdownEditor
    }
  }
</script>
