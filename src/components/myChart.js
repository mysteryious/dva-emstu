import React, { useEffect } from 'react'
import echarts from 'echarts';


const option = {
  title: {
    text: 'xxx同学的日周考成绩统计图',
    subtext: '仅供参考',
    textStyle: {
      color: '#477A74',
      fontWeight: 'normal'
    }
  },
  tooltip: {
    trigger: 'axis',
    position: 'top',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: 'rgb(183, 220, 57)'
      }
    }
  },
  legend: {
    y: '25px',
    data: ['技能', '理论']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },

  toolbox: {
    show: true,
    y: '20px',
    itemSize: 11,
    feature: {
      // dataZoom: {
      //   yAxisIndex: 'none'
      // },
      // dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-08', '08-09', '08-10', '08-11', '08-12', '08-13']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '技能',
      type: 'line',
      stack: '总量',
      data: [23, 70, 21, 25, 76.7, 36.5, 61, 37, 20, 9, 22, 10, 90]
    },
    {
      name: '理论',
      type: 'line',
      stack: '总量',
      data: [26, 70, 26, 25, 76.7, 82.2, 61, 37, 20, 9, 22, 13, 56]
    }
  ]
};



const options = {
  tooltip: {
    trigger: 'axis'
  },
  dataset: {
    dimensions: ['product', '技能', '理论'],
    source: [
      { product: '08-01', '技能': 43.3, '理论': 85.8 },
      { product: '08-02', '技能': 83.1, '理论': 73.4 },
      { product: '08-03', '技能': 86.4, '理论': 65.2 },
      { product: '08-04', '技能': 72.4, '理论': 53.9 },
      { product: '08-05', '技能': 43.3, '理论': 85.8 },
      { product: '08-06', '技能': 83.1, '理论': 73.4 },
      { product: '08-07', '技能': 86.4, '理论': 65.2 },
      { product: '08-08', '技能': 72.4, '理论': 53.9 },
      { product: '08-09', '技能': 43.3, '理论': 85.8 },
      { product: '08-10', '技能': 83.1, '理论': 73.4 },
      { product: '08-11', '技能': 86.4, '理论': 65.2 },
      { product: '08-12', '技能': 72.4, '理论': 53.9 },
      { product: '08-13', '技能': 43.3, '理论': 85.8 }
    ]
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-08', '08-09', '08-10', '08-11', '08-12', '08-13']
  },
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    { type: 'bar' },
    { type: 'bar' },
  ]
};


const myChart = (props) => {
  const { currentIndex } = props

  useEffect(() => {
    var myChart = echarts.init(document.getElementById('pie'));
    // 绘制图表
    if (currentIndex === 0) {
      myChart.setOption(option);
    } else {
      myChart.setOption(options);
    }
  }, [currentIndex])

  return <div id="pie" style={{ "width": "100%", "height": "55%", "marginTop": "18px" }}></div>
};

export default myChart;
