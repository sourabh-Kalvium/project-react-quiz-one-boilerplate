import React, { Component } from 'react'
import "../styles/homeComponent.css"

export default class HomeComponent extends Component {
   constructor(props){
     super(props);
     
   }

  render() {
    return (
      <div className="start">
         <h2>Quiz App</h2>
         <button onClick={this.props.startgame}>Play</button>
      </div>
    )
  }
}
