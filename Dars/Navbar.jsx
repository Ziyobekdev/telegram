import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div>
        <div className="navbar1">
        <div className="list">
        <i class="bi bi-list"></i>
        <p>all Chats</p>
        </div>
        <div className="list">
        <i class="bi bi-person-circle"></i>
        <p>Shahsiy</p>

        </div>
        <div className="list">
        <i class="bi bi-folder-fill"></i>
        <p>muhimlar</p>
        </div>
        <div className="list">
        <i class="bi bi-folder-fill"></i>
        <p>Kerakmas</p>
        </div>
        <div className="list">
        <i class="bi bi-justify"></i>
        <p>Edit</p>
        </div>


        
        </div>
    </div>
  )
}

export default Navbar