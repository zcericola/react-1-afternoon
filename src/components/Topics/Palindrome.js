import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  updateUserInput(val) {    
    this.setState({ userInput: val });
  }

  checkPalindrome(userInput){
    let palindrome = this.state.palindrome;
    let originalWord = userInput;       
    let splitWord = userInput.split('');
    let reversedWord = splitWord.reverse().join('');
       
    if(reversedWord === originalWord){
      console.log('It is a palindrome.');
     this.setState({palindrome: 'true'});
    }
    else {
       console.log('It is not a palindrome.');
       this.setState({palindrome: 'false'});
    }    
    
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange = {(event) => this.updateUserInput(event.target.value)} />
        <button className="confirmationButton" onClick = {() => this.checkPalindrome(this.state.userInput)}>Check Word</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
