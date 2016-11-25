import React from 'react'
import { HashRouter, Match } from 'react-router'
import NewsWordCloudsList from './components/NewsWordCloudsList'
import Header from './components/Header'
import Project from './components/Project'
import './App.css';

const App = () => (
  <HashRouter>
    <div>
      <Header />
      <Match pattern="/project" exactly component={Project} />
      <Match pattern="/" component={NewsWordCloudsList} />
    </div>
  </HashRouter>
)

export default App;
