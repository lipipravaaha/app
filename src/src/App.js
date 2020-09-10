/* eslint-disable space-before-function-paren */
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

/**
 * App class
 */
class App extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className="App-intro">Hello Electron!</p>
      </div>
    )
  }
}

export default App
