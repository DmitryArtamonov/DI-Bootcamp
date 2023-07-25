// Line needed to create a Class Component
import React from 'react';
// import './Car.css';
import SearchCar from './SearchCar';

// the array of object is now outside of the class
const listCars = [
  {
    id: 1,
    brand: "ford",
    name: "ford torino",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    brand: "ford",
    name: "ford galaxie 500",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 3,
    brand: "chevrolet",
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
  },
  {
    id: 4,
    brand: "peugeot",
    name: "peugeot 504 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
  {
    id: 5,
    brand: "renault",
    name: "renault 12 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
]

// Class Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //we pass nameChosenCar in the state
      //currently it's an empty string
      nameChosenCar: ""
    };
  }

  // we deleted the "const" keyword before the function
  handleChange = event => {
    // we use this.setState to change the value of nameChosenCar
    this.setState(
      {
        nameChosenCar: event.target.value,
      }
    )
  }

  render() {
    return (
      <div className="box" >
        <SearchCar listCars={listCars} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default App;