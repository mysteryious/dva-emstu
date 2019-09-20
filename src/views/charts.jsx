import React, { useState, useEffect } from 'react'
import RouterView from "../routes/RouterView";
import echarts from 'echarts';
import { connect } from "dva"
import { setocaltion, getocaltion } from "@/utils/login"
import style from "@/assets/css/charts.scss"

const option = {
  title: {
    text: 'xxx同学的日周考成绩统计图',
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
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
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
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
  legend: {},
  tooltip: {},
  dataset: {
    dimensions: ['product', '技能', '理论'],
    source: [
      { product: '08-01', '技能': 43.3, '理论': 85.8 },
      { product: '08-02', '技能': 83.1, '理论': 73.4 },
      { product: '08-03', '技能': 86.4, '理论': 65.2 },
      { product: '08-04', '技能': 72.4, '理论': 53.9 }
    ]
  },
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
    }
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    { type: 'bar' },
    { type: 'bar' },
  ]
};


const Charts = (props) => {
  useEffect(() => {
    var myChart = echarts.init(document.getElementById('pie'));
    var myChart1 = echarts.init(document.getElementById('myChart'));
    // 绘制图表
    myChart.setOption(option);
    myChart1.setOption(options);
  })
  


  return (
    <div className={style.charts}>
      <div className={style.header}>重点关注学生考试成绩统计图</div>
      <div className={style.main}>
        <div className={style.mainNav}>
          <div className={style.grade}>
            <div className={style.seleGrade}>
              选择班级:
            </div>
            <div className={style.gradeList}>
              <span>1703D</span>
              <span>1703D</span>
              <span>1703D</span>
              <span>1703D</span>
              <span>1703D</span>
              <span>1703D</span>
              <span>1703D</span>
              <span>1703D</span>
              <span>1703D</span>
              <span>1703D</span>
              <span>1703D</span>
            </div>
          </div>
          <div className={style.namesbox}>
            <span className={style.names}>名单：张三，张丽。王强（3/人）</span>
            <span className={style.btn}>
              按钮（柱状图/线图）
            </span>
          </div>
        </div>
        <div className={style.mainBtns}>
        </div>
        <div id="pie" className={style.pie}></div>
        <div className={style.footer}>
          <div className={style.leftText}>
            <p>2019-08-30</p>
            <p>今日分析及解决方案</p>
            <p><a href="">点击查看历史记录></a></p>
          </div>
          <div className={style.rightText}>
            大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好
          </div>
        </div>
        <div id="myChart" className={style.myChart}></div>
        <div className={style.footer}>
          <div className={style.leftText}>
            <p>2019-08-30</p>
            <p>今日分析及解决方案</p>
            <p><a href="">点击查看历史记录></a></p>
          </div>
          <div className={style.rightText}>
            大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好
          </div>
        </div>
      </div>
    </div>
  )
}




export default Charts