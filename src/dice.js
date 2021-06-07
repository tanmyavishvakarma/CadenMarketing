import React, { Component, Fragment } from "react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";
import random from "random";
class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      op: ["", "", "", "", ""],
    };
    this.rollDoneCallback = this.rollDoneCallback.bind(this);
  }
  rollAll() {
    this.reactDice.rollAll();
  }

  rollDoneCallback(num) {
    const nop = [
      random.int(3, 36),
      random.int(3, 36),
      random.int(3, 36),
      random.int(3, 36),
      random.int(3, 36),
    ];
    console.log(`You rolled a ${num}`);
    this.setState({ sum: num });
    var ix = random.int(0, 4);

    nop[ix] = num;
    this.setState({ op: nop });
  }
  handleResult = (key) => {
    //e.preventDefault();
    console.log(key);
    if (key === this.state.sum) {
      alert("YOU WIN");
      this.rollAll();
    } else {
      alert("TRY AGAIN");
      this.rollAll();
    }
  };

  render() {
    return (
      <Fragment>
        <button className="roll" onClick={() => this.rollAll()}>
          Roll Dice
        </button>
        <ReactDice
          numDice={this.props.number}
          faceColor="grey"
          dotColor="rgb(0,0,0)"
          dieSize="50"
          rollTime=".1"
          rollDone={this.rollDoneCallback}
          disableIndividual="true"
          ref={(dice) => (this.reactDice = dice)}
        />
        {this.state.op.map((key) => {
          return (
            <button className="roll" onClick={() => this.handleResult(key)}>
              {key}
            </button>
          );
        })}

        <h1>{this.state.sum}</h1>
      </Fragment>
    );
  }
}

export default Dice;
