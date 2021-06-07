import React, { Component, Fragment } from "react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";
import random from "random";
import Timer from "react-compound-timer";
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
        <div className="timer">
          <Timer initialTime={60000} direction="backward">
            {() => (
              <React.Fragment>
                <Timer.Minutes /> Minutes :
                <Timer.Seconds /> seconds
              </React.Fragment>
            )}
          </Timer>
        </div>
        <br></br>

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
        <h3>={this.state.sum}</h3>
        <h2>Sum Number</h2>
        {this.state.op.map((key) => {
          return (
            <button className="roll" onClick={() => this.handleResult(key)}>
              {key}
            </button>
          );
        })}
      </Fragment>
    );
  }
}

export default Dice;
