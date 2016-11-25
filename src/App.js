import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import NewsWordCloudsList from './components/NewsWordCloudsList'
import WordCloudDetail from './components/WordCloudDetail'
import About from './components/About'
import './App.css';

const App = () => (
  <Router history={hashHistory}>
    <Route>
      <Route path='about' component={About} />
      <Route path='/' component={NewsWordCloudsList}>
        <Route path='wordclouds/:wordCloud' component={WordCloudDetail} />
      </Route>
      <Redirect from="*" to="/" />
    </Route>
  </Router>
)

export default App;
