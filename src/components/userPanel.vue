<template>
  <div class="user">
    <top-progress ref="topProgress"></top-progress>
    <div class="face" v-on:click="toggleInfo">
      <img :src="data.photoURL" alt="">
    </div>
    <transition name="fold">
      <div class="panel" v-if="info">
        <ul class="row w">
          <li class="col v-t">
            <span class="face" v-on:click="toggleInfo"><img :src="data.photoURL" alt=""></span>
          </li>
          <li class="col v-t">
            <span class="name v-m" v-text="data.displayName"></span>
            <div class="mt-5">
              <p>手机号：{{data.phoneNumber}}</p>
              <p>邮箱：{{data.email}}</p>
              <span class="btn btn-light btn-mini" @click="toggleShow">修改头像</span>
            </div>
          </li>
        </ul>
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
          img-format="png"></my-upload>
        <ul class="row w">
          <li class="col v-m t-r">
            <router-link class="link" to="/setting/basic">
              <span class="iconfont icon-edit v-m"></span>
              <span>修改资料</span>
            </router-link>
            <span class="link" v-on:click="logout">
              <span class="iconfont icon-logout v-m"></span>
              <span>退出登录</span>
            </span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import myUpload from 'vue-image-crop-upload/upload-2'
import api from '../api'
import topProgress from 'vue-top-progress'
import { mapGetters } from 'vuex'
import config from '../config'
export default {
  name: 'userPanel',
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
  created () {
    console.log(this.data.createTime)
    if (this.$localStorage.get('wilddog:session::lcdc:DEFAULT')) {
      this.$store.dispatch('setAuth', JSON.parse(this.$localStorage.get('wilddog:session::lcdc:DEFAULT')).currentUser)
    } else {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters({
      info: 'showInfo'
    })
  },
  components: {
    'my-upload': myUpload,
    topProgress
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    logout () {
      api.logout(this)
    },
    setFace (url) {
      this.$store.dispatch('setFace', url)
    },
    toggleShow () {
      this.show = !this.show
    },
    toggleInfo () {
      this.$store.dispatch('toggleInfo')
    },
    cropSuccess (imgDataUrl, field) {
      this.imgDataUrl = imgDataUrl
      this.$store.dispatch('setFace', imgDataUrl)
      this.params.url = imgDataUrl
    },
    cropUploadSuccess (jsonData, field) {
      console.log(jsonData)
      this.show = false
      api.setFace(this, jsonData.body.path)
      this.$store.dispatch('toggleInfo')
    },
    cropUploadFail (status, field) {
    }
  }
}
</script>
<style>
.face{display:block;border-radius:50%;width:80px;height:80px;overflow:hidden;margin:0 auto;cursor: pointer;}
.face img{width:100%;}
.user{position:relative;z-index:100;}
.panel{display:block;position:absolute;left:105px;top:5px;background:#fff;box-shadow:0 1px 5px #ccc;padding:15px;min-width:300px;min-height:150px;font-size:12px;z-index:-100;}
.panel .name{font-size:24px;color:#F86868;font-family:"Capsuula"}
.panel .row{font-weight:normal;font-size:12px;color:#666;margin:0;}
.panel .summary{font-size:12px;color:#999;margin:0;line-height:1.6;margin-top:10px;text-indent:2em;text-align:justify;text-align-last:auto;margin-top:15px;padding-top:10px;border-top:1px solid #eee;}
.panel .row{margin-top:10px;}
.panel .link{color:#447DC8;margin-left:10px;cursor:pointer;}
.panel .face{width:60px;height:60px;}
@media screen and (max-height: 768px) {
  .face{width:60px;height:60px;}
  .panel{left:85px;}
}

.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload{height:auto !important;}
</style>
