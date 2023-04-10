import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <form className="form">
        <select name="tricks">
          <option value="choose">Choose Your Stance</option>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>

        <input 
            type="text" 
            placeholder="Name of Trick" 
            name="trick-name" 
        />

        <select name="obstacles">
          <option value="choose">Choose Your Obstacle</option>
          <option value="flatground">Flatground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select>

        <input
          type="text"
          placeholder="Link to Tutorial"
          name="tutorial-link"
        />

        <button>SEND IT</button>
      </form>
    );
  }
}

export default Form;
