import React, { useState, useEffect } from 'react'
import RouterView from "../routes/RouterView";
import { connect } from "dva"
import { setocaltion, getocaltion } from "@/utils/login"
import "@/assets/css/login.scss"


const Index = (props) => {

  const [ind, setInd] = useState(0);
  const [username, setUsername] = useState("panhuijuan");
  const [password, setPassword] = useState("123321");
  const [checked, setChecked] = useState(true);

  let data = getocaltion("authorization")
  if (data) {
    const { username, password } = JSON.parse(data);
    console.log(username, password)
    // setUsername(username)
    // setPassword(password)
  }


  const hableSubmit = () => {
    props.dispatch({
      type: "user/login",
      payload: {
        username,
        password
      }
    }).then(res => {
      if (res.code === 1 && checked) {
        setocaltion("authorization", { username, password })
      }
    })
  }



  return (
    <div className="home">
      <header className="header">重点学生日周考成绩录入管理系统</header>
      <div className="main">
        <div className="main-content">
          <span className="main-title">网站工程</span>
          <div className="main-btns">
            <span className={ind === 0 ? "active" : ""} onClick={() => setInd(0)}>登入</span>
            <span className={ind === 1 ? "active" : ""} onClick={() => setInd(1)}>注册</span>
          </div>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="手机号/邮箱" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="输入密码" />
          {ind === 0 ?
            <label type="check">
              <input checked={checked} type="checkbox" name="check" onChange={() => setChecked(!checked)} />两周内自动登录
          </label>
            :
            <input type="text" placeholder="输入手机号" />}
          {ind === 0 ? <button onClick={() => hableSubmit()}>登入</button> : <button>注册</button>}
        </div>
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