import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {

    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/tricks")
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {


    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>

        
      </div>
    );
  }


};

export default App;