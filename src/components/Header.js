import React from 'react'

export default class Welcome extends React.Component {
    render() {
      return(
        <div id='header'>
          <h1>Crypto Application {this.props.name}</h1>
      </div>
      )
      
    }
  }
