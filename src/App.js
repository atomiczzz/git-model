import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import davidGit from './gitJson.json'
import {token} from './gitToken.js'

class App extends Component {
  render () {
    let pkg = this.props.userData

    return (
      <div>
        <div className='header'>GitHub</div>
        <Nav />
        <div className='leftContainer'>
          <img className='avatar' src={pkg.avatar_url} />
          <div className='userinfo'><strong>{pkg.name}</strong><br />{pkg.login}</div>
          <div className='bio'>{pkg.bio}</div>
        </div>
      </div>
    )
  }
}

class Nav extends Component {
  render () {
    return (
      <div>
        <nav>
          <img src='.img/GitHub-Mark-Light-64px.png' />
          <input placeholder='Search GitHub' />
          <a href=''>Pull Requests</a>
          <a href=''>Issues</a>
          <a href=''>MarketPlace</a>
        </nav>
      </div>
    )
  }
}

var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/?access_token=' + token, true)

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText)
    console.log(data)
  } else {
    // We reached our target server, but it returned an error
    console.log('error')
  }
}
request.onerror = function () {
  console.log('There was a connection error of some sort')
}
request.send()

export default App
