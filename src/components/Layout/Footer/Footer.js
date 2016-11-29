import React from 'react'
import './Footer.css'
import inmagik from './inmagik_circle_shadow.png'
import Octocat from './Octocat_circle.png'

const Footer = () => (
  <div className="row footer-row">
   <div className="col-md-1"></div>
   <div className="col-md-5 footer-col">
     <img src={inmagik} className="inmagik-logo"/>
     <p className="copy">Copyright © 2016 INMAGIK srl - All rights reserved.</p>
   </div>
   <div className="col-md-5 footer-col">
     <img src={Octocat} className="github-logo"/>
   </div>
   <div className="col-md-1"></div>
  </div>
)

export default Footer
