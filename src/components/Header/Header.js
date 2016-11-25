import React from 'react'
import { Link } from 'react-router'
import './Header.css'

const Header = () => (
  <div className="row">
   <div className="Header col-md-8 col-md-offset-2">
     <h3 className="Header-logo">NewsWordsCloud <i className="Header-icon fa fa-newspaper-o" />|</h3>
     <ul>
     <li><a href="https://github.com/inmagik/newswordclouds-app">Repo</a></li>
     <li><Link to='/project'>Project</Link></li>
     </ul>
   </div>
  </div>
)

export default Header
