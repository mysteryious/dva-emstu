import React from 'react'
import Table from "@/components/table"
import style from "@/assets/css/statistics.scss"
import data from "../../mock/data"


const Index = (props) => {
  return (
    <div className={style.charts}>
      <div className={style.header}>xx学生日周考成绩统计表</div>

      <div className={style.main}>
        <div className={style.mainNav}>
          <div className={style.navContent}>
            <span>讲师:</span>
            <span>学生:</span>      
            <span><input type="text" placeholder="快捷选择其他学生"/></span>      
          </div>
        </div>
        <div className={style.mainBtns}>
            <Table columns={data.columns} data={data.data}></Table>
        </div>

      </div>
    </div>
  )
}



export default Index