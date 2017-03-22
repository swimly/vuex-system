<template>
  <div class="mask">
    <div class="mask-wrap">
      <h2 class="title">删除<span class="iconfont icon-close" v-on:click="toggleDelete"></span></h2>
      <p>你确定要删除此条数据？</p>
      <p class="t-c">
        <span class="btn btn-blue btn-large mr-10" v-on:click="add">确定</span>
        <span class="btn btn-light btn-large" v-on:click="toggleDelete">取消</span>
      </p>
    </div>
  </div>
</template>

<script>
import api from '../api'
import { mapActions } from 'vuex'
export default {
  name: 'mask',
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  computed: {
  },
  methods: {
    add () {
      api.deleteUser(this.data, this)
    },
    ...mapActions({
      toggleDelete: 'toggleDelete'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
