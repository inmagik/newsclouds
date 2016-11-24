import React from 'react'
import { HashRouter, Match } from 'react-router'
import NewsWordCloudsList from './components/NewsWordCloudsList'
import './App.css';

const App = () => (
  <HashRouter>
    <Match pattern="/" component={NewsWordCloudsList} />
  </HashRouter>
)

export default App;
