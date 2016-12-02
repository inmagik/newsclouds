import React from 'react'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import Layout from './components/Layout'
import Project from './components/Project'
import NewsWordCloudsList from './components/NewsWordCloudsList'
import WordCloudDetail from './components/WordCloudDetail'

const App = () => (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path='project' component={Project} />
      <Route path='/' component={NewsWordCloudsList}>
        <Route path='clouds/:wordCloud' component={WordCloudDetail} />
      </Route>
      <Redirect from='*' to='/' />
    </Route>
  </Router>
)

export default App
