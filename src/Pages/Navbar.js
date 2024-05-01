import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {
  return (
    <div>
      <div className="navbars">
        Todolist
        <div className="navbar_links">
          <Link to="/"  style={{textDecoration:"none"}}><div >Home</div></Link>
          <Link to="/add"style={{textDecoration:"none"}}><div>Todo</div></Link>

        </div>
      </div>
    </div>
  )
}
