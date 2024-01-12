import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget.jsx'
import NavMenu from './NavMenu.jsx'


function NavBar() {


  return (
    <div className='navBar-container'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <NavMenu />
        </li>
        <CartWidget />
      </ul>

    </div>
  )
}

export default NavBar