<template>
  <div class="editor">
    <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
    {{content}}
  </div>
</template>
<script>
  import { markdownEditor } from 'vue-simplemde'
  export default {
    name: 'editor',
    data () {
      return {
        content: ''
      }
    },
    components: {
      markdownEditor
    }
  }
</script>
