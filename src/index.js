import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dice from "./dice";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numDice: "3",
    };
  }

  handleDiceChange = (message) => {
    let num = this.state.numDice;
    if (num > 1 && message === "sub") {
      num--;
    } else if (num < 200 && message === "add") {
      num++;
    }
    console.log(num);
    this.setState({ numDice: num });
  };

  render() {
    const { numDice } = this.state;
    return (
      <div className="App">
        <div className="Controls"></div>
        <Dice number={numDice} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
