<template>
  <div class="echarts">
    <echarts-bar :data="chart1" style="#396CAA" title="柱状图"></echarts-bar>
    <echarts-line></echarts-line>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import bar from '@/components/bar'
  import line from '@/components/line'
  export default {
    name: 'count',
    head: {
      title: {
        inner: '统计'
      }
    },
    computed: {
      ...mapGetters({
        chart1: 'getChart1'
      })
    },
    components: {
      'echarts-bar': bar,
      'echarts-line': line
    },
    methods: {
    }
  }
</script>
<style>
.echarts {
    width: 400px;
    height: 400px;
  }
</style>
