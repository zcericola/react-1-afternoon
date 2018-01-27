import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
        evenArray: [],
        oddArray: [],
        userInput: []
    }
  }
  onUserInput(val){
      this.setState({userInput: val});
  }
  
  sortEvensAndOdds(userInput){
    let arr = userInput.split(',');
    let evens = [];
    let odds = [];    
    for(let i = 1; i <= arr.length; i ++){
        if(i % 2 === 0){
            evens.push(i);
        }
        else {
            odds.push(i);
        }
    }
    
    this.setState({evenArray: evens, oddArray: odds});
  }
  
  render() {
    return <div className = 'puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className = 'inputLine' onChange = {(event) => {this.onUserInput(event.target.value) }}/>
        <button className = 'confirmationButton' onClick = {(event) => {this.sortEvensAndOdds(this.state.userInput)}} />
        <span className = 'resultsBox' >Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className = 'resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>;
  }
}

export default EvenAndOdd;
