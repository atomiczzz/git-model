import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import davidGit from './gitJson.json'

let userData = davidGit
ReactDOM.render(<App userData={userData} />, document.getElementById('root'))
registerServiceWorker()
