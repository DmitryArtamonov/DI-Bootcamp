import './App.css';
import React, { Component } from 'react';
import { useState } from 'react';
import { Color, Child } from './Color';
import ErrorBoundary from './Error';

class BuggyCounter extends Component {
  constructor(props) {
      super(props);
      this.state = {
        count: 0,
      }
  }

  handleClick = () => {
    const counter = this.state.count + 1
  this.setState({count: counter})
}

  render() {

    if (this.state.count === 5){
      throw new Error('I crashed!')
    }

    return (
        <>

          {this.state.count}
          <button onClick={this.handleClick }>Add</button>  
        </>
    );
  }
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Color/>
        <Child/>
      <div style={{marginTop: '20px'}}>
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
      </div>  
      </header>


      
      
      
    </div>
  );
}

export default App;
