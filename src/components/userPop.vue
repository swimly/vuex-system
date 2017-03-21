<template>
  <div class="mask">
    <div class="mask-wrap t-r">
      <a href="#" class="search-btn" style="color:#fff;margin-bottom:10px;" v-on:click="add">确定</a>
      <table class="mask-table">
        <colgroup>
          <col width="30%">
          <col width="40%">
          <col width="30%">
        </colgroup>
        <tr>
          <th>信息名称</th>
          <th>请在此栏填写信息内容</th>
          <th>说明</th>
        </tr>
        <tr>
          <th>数据源显示名称</th>
          <td class="input"><input type="text" v-model="info.tit" :value="info.tit"></td>
          <td>数据源中文名称</td>
        </tr>
        <tr>
          <th>数据源名称</th>
          <td class="input"><input type="text" v-model="info.entit"></td>
          <td>数据源英文名称</td>
        </tr>
        <tr>
          <th>默认数据库</th>
          <td class="input"><input type="text" v-model="info.default"></td>
          <td>连接的默认数据库</td>
        </tr>
        <tr>
          <th>数据库类型</th>
          <td class="input"><input type="text" v-model="info.type"></td>
          <td>数据库类型</td>
        </tr>
        <tr>
          <th>服务器地址</th>
          <td class="input"><input type="text" v-model="info.ip"></td>
          <td>连接的数据库服务器地址</td>
        </tr>
        <tr>
          <th>端口号</th>
          <td class="input"><input type="text" v-model="info.post"></td>
          <td>连接的数据库服务端口</td>
        </tr>
        <tr>
          <th>数据库描述</th>
          <td class="input"><input type="text" v-model="info.description"></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import config from '../config'
export default {
  name: 'mask',
  data () {
    return {
      form: config.form,
      info: {
        tit: '',
        entit: '',
        default: '',
        type: '',
        ip: '',
        post: '',
        description: ''
      }
    }
  },
  computed: {
  },
  methods: {
    add () {
      this.form.map((item) => {
        console.log(item.enname + ':')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mask{background:rgba(0,0,0,0.5);width:100%;height:100%;position:fixed;left:0;top:0;}
.mask-wrap{width:700px;height:auto;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:#fff;border-radius:6px;padding:30px 20px;box-sizing:border-box;}
.mask-table th,.mask-table td{border:1px solid #DFE4E7;padding:0;height:40px;}
.mask-table input{border:0;width:100%;height:40px;line-height:40px;}
.mask-table tr:nth-child(even){background:#fff;}
</style>
