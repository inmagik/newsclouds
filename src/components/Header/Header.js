import React from 'react'
import { Link } from 'react-router'
import './Header.css'
import logo from './NewsWordClouds_logo.png'

const Header = () => (
  <div className="row">
   <div className="Header col-md-8 col-md-offset-2">
     <img src={logo} className="logo"/>
     <ul className="navbar-menu">
     <li><a href="https://github.com/inmagik/newswordclouds-app">Repo</a></li>
     <li><Link to='/project'>Project</Link></li>
     </ul>
   </div>
  </div>
)

export default Header
