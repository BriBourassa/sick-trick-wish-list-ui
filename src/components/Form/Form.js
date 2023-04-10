import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <form>
        <input 
            type="text" 
            placeholder="Trick"
            name="trick" 
        />

        <input 
            type="text" 
            placeholder="Trick"
            name="trick" 
        />





        <button>SEND IT</button>


      </form>
    );
  }
}

export default Form;
