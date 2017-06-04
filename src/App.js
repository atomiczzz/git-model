import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
import davidGit from './gitJson.json'
import {token} from './gitToken.js'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }
  componentDidMount () {
    let request = new XMLHttpRequest()
    request.open('GET', 'https://api.github.com/?access_token=' + token, true)

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText)
        // console.log(data)
        ReactDOM.render(<App userData={data} />, document.getElementById('root'))
      } else {
        console.log('error')
      }
    }
    request.onerror = function () {
      console.log('There was a connection error of some sort')
    }
    request.send()
  }

  render () {
    let pkg = this.props.userData
    console.log(pkg)
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
    console.log(this.props.userData)
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

export default App
