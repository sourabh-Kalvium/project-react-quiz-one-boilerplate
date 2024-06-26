import React, { Component } from 'react'
import HomeComponent from './component/HomeComponent'
import "./App.css"
import QuizComponent from './component/QuizComponent'
import ResultComponent from './component/ResultComponent'
import Questions from "./component/data.json"

export default class App extends Component {
   
  constructor(props){
    super(props);

    this.state={
      startgame:false,
      endgame:false,
      questions:Questions,
      currentQuestionIndex:0,
      userSelection:new Array(Questions.length).fill(null)
    }
  }
  handleStartGame =()=>{
    this.setState({
      startgame:!this.state.startgame
    })
  }
  
  nextQuestion=()=>{
    if(this.state.currentQuestionIndex<Questions.length-1){
      this.setState({
        currentQuestionIndex:this.state.currentQuestionIndex+1
      })
    }
    else{
      this.setState({
        endgame:true
      })
    }
  }
  previousQuestion=()=>{
   if(this.state.currentQuestionIndex>0){
     this.setState({
       currentQuestionIndex:this.state.currentQuestionIndex-1
     })
   }
 }

 handleOptionSelect=(option)=>{
    const{currentQuestionIndex,userSelection}=this.state;
    console.log(userSelection[currentQuestionIndex])
   if(userSelection[currentQuestionIndex] !==1 && userSelection[currentQuestionIndex] !==0){
    if(option){
      console.log(option)
      if(Questions[currentQuestionIndex].answer===option){
        let updatedArr=[...userSelection]
        updatedArr[currentQuestionIndex]=1
        console.log(updatedArr)
        this.setState({
          userSelection:updatedArr
        })
  
        alert("correct answer")
      }
      else if(Questions.answer!==option){
        let updatedArr=[...userSelection]
        updatedArr[currentQuestionIndex]=0
        this.setState({
          userSelection:updatedArr
        })
        alert("Wrong answer")
      }   
     } 
   }
   else {
    alert("Already answered ,attempt next question")
   }
   
    
 }

 handleQuit=()=>{
    
  this.setState({
    endgame:true,
    startgame:false
  })
 }
  
  render() {
    console.log(this.state)
    const { startgame, endgame, currentQuestionIndex, userSelection } = this.state;
    
    return (
      <div>
        {startgame && !endgame ? (
        <QuizComponent
          currentIndex={currentQuestionIndex}
          nextFunction={this.nextQuestion}
          previousFunction={this.previousQuestion}
          checkAnswer={this.handleOptionSelect}
          quitFunction={this.handleQuit}
        />
      ) : !startgame && endgame ? (
        <ResultComponent scoreArray={this.state.userSelection} />
      ) : (
        <HomeComponent startgame={this.handleStartGame}/>
      )}

      </div>
    )
  }
}

