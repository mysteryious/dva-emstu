import React, { useState, useEffect } from "react"

const Table = props => {
  let { columns, data } = props
  return (
    <div>
      <div className="table-head">
        {columns.map((item, index) => <div className="table-item-cell" key={index}>
          {item.title}
        </div>)}
      </div>
      {/* <div className="table-content">
        {
          data.map((item, index) => <div key={index} className="table-item">
            {
              columns.map((value, key) => <span key={key} className="table-item-cell">
                {item[value.id] instanceof Array ?
                  item[value.id].map((ite, ind) => <span key={ind} style={{ marginLeft: "5px" }}>{ite}</span>)
                  : item[value.id]}
                {value.render && value.render(item)}
              </span>)
            }
          </div>)
        }
      </div> */}
    </div>
  )
}
export default Table;