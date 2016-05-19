import React, { Component } from 'react'
import DisplayKitties from './displayKitties'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
      return (
      <div>
          <h1>Welcome to {this.props.name}</h1>
          <DisplayKitties />
      </div>
    )
  }

}

export default App
