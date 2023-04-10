import React, { Component } from "react";
// import { Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import TricksList from "../TricksList/TricksList";
import Form from "../Form/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/tricks")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tricks: data });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>

      <Form />

        <TricksList tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;
