<template>
  <div class="mask">
    <div class="mask-wrap">
      <h2 class="title">添加用户</h2>
      <table class="table-form">
        <tr>
          <th style="width:12%">姓名：</th>
          <td><div class="input w"><input type="text" v-model="form.displayName"></div></td>
        </tr>
        <tr>
          <th>性别：</th>
          <td><div class="input w"><input type="text" v-model="form.sex"></div></td>
        </tr>
        <tr>
        <tr>
          <th>部门：</th>
          <td><div class="input w"><input type="text" v-model="form.depart"></div></td>
        </tr>
        <tr>
          <th>手机号：</th>
          <td><div class="input w"><input type="text" v-model="form.phoneNumber"></div></td>
        </tr>
        <tr>
          <th>邮箱：</th>
          <td><div class="input w"><input type="text" v-model="form.email"></div></td>
        </tr>
        <tr>
          <th>户籍地：</th>
          <td><div class="input w"><input type="text" v-model="form.birthAddress"></div></td>
        </tr>
        <tr>
          <th>现居地：</th>
          <td><div class="input w"><input type="text" v-model="form.liveAddress"></div></td>
        </tr>
        <tr>
          <th>个人描述：</th>
          <td><div class="input w"><input type="text" v-model="form.introduce"></div></td>
        </tr>
        <tr>
          <th></th>
          <td>
            <p class="tips">提示：新添加用户默认密码为 <span class="c-pink">（88888888）</span>!</p>
            <p>
              <span class="btn btn-blue btn-large" v-on:click="add">添加</span>
              <span class="btn btn-light btn-large">取消</span>
            </p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
let time = new Date()
let currentTime = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
import api from '../api'
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
  computed: {
  },
  methods: {
    add () {
      api.addUser(this.form, this)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
