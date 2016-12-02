import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import moment from 'moment'
import './index.css'

moment.locale('it')

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
