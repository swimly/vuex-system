<template>
  <div class="mask">
    <div class="mask-wrap">
      <h2 class="title">添加用户<span class="iconfont icon-close" v-on:click="toggleAdd"></span></h2>
      <table class="table-form">
        <tr>
          <th style="width:12%">姓名：</th>
          <td><div class="input"><input type="text" v-model="form.displayName"></div></td>
        </tr>
        <tr>
          <th>性别：</th>
          <td>
            <div class="input mr-10">
              <input type="radio" value="男" name="sex" id="s1" v-model="form.sex">
              <i class="iconfont icon-dot"></i>
              <label for="s1">男</label>
            </div>
            <div class="input">
              <input type="radio" value="女" name="sex" id="s2" v-model="form.sex">
              <i class="iconfont icon-dot"></i>
              <label for="s2">女</label>
            </div>
          </td>
        </tr>
        <tr>
        <tr>
          <th>部门：</th>
          <td>
            <multiselect v-model="form.depart" :options="options" :multiple="false" group-values="libs" group-label="language" placeholder="请选择部门" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
          </td>
        </tr>
        <tr>
          <th>手机号：</th>
          <td><div class="input"><input type="text" v-model="form.phoneNumber"></div></td>
        </tr>
        <tr>
          <th>邮箱：</th>
          <td><div class="input w-70"><input type="text" v-model="form.email"></div></td>
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
          <td><div class="input w"><textarea rows="4" v-model="form.introduce"></textarea></div></td>
        </tr>
        <tr>
          <th></th>
          <td>
            <p class="tips">提示：邮箱为必填项，邮箱将作为该用户登录本站的唯一凭证，请谨慎填写。新添加用户默认密码为 <span class="c-pink">（88888888）</span>!</p>
            <p>
              <span class="btn btn-blue btn-large" v-on:click="add">添加</span>
              <span class="btn btn-light btn-large" v-on:click="toggleAdd">取消</span>
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
import { mapActions } from 'vuex'
import Multiselect from 'vue-multiselect'
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
      },
      options: [
        {
          language: '研发中心',
          libs: [
            { name: '设计制作部', category: 'Front-end' },
            { name: '开发一组', category: 'Backend' }
          ]
        },
        {
          language: '政府信息化',
          libs: [
            { name: '数字政府事业一部', category: 'Backend' },
            { name: '数字政府事业二部', category: 'Backend' }
          ]
        },
        {
          language: '行业信息化',
          libs: [
            { name: '保险行业应用部', category: 'Backend' },
            { name: '汽车行业应用部', category: 'Backend' },
            { name: '住建行业应用部', category: 'Backend' },
            { name: '交通行业应用部', category: 'Backend' }
          ]
        },
        {
          language: '其他',
          libs: [
            { name: '总经办', category: 'Backend' },
            { name: '产品开发部', category: 'Backend' },
            { name: '综合管理部', category: 'Backend' },
            { name: '采购部', category: 'Backend' },
            { name: '财务部', category: 'Backend' },
            { name: '人力资源部', category: 'Backend' },
            { name: '行政部', category: 'Backend' },
            { name: '审计部', category: 'Backend' }
          ]
        }
      ]
    }
  },
  components: {
    Multiselect
  },
  computed: {
  },
  methods: {
    add () {
      api.addUser(this.form, this)
    },
    ...mapActions({
      toggleAdd: 'toggleAdd'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
