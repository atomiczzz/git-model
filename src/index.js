import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import davidGit from './gitJson.json'
import {token} from './gitToken'

let userData = davidGit
ReactDOM.render(<App userData={userData} />, document.getElementById('root'))
registerServiceWorker()

// let request = new XMLHttpRequest()
// request.open('GET', 'https://api.github.com/?access_token=' + token, true)
//
// request.onload = function () {
//   if (request.status >= 200 && request.status < 400) {
//     const data = JSON.parse(request.responseText)
//     console.log(data)
//   } else {
//     console.log('error')
//   }
// }
// request.onerror = function () {
//   console.log('There was a connection error of some sort')
// }
// request.send()
