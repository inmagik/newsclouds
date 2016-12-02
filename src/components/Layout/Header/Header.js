import React from 'react'
import { Link } from 'react-router'
import './Header.css'
import logo from './NewsClouds_logo.png'

const Header = () => (
  <div className="Header row">
   <div className="col-md-8 col-md-offset-2">
     <img className="Header-logo" src={logo}/>
     <ul className="Header-navbar-menu">
     <li><Link to='/'>DailyClouds</Link></li>
     <li><a href="https://github.com/inmagik/newswordclouds-app">Repo</a></li>
     <li><Link to='/project'>Project</Link></li>
     </ul>
   </div>
  </div>
)

export default Header
