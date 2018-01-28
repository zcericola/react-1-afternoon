import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state= {
    supplies: ['water', 'gas', 'tacos', 'computers', 'rice', 'soup','beef', 'chicken', 'ramen', 'fish'],
    userInput: '',
    filteredSupplies: [],
    }
  }

    onUserInput(val) {      
      this.setState({ userInput: val})
    }

    filterSupplies(userInput) {
      let supplies = this.state.supplies;
      let filteredSupplies = [];    
      
      for(let i = 0; i < supplies.length; i ++){
        if(supplies[i].includes(userInput)){
          filteredSupplies.push(supplies[i]);
        }
      }
         this.setState({ filteredSupplies: filteredSupplies });

      }    
     

   
  
  render() {
    return (
      <div className = 'puzzleBox filterStringPB'>
      <h4>Filter String</h4>
      <span className = 'puzzleText'>Supplies: {JSON.stringify(this.state.supplies, null, 10)}</span>
      <input className = 'inputLine' onChange = {(event) => this.onUserInput(event.target.value)}/>
      <button className = 'confirmationButton' onClick = {() => this.filterSupplies(this.state.userInput)}>Filter</button>
      <span className = 'resultsBox filterStringRB'>Filtered Supplies: {JSON.stringify(this.state.filteredSupplies, null, 10)}</span>
        
      </div>
    );
  }  
}

export default FilterString;
