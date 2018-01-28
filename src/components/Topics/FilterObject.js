import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {      
    super();
    this.state = {
        animals: [
        {
          name: 'Leo Lion',
          title: 'King',          
        },
        {
          name: 'Alvin Anteater',
          food: 'ants',
          age: 77
          
        },
        {
          name: 'Jorge Hippo',
          weight: 366
        }
      ],

    
    userInput: '',
    filteredArray: [],

    
    }
    

  }
  onUserInput(val){
      this.setState({userInput: val});
  }

  filterAnimals(prop){
      let animals = this.state.animals;
      let filteredAnimals = [];  

      for(let i = 0; i < animals.length; i ++){
          if(animals[i].hasOwnProperty(prop)) {
              filteredAnimals.push(animals[i]);
          } 
      }
      this.setState({filteredAnimals: filteredAnimals});
  }

  render() {
    return <div className="puzzleBox filterObjectPB">
        <h4 >Filter Object</h4>
        <span className="puzzleText">Start: {JSON.stringify(this.state.animals, null, 10)} </span>
        <input className="inputLine" onChange = {(event) => {this.onUserInput(event.target.value)}} />
        <button className="confirmationButton" onClick = {(event) => {this.filterAnimals(this.state.userInput)}}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredAnimals, null, 10)}</span>
      </div>;
  }
}

export default FilterObject;
