import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

export const Layout = ({ children }) => (
  <div className="Layout">
    <div className="container">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  </div>
)

export default Layout
