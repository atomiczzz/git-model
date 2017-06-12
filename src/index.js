import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import davidGit from './gitJson.json'
import {token} from './gitToken'

let mainState = window.appState = {
  userData: null,
  userRepo: null,
  searchValue: null,
  isLoading: false,
  userName: 'atomiczzz'
}

function upDateState (name) {
  mainState.isLoading = true
  getUserProfile(name)
  getUserRepo(name)
}

function render () {
  ReactDOM.render(App(mainState), document.getElementById('root'))
  window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render)

function getUserProfile () {
  let defaultUser = 'atomiczzz'
  let api = 'https://api.github.com/users/'
  let getHash = api + defaultUser
  let getRepoHash = api + defaultUser + '/repos'
  let request = new XMLHttpRequest()
  request.open('GET', 'https://api.github.com/?access_token=' + token, true)
  request.open('GET', getHash, true)

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText)
      mainState.userData = data
      mainState.isLoading = false
    } else {
      console.log('error')
    }
  }
  request.onerror = function () {
    console.log('There was a connection error of some sort')
  }
  request.send()
}

function getUserRepo () {
  let defaultUser = 'atomiczzz'
  let api = 'https://api.github.com/users/'
  let getHash = api + defaultUser
  let getRepoHash = api + defaultUser + '/repos'
  let request = new XMLHttpRequest()
  request.open('GET', 'https://api.github.com/?access_token=' + token, true)
  request.open('GET', getRepoHash, true)

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText)
      mainState.userRepo = data
      mainState.isLoading = false
    } else {
      console.log('error')
    }
  }
  request.onerror = function () {
    console.log('There was a connection error of some sort')
  }
  request.send()
}
upDateState(mainState.userName)
export {mainState, upDateState}
