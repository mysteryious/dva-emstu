import React, { useState, useEffect } from 'react'
import RouterView from "../../routes/RouterView";
import { connect } from "dva"
import "@/assets/css/index.scss"

import echarts from 'echarts/lib/echarts';
// const  option = 


const Index = (props) => {

  const [ind, setInd] = useState(0);
//   console.log(props.state)
  useEffect(()=>{   
    let myChart = echarts.init(document.getElementById('echartss'));
    myChart.setOption({
        title: {
            text: '未来一周气温变化',
            subtext: '纯属虚构'
        },
        tooltip: {  
            trigger: 'axis'
        },
        legend: {
            data:['最高气温','最低气温']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [
            {
                name:'最高气温',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'最低气温',
                type:'line',
                data:[1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                normal: {
                                    position: 'start',
                                    formatter: '最大值'
                                }
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }
        ]
    })
  },[])

  return (
    <div className="home">
    <header className="header">重点关注学生考试成绩统计图</header>
        <div id="echartss">

        </div>
      可视化展示
    </div>
  )

}
// const aa = (state) => {
//   return {
//     state: state.user
//   }


//12312
// }


export default connect()(Index)

