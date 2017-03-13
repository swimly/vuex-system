<template>
  <div class="echarts">
    <IEcharts :option="bar" @ready="onReady" @click="onClick"></IEcharts>
    <button @click="doRandom">Random</button>
  </div>
</template>
<script>
  import IEcharts from 'vue-echarts-v3'
  export default {
    name: 'chart',
    head: {
      title: {
        inner: '统计'
      }
    },
    components: {
      IEcharts
    },
    data: () => ({
      loading: true,
      bar: {
        animation: true,
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }),
    methods: {
      doRandom () {
        const that = this
        let data = []
        for (let i = 0, min = 5, max = 99; i < 6; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min))
        }
        that.bar.series[0].data = data
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
