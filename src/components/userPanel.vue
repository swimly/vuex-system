<template>
  <div class="user">
    <div class="face">
      <img :src="data.face" alt="">
    </div>
    <div class="panel">
      <ul class="row w">
        <li class="col v-t">
          <span class="face"><img :src="data.face" alt=""></span>
        </li>
        <li class="col v-t">
          <span class="name v-m" v-text="data.name"></span>
          <span class="v-m">({{data.degree}})</span>
          <div class="mt-5">
            <span class="btn btn-light btn-mini" @click="toggleShow">修改头像</span>
          </div>
        </li>
      </ul>
      <p class="summary" v-text="data.summary"></p>
      <my-upload field="img"
          @crop-success="cropSuccess"
          @crop-upload-success="cropUploadSuccess"
          @crop-upload-fail="cropUploadFail"
          v-model="show"
          :width="300"
          :height="300"
          url="http://localhost/vuex-system/app/upload/"
          :params="params"
          :headers="headers"
          img-format="png"></my-upload>
      <ul class="row w">
        <li class="col v-m t-r">
          <router-link class="link" to="/editpassword">
            <span class="iconfont icon-edit v-m"></span>
            <span>修改密码</span>
          </router-link>
          <router-link class="link" to="/login">
            <span class="iconfont icon-logout v-m"></span>
            <span>退出登录</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import myUpload from 'vue-image-crop-upload/upload-2.vue'
import { mapActions } from 'vuex'
export default {
  name: 'userPanel',
  data () {
    return {
      show: true,
      params: {
        token: '123456798',
        name: 'avatar'
      },
      headers: {
      },
      imgDataUrl: '' // the datebase64 url of created image
    }
  },
  computed: {
    ...mapActions({
      face: 'setFace'
    })
  },
  components: {
    'my-upload': myUpload
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    setFace (url) {
      this.$store.dispatch('setFace', url)
    },
    toggleShow () {
      this.show = !this.show
    },
    cropSuccess (imgDataUrl, field) {
      console.log('-------- crop success --------')
      this.imgDataUrl = imgDataUrl
      this.$store.dispatch('setFace', imgDataUrl)
    },
    cropUploadSuccess (jsonData, field) {
      console.log('-------- upload success --------')
      console.log(jsonData)
      console.log('field: ' + field)
    },
    cropUploadFail (status, field) {
      console.log('-------- upload fail --------')
      console.log(status)
      console.log('field: ' + field)
    }
  }
}
</script>
<style>
.user{margin-right:-5px;padding-right:5px;}
.face{display:block;border-radius:50%;width:80px;height:80px;overflow:hidden;margin:0 auto;cursor: pointer;}
.face img{width:100%;}
.user{position:relative;z-index:100;}
.panel{display:block;position:absolute;left:105px;top:0;background:#fff;box-shadow:0 1px 5px #ccc;padding:15px;min-width:300px;min-height:150px;font-size:12px;display:none;}
.panel .name{font-size:24px;color:#C99045;}
.panel .row{font-weight:normal;font-size:12px;color:#666;margin:0;}
.panel .summary{font-size:12px;color:#999;margin:0;line-height:1.6;margin-top:10px;text-indent:2em;text-align:justify;text-align-last:auto;margin-top:15px;padding-top:10px;border-top:1px solid #eee;}
.panel .row{margin-top:10px;}
.panel .link{color:#447DC8;margin-left:10px;}
.panel .face{width:60px;height:60px;}
.user:hover .panel{display:block;}
@media screen and (max-height: 768px) {
  .face{width:60px;height:60px;}
  .panel{left:85px;}
}
</style>
