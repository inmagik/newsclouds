import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Layout from './components/Layout'
import Project from './components/Project'
import NewsWordCloudsList from './components/NewsWordCloudsList'
import WordCloudDetail from './components/WordCloudDetail'
import './App.css'

const App = () => (
  <Router history={hashHistory}>
    <Route component={Layout}>
      <Route path='project' component={Project} />
      <Route path='/' component={NewsWordCloudsList}>
        <Route path='wordclouds/:wordCloud' component={WordCloudDetail} />
      </Route>
      <Redirect from='*' to='/' />
    </Route>
  </Router>
)

export default App;
