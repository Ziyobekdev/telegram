import React from 'react'
import "./Tels.css"
import Menu from "../Base"
function n() {
  return (
    <div className='menu'>
      <div className="div1">
      <input type="text"  placeholder='search'/>

      </div>
    <div>
      {Menu.map(item => 
        
        <div className='item'>
          <img src={item.img} alt="" />
          <div className="card-bady">
            <h3>{item.title}</h3>
            <p>{item.qushimcha}</p>
          </div>
          <h4>{item.price}</h4>
        </div>

        )}
    </div>
    </div>
  )
}

export default n