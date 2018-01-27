import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {      
    super();
    this.state = {
        employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

    unFilteredArray: [],
    userInput = '',
    filteredArray: [],

    
    }
    

  }
  onUserInput(val){
      this.setState({userInput: val});
  }

  filterUserInput(prop){
      let employees = this.state.employees;
      let filteredEmployees = [];

      for(let i = 0; i < employees.length; i ++){
          if(employees[i].hasOwnProperty(prop)) {
              filteredArray.push()
          } 
      }

  }
  render() {
    return <div className="puzzleBox filterObjectPB">
        <h4 >Filter Object</h4>
        <span className="puzzleText">Start: {JSON.stringify(this.state.employees, null, 10)} </span>
        <input className="inputLine" onChange = {(event) => {onUserInput(event.target.value)}} />
        <button className="confirmationButton" onClick = {(event) => {filterUserInput(this.state.userInput)}} />
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
      </div>;
  }
}

export default FilterObject;
