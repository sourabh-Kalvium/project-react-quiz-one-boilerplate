import React, { Component } from 'react'
import Questions from "./data.json"

export default class QuizComponent extends Component {
   constructor(props){
     super(props);

    
   }

  render() {
    let currentIndex=this.props.currentIndex
    return (
      <div>
         <h2>Questions</h2>
         <div><span>{currentIndex+1}</span>of <span>15</span></div>

         <h1>{Questions[currentIndex].question}</h1>
         <div>
           <div onClick={()=>this.props.checkAnswer(Questions[currentIndex].optionA)}>{Questions[currentIndex].optionA}
           </div>
           <div onClick={()=>this.props.checkAnswer(Questions[currentIndex].optionB)}>    {Questions[currentIndex].optionB}
           </div>
           <div onClick={()=>this.props.checkAnswer(Questions[currentIndex].optionC)}>    {Questions[currentIndex].optionC}
           </div>
           <div onClick={()=>this.props.checkAnswer(Questions[currentIndex].optionD)}>    {Questions[currentIndex].optionD}
           </div>
         </div>

         <div>
            <button onClick={this.props.previousFunction}>Previous</button>
            <button onClick={this.props.nextFunction}>Next</button>
            <button onClick={this.props.quitFunction}>Quit</button>
         </div>
      </div>
    )
  }
}
