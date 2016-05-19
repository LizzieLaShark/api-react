  import React from 'react'
  import { render } from 'react-dom'
  import App from './app'
  import request from 'superagent'


  class DisplayKitties extends React.Component {
    constructor(props) {
      super(props)
      this.state = {cats: [] }
    }

    getKitties() {
      request
        .get('http://thecatapi.com/api/images/get?format=src')
        .end(function(err, res)  {
          console.log(res.text)
          this.setState( {cats: this.state.cats.concat(res.text) } )
        }.bind(this))

      }

  render() {
    return (
      <div>
          <button onClick={this.getKitties.bind(this)}>Get Catz</button>
          {
            this.state.cats.map(function(cats){
              return <h1>{cats}</h1>
            })
          }
      </div>
    )
  }


}


  export default DisplayKitties
