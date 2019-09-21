import React, { useState, useEffect } from 'react'
import style from "@/assets/css/charts.scss"
import MyChart from "@/components/myChart"



const Charts = (props) => {
  const [currentIndex, setInd] = useState(0)
  return (
    <div className={style.charts}>
      <div className={style.header}>重点关注学生考试成绩统计图</div>

      <div className={style.main}>
        <div className={style.mainNav}>
          <div className={style.navContent}>
            切换班级:
            <div className={style.nav}>
              <span>1702E</span>
              <span className={style.act}>1702E</span>
              <span className={style.acti}>创建班级+</span>
            </div>
            <span><b onClick={() => setInd(0)}>柱状图</b>/<b onClick={() => setInd(1)}>线图</b></span>
          </div>
        </div>
        <div className={style.mainBtns}>
          添加学生+:
          <input type="text" placeholder="输入姓名" />
          <input type="text" placeholder="末班次数" />
          <input type="text" placeholder="结对子，帮扶对象" />
          <button>添加</button>
        </div>

        <MyChart currentIndex={currentIndex}></MyChart>

        <div className={style.footer}>
          <div className={style.right}>
            <span>添加成绩+</span>
            <span>添加分析和解决方案+</span>
          </div>
          <div><span>查看和编辑该学生所有成绩</span></div>
        </div>
      </div>
    </div>
  )
}




export default Charts