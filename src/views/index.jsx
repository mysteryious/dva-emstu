import React, { useState, useEffect } from 'react'
import RouterView from "../routes/RouterView";
import { connect } from "dva"
import "@/assets/css/index.scss"


const Index = (props) => {

  const [ind, setInd] = useState(0);
  console.log(props.state)


  return (
    <div className="home">
      <header className="header">重点学生日周考成绩录入管理系统</header>
      <div className="main">
        <span className="main-title">网站工程</span>
        <div className="main-btns">
          <span className={ind === 0 ? "active" : ""} onClick={() => setInd(0)}>登入</span>
          <span className={ind === 1 ? "active" : ""} onClick={() => setInd(1)}>注册</span>
        </div>
        <input type="text" placeholder="手机号/邮箱" />
        <input type="text" placeholder="输入密码" />
        {ind === 0 ?
          <label type="check">
            <input type="checkbox" name="check" />两周内自动登录
          </label>
          :
          <input type="text" placeholder="输入手机号" />}
        {ind === 0 ? <button>登入</button> : <button>注册</button>}
      </div>
    </div>
  )
}
const aa = (state) => {
  return {
    state: state.user
  }
}


export default connect(aa)(Index)