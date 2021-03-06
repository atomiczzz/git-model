import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import davidGit from './gitJson.json'
import {token} from './gitToken.js'
import logo from './GitHub-Mark-Light-64px.png'

function LoadingPage () {
  return <h1>Fetching...</h1>
}
function App (appState) {
  if (appState.isLoading) {
    return <LoadingPage />
  } else {
    return <ProfilePage userData={appState.userData} />
  }
}

class ProfilePage extends Component {
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
    // function handleClick (input) {
    //   if (input.charCode === 13) {
    //     mainState.searchValue = input.target.value
    //     console.log(input.target.value)
    //   }
    // }
    return (
      <div>
        <nav>
          <img src={logo} className='logo' alt='#' />
          <input id='searchBar' type='text' placeholder='Search GitHub' value='' />
          <a href='' className='navLink'>Pull Requests</a>
          <a href='' className='navLink'>Issues</a>
          <a href='' className='navLink'>MarketPlace</a>
          <a href='' className='navLink'>Gist</a>
        </nav>
      </div>
    )
  }
}

// class Ui extends Component {
//   componentWillMount () {
//     let user = 'atomiczzz'
//     let api = 'https://api.github.com/users/'
//     let getHash = api + user + '/repos'
//     let request2 = new XMLHttpRequest()
//     request2.open('GET', 'https://api.github.com/?access_token=' + token, true)
//     request2.open('GET', getHash, true)
//     // request.open('GET', 'https://api.github.com/users/atomiczzz')
//     // request.open('GET', 'https://api.github.com/users/atomiczzz/repos')
//
//     request2.onload = function () {
//       if (request2.status >= 200 && request2.status < 400) {
//         const repo = JSON.parse(request2.responseText)
//         console.log(repo)
//         ReactDOM.render(<Ui repoData={repo} />, document.getElementById('root'))
//       } else {
//         console.log('error')
//       }
//     }
//     request2.onerror = function () {
//       console.log('There was a connection error of some sort')
//     }
//     request2.send()
//   }
//   render () {
//     return (
//       <div></div>
//     )
//   }
// }

export default App
