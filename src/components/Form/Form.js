import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        obstacle: '',
        stance: '',
        tutorial: ''
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitTrick = event => {
    event.preventDefault();
    const newTrick = {
        id: Date.now(),
        ...this.state
    }
    this.props.addTrick(newTrick)
  }

  render() {
    return (
      <form className="form">
        <select name="tricks">
          <option value="choose">Choose Your Stance</option>
          <option value={this.state.stance}>Regular</option>
          <option value={this.state.stance}>Switch</option>
          onChange={event => this.handleChange(event)}
        </select>
        {/* not adding dropdown option to before the name text input*/}

        <input 
            type="text" 
            placeholder="Name of Trick" 
            name="name" 
            value={this.state.name}
            onChange={event => this.handleChange(event)}
        />

        <select name="obstacles">
          <option value="choose">Choose Your Obstacle</option>
          <option value="flatground">Flatground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select>
        {/* not adding */}

        <input
          type="text"
          placeholder="Link to Tutorial"
          name="tutorial"
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitTrick(event)}>SEND IT</button>
      </form>
    );
  }
};
// only the text inputs are currently working

export default Form;
