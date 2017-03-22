<template>
  <div class="edit-face">
    <top-progress ref="topProgress"></top-progress>
    <ul class="row">
      <li class="v-m col"><img class="croped" :src="data.photoURL" alt=""></li>
      <li class="v-m col">
        <span class="btn btn-light" v-on:click="toggleShow">设置头像</span>
      </li>
    </ul>
    <p>请选择一张个人正面照片作为头像，让其他成员更容易认识你。</p>
    <my-upload field="img"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      :width="150"
      :height="150"
      :url="service + 'upload.php'"
      :params="params"
      :headers="headers"
      img-format="png">
    </my-upload>
  </div>
</template>
<script>
import myUpload from 'vue-image-crop-upload/upload-2'
import api from '../api'
import topProgress from 'vue-top-progress'
import config from '../config'
export default {
  name: 'crop',
  data () {
    return {
      show: false,
      service: config.service,
      params: {
        url: ''
      },
      headers: {
      },
      imgDataUrl: '' // the datebase64 url of created image
    }
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  created () {
    if (this.$localStorage.get('wilddog:session::lcdc:DEFAULT')) {
      this.$store.dispatch('setAuth', JSON.parse(this.$localStorage.get('wilddog:session::lcdc:DEFAULT')).currentUser)
    }
  },
  components: {
    'my-upload': myUpload,
    topProgress
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    },
    cropSuccess (imgDataUrl, field) {
      this.imgDataUrl = imgDataUrl
      this.$store.dispatch('setFace', imgDataUrl)
      this.params.url = imgDataUrl
      console.log(this.params)
    },
    cropUploadSuccess (jsonData, field) {
      console.log(jsonData)
      this.show = false
      api.setFace(this, jsonData.body.path)
    },
    cropUploadFail (status, field) {
    }
  }
}
</script>
<style>
.edit-face .croped{width:100px;height:100px;border-radius:50%;margin-right:2em;}
.edit-face p{font-size:12px;color:#cacfd3;}
</style>
