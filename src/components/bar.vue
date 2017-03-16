<template>
  <div class="echarts">
    <IEcharts :option="bar" @ready="onReady" @click="onClick"></IEcharts>
  </div>
</template>
<script>
  import IEcharts from 'vue-echarts-v3'
  import config from '../config'
  export default {
    name: 'count',
    head: {
      title: {
        inner: '统计'
      }
    },
    components: {
      IEcharts
    },
    created () {
      this.handleData(this.data)
    },
    data: () => ({
      loading: true,
      bar: {
        animation: true,
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: config.tooltip,
        xAxis: config.xAxis,
        yAxis: config.yAxis,
        series: [{
          name: '销量',
          type: 'bar',
          barWidth: 30,
          itemStyle: {
            normal: {
              color: this.style
            }
          }
        }]
      }
    }),
    props: {
      data: {
        type: Array,
        default: []
      },
      style: {
        type: String,
        default: '#447DC8'
      },
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      handleData (data) {
        let name = []
        let value = []
        data.map((item) => {
          name.push(item.name)
          value.push(item.value)
        })
        this.bar.xAxis.data = name
        this.bar.series[0].data = value
      },
      onReady (instance) {
        console.log(instance)
      },
      onClick (event, instance, echarts) {
        console.log(arguments)
      }
    }
  }
</script>
<style>
.echarts {
    width: 400px;
    height: 400px;
  }
</style>
