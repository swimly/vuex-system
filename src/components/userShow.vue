<template>
  <transition name="foldleft">
    <div class="mask-wrap">
      <h2 class="title">个人信息<span class="iconfont icon-close" v-on:click="toggleMore"></span></h2>
      <table class="table-form">
        <tr>
          <th style="width:20%">头像：</th>
          <td class="v-m"><img :src="data.photoURL" alt=""></td>
        </tr>
        <tr>
          <th style="width:20%">Id：</th>
          <td class="v-m"><div class="text">{{data.uid}}</div></td>
        </tr>
        <tr>
          <th style="width:12%">姓名：</th>
          <td><div class="text">{{data.displayName}}</div></td>
        </tr>
        <tr>
          <th>性别：</th>
          <td><div class="text">{{data.sex}}</div></td>
        </tr>
        <tr>
        <tr>
          <th>部门：</th>
          <td>
            <div class="text">{{data.depart.name}}</div>
          </td>
        </tr>
        <tr>
          <th>手机号：</th>
          <td><div class="text">{{data.phoneNumber}}</div></td>
        </tr>
        <tr>
          <th>邮箱：</th>
          <td><div class="text">{{data.email}}</div></td>
        </tr>
        <tr>
          <th>户籍地：</th>
          <td><div class="text">{{data.birthAddress}}</div></td>
        </tr>
        <tr>
          <th>现居地：</th>
          <td><div class="text">{{data.liveAddress}}</div></td>
        </tr>
        <tr>
          <th>注册时间：</th>
          <td><div class="text">{{data.createTime}}</div></td>
        </tr>
        <tr>
          <th>上次登录：</th>
          <td><div class="text">{{data.lastLoginTime}}</div></td>
        </tr>
        <tr>
          <th>个人描述：</th>
          <td><div class="text">{{data.introduce}}</div></td>
        </tr>
      </table>
    </div>
  </transition>
</template>

<script>
let time = new Date()
let currentTime = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
import api from '../api'
import { mapActions } from 'vuex'
export default {
  name: 'mask',
  data () {
    return {
      form: {
        displayName: '',
        password: '88888888',
        sex: '',
        depart: '',
        phoneNumber: '',
        email: '',
        birthAddress: '',
        liveAddress: '',
        introduce: '',
        createTime: currentTime
      }
    }
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    add () {
      api.editUser(this.data, this)
    },
    ...mapActions({
      toggleMore: 'toggleMore'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mask-wrap{top:0;bottom:0;right:0;margin:0;transform:translate(0,0);left:auto;width:400px;box-shadow:-1px 0 5px #ccc;transition:0.3s;position:fixed;}
.table-form{padding:0;}
</style>
