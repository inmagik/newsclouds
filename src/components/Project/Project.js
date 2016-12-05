import React from 'react'
import './Project.css'
import project from './project.png'


const Project = () => (
  <div className="row project-content">
    <div className="col-md-8 col-md-offset-2">
       <h4 className="project-title">>Il Projetto <strong>DailyClouds</strong></h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       <div className="Project-image-div">
         <img src={project} className="Project-image"/>
       </div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       <h4 className="project-title">>RSS Feeds - Giornali italiani</h4>
       <p>Ecco i link dei feeds RSS dei giornali italiani utilizzati nel progetto <strong>DailyClouds</strong>:</p>
       <ul>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
       </ul>
    </div>
  </div>
)

export default Project
