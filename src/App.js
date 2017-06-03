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
        <Nav />
        <div className='leftContainer'>
          <img className='user' id='avatar' src={pkg.avatar_url} />
          <div className='user' id='userinfo'><strong>{pkg.name}</strong></div>
          <div className='user' id='userName'>{pkg.login}</div>
          <div className='user' id='bio'>{pkg.bio}</div>
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
          <input id='searchBar' placeholder='Search GitHub' />
          <a href='' className='navLink'>Pull Requests</a>
          <a href='' className='navLink'>Issues</a>
          <a href='' className='navLink'>MarketPlace</a>
          <a href='' className='navLink'>Gist</a>
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
