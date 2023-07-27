import React from 'react'
import "./Chat.css"
function chat() {
  return (
    <div>
      <div className="navbarcha">
        <div className="div2">
          <h5>Web 14</h5>
          <h6>9 tmombars</h6>
        </div>

        <div className="div3">
          <i class="bi bi-search"></i>
          <i class="bi bi-layout-sidebar-reverse"></i>
          <i class="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className="div4">

      </div>
      <div className="div5">
        <i class="bi bi-link"></i>
        <input type="text" />
        <div className="div7">
          <i class="bi bi-emoji-smile"></i>
          <i class="bi bi-mic"></i>
        </div>
      </div>
    </div>
  )
}

export default chat