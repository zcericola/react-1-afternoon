import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = { 
      number1: 0,
      number2: 0,
      sum: null 
      };
  }

  updateNum1(val){
    console.log(val);
    this.setState({number1: val})
  }
  updateNum2(val){
    console.log(val);
    this.setState({number2: val})
  }

  sumNums(a,b){
    a = parseInt(a);
    b = parseInt(b);    
    let sum = a + b;       
    this.setState({sum: sum})
  }

  render() {
    return <div className="puzzleBox SumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={e => {
            this.updateNum1(e.target.value);
          }} />
        <input className="inputLine" onChange={e => {
            this.updateNum2(e.target.value);
          }} />
        <button className="confirmationButton" onClick = {() => {this.sumNums(this.state.number1, this.state.number2)}}>Check Sum</button>
        <span className="resultsBox" >Sum: {this.state.sum}</span>
      </div>;
  }
}

export default Sum;
