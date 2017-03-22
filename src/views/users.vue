<template>
  <div class="wrapper with-search with-page">
    <div class="search">
      <div class="row w h">
        <div class="col v-m">
          <div class="input"><input type="text" placeholder="姓名" v-model="displayName"></div>
          <div class="input"><input type="text" placeholder="性别" v-model="sexType"></div>
          <a href="javascript:;" class="btn btn-blue iconfont icon-search" v-on:click="search({displayName, sexType})"></a>
        </div>
        <div class="col v-m t-r">
          <span class="btn btn-blue" v-on:click="toggleAdd">
            <span class="v-m iconfont icon-addUser"></span>
            <span class="v-m">添加用户</span>
          </span>
        </div>
      </div>
    </div>
    <div class="table-wrap h">
      <table class="table-hd">
        <colgroup>
          <col width="5%" />
          <col width="20%" />
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="5%" />
          <col width="10%" />
          <col width="10%" />
          <col width="15%" />
        </colgroup>
        <tr>
          <th v-for="item in caption">{{item}}</th>
        </tr>
      </table>
      <div class="h scroll">
        <table class="table-list">
          <colgroup>
            <col width="5%" />
            <col width="20%" />
            <col width="10%" />
            <col width="15%" />
            <col width="10%" />
            <col width="5%" />
            <col width="10%" />
            <col width="10%" />
            <col width="15%" />
          </colgroup>
          <tr v-for="(item,index) in limit" v-bind:index ="index">
            <td align="center">{{index+1+idx}}</td>
            <td align="center">
              {{item.uid}}
            </td>
            <td>{{item.displayName}}</td>
            <td align="center">{{item.email}}</td>
            <td align="center">{{item.phoneNumber}}</td>
            <td align="center">{{item.sex}}</td>
            <td align="center">{{item.createTime}}</td>
            <td align="center">{{item.lastLoginTime}}</td>
            <td align="center">
              <button class="btn btn-light btn-mini">修改</button>
              <button class="btn  btn-light btn-mini" v-on:click="">删除</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="pages">
      <div class="row w h">
        <div class="col t-l v-m">
          共<i class="important" v-text="n"></i>页，当前第<i class="important" v-text="i"></i>页，<i class="important" v-text="sum"></i>条记录
        </div>
        <div class="col t-r v-m">
          <span class="btn btn-blue btn-mini" v-on:click="home()">首页</span>
          <span class="btn btn-blue btn-mini" v-on:click="prev()">上一页</span>
          <span class="btn btn-blue btn-mini" v-on:click="next(n)">下一页</span>
          <span class="btn btn-blue btn-mini" v-on:click="end(n)">末页</span>
        </div>
      </div>
    </div>
    <userAddPop v-show="showAdd"></userAddPop>
  </div>
</template>
<script>
import userAddPop from '@/components/userAdd'
import {mapGetters, mapMutations, mapActions} from 'vuex'
import api from '../api'
export default {
  name: 'users',
  head: {
    title: {
      inner: '用户'
    }
  },
  data () {
    return {
      displayName: '',
      sexType: '',
      index: 0
    }
  },
  created () {
    api.getUserList(this)
  },
  components: {
    userAddPop
  },
  computed: {
    ...mapGetters({
      caption: 'getCaption',
      info: 'getInfo',
      limit: 'limit',
      idx: 'idx',
      showAdd: 'showAdd',
      sum: 'sum',
      i: 'i',
      n: 'n'
    })
  },
  methods: {
    ...mapMutations({
      prev: 'prev',
      next: 'next',
      home: 'home',
      end: 'end',
      search: 'search',
      toggleAdd: 'toggleAdd'
    }),
    ...mapActions([
    ])
  }
}
</script>
<style scoped>
</style>
