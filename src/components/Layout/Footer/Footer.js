import React from 'react'
import './Footer.css'
import inmagik from './inmagik_circle_shadow.png'
import Octocat from './Octocat_circle.png'

const Footer = () => (
  <div className="footer-row">
   <div className="col-md-10 col-md-offset-1">
     <img src={inmagik} className="inmagik-logo"/>
     <img src={Octocat} className="github-logo"/>
     <p className="copy">Copyright © 2016 INMAGIK srl - All rights reserved.</p>
   </div>
  </div>
)

export default Footer
