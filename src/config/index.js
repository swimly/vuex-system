const config = {
  service: 'http://192.168.7.179:8080//system/',
  xAxis: {
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: '#447DC8'
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        fontSize: 12,
        color: '#666'
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        width: 1,
        color: '#f5f5f5'
      }
    }
  },
  yAxis: {
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: '#447DC8'
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        fontSize: 12,
        color: '#666'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        width: 1,
        color: '#eee'
      }
    }
  },
  tooltip: {
    backgroundColor: 'rgba(68,125,200,0.7)'
  },
  caption: [
    '序号',
    '用户ID',
    '姓名',
    '邮箱',
    '手机号',
    '性别',
    '注册日期',
    '上次登录',
    '操作'
  ]
}
export default config
