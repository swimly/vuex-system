<template>
  <div class="main">
    zhongjian
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      list: 'getList',
      aside: 'getaside'
    })
  },
  created () {
  },
  methods: {
    add () {
      // this.$store.commit('add', {
      //   text: '新增'
      // })
      setTimeout(() => {
        this.$store.dispatch('add', {
          text: 'new'
        })
      }, 1000)
    },
    addAside () {
      this.$store.dispatch('addItem', {
        text: '新增'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
