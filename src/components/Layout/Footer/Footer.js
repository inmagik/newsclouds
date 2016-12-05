import React from 'react'
import './Footer.css'
import inmagik from './inmagik_circle_shadow.png'
import Octocat from './Octocat_circle.png'

const Footer = () => (
  <div className="footer-row">
   <div className="col-md-10 col-md-offset-1">
     <a href="https://inmagik.com"><img src={inmagik} className="inmagik-logo"/></a>
     <a href="https://github.com/inmagik"><img src={Octocat} className="github-logo"/></a>
     <p className="copy">Copyright © 2016 INMAGIK srl - All rights reserved.</p>
   </div>
  </div>
)

export default Footer
