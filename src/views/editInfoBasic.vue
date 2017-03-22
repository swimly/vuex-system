<template>
  <div class="about">
  <h3 class="sub-title">头像</h3>
  <crop class="p-20" :data="auth"></crop>
  <h3 class="sub-title">个人信息</h3>
  <table class="table-info" :class="edit?'edit': ''">
    <tr>
      <th>ID：</th>
      <td>
        <span>{{auth.uid}}</span>
      </td>
    </tr>
    <tr>
      <th>姓名：</th>
      <td>
        <span>{{auth.displayName}}</span>
        <div class="input"><input type="text" v-model="form.name"></div>
      </td>
    </tr>
    <tr>
      <th>性别：</th>
      <td>
        <span></span>
        <div class="input mr-10">
          <input type="radio" value="0" name="sex" id="s1" v-model="form.sex">
          <i class="iconfont icon-dot"></i>
          <label for="s1">男</label>
        </div>
        <div class="input">
          <input type="radio" value="1" name="sex" id="s2" v-model="form.sex">
          <i class="iconfont icon-dot"></i>
          <label for="s2">女</label>
        </div>
      </td>
    </tr>
    <tr>
      <th>联系方式：</th>
      <td>
        <span>{{auth.phoneNumber}}</span>
        <div class="input"><input type="text" v-model="form.phoneNumber"></div>
      </td>
    </tr>
    <tr>
      <th>邮箱：</th>
      <td>
        <span>{{auth.email}}</span>
        <div class="input"><input type="text" v-model="form.email"></div>
      </td>
    </tr>
    <tr>
      <th>户籍地：</th>
      <td>
        <span></span>
        <div class="input w"><input type="text" v-model="form.birthAddress"></div>
      </td>
    </tr>
    <tr>
      <th>现居地：</th>
      <td>
        <span></span>
        <div class="input w"><input type="text" v-model="form.liveAddress"></div>
      </td>
    </tr>
    <tr>
      <th></th>
      <td>
        <p class="btn" :class="edit? 'btn-blue': 'btn-light'" v-on:click="toggleEdit">{{editText}}</p>
      </td>
    </tr>
  </table>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import crop from '@/components/crop'
  export default {
    name: 'about',
    data () {
      return {
        edit: false,
        editText: '编辑个人资料',
        form: {
          name: '',
          sex: 2,
          phoneNumber: '',
          email: '',
          birthAddress: '',
          liveAddress: ''
        }
      }
    },
    head: {
      title: {
        inner: '关于'
      }
    },
    components: {
      crop
    },
    created () {
    },
    computed: {
      ...mapGetters({
        auth: 'getAuth'
      })
    },
    methods: {
      toggleEdit () {
        this.edit = !this.edit
        if (this.edit) {
          this.editText = '确认提交'
        } else {
          this.editText = '编辑个人资料'
        }
      }
    }
  }
</script>
<style>
.table-info{font-size:14px;color:#474747;width:40%;padding:20px;}
.table-info th{font-weight:normal;width:6em;text-align:right;}
.table-info td{color:#666;height:40px;}
.table-info .input input{padding:8px 1em;}
.table-info td div{display:none;}
.table-info.edit td span{display:none;}
.table-info.edit td div{display:inline-block;}
</style>
