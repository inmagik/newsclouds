import React from 'react'
import { Link } from 'react-router'
import './Header.css'
import logo from './DailyClouds-logo.png'

const Header = () => (
  <div className="Header row">
   <div className="col-md-8 col-md-offset-2">
     <img className="HeaderLogo" src={logo} />
     <ul className="Header-navbar-menu">
     <li><Link to='/'>DailyClouds</Link></li>
     <li><Link to='/project'>Il progetto</Link></li>
     {/*
     <li><a href="https://github.com/inmagik/newswordclouds-app" target="_blank">Github</a></li>
     */}
     </ul>
   </div>
  </div>
)

export default Header
