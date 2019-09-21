import React from "react"
import style from "@/assets/css/dialong.scss"

const Dialong = (props) => {
  //关闭蒙层
  const cancel = () => {
    props.setIsShow(false)
  }


  return (
    <div className={style.dialong}>
      <header className={style.header}>
        <span>{props.title}--xx同学</span>
        <b style={{ float: "right" }} onClick={() => cancel()}>X</b>
      </header>
      <main className={style.main}>
        <li>
          <input type="date" placeholder="默认当前日期" className={style.time}></input>
          <button>昨天</button>
        </li>
        {
          props.title === "新添成绩" ?
            <div>
              <li><span>技能</span><input placeholder="数字"></input></li>
              <li><span>理论</span><input placeholder="0-100之间数字"></input></li>
            </div>
            :
            <div>
              <li>
                <span>分析</span>
                <textarea className={style.text}></textarea>
              </li>
              <li>
                <span>解决方案</span>
                <textarea className={style.text}></textarea>
              </li>
            </div>
        }

      </main>
      <div className={style.footer}>
        <span>
          <button onClick={() => cancel()}>取消</button>
          <button className={style.btnActive} onClick={() => cancel()}>确定</button>
        </span>
      </div>
    </div>
  )
}
export default Dialong