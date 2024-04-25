import React, { Component } from 'react'

export default class ResultComponent extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    let { scoreArray } = this.props
    let correct = null
    let wrong = null
    let attempted = null
    scoreArray.forEach(ele => {
      if (ele == 1) {
        correct++
        attempted++
      }
      else if (ele == 0) {
        wrong++
        attempted++
      }
    });
    return (
      <div>
        <h1>Rsult</h1>

        <div>
          <h5></h5>
          <h1>Your score is <span></span></h1>

          <div>
            <h5> Total number of questions<span>15</span></h5>
            <h5> Number of attemted Questions <span>  {attempted}</span></h5>
            <h5> Number of correct answer<span>  {correct}</span></h5>
            <h5> Number of wrong answer<span></span>{wrong}</h5>
          </div>
          <button onClick={() => window.location.reload()}>Play again</button>
          <button onClick={() => window.location.reload()}>Back to home</button>
        </div>
      </div>
    )
  }
}
