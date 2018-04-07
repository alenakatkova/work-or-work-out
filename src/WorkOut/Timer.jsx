import React from "react";
import Input from "../Calculator/Input";

export default class extends React.Component {
  state = {
    excerciseTime: 0,
    relaxTime: 0,
    excercises: 0,
    rounds: 0,
    totalTime: ""
  };

  getTotalTime = () => {
    const totalTime =
      (this.state.excerciseTime + this.state.relaxTime) *
      this.state.excercises *
      this.state.rounds;

    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;

    return `${minutes} min ${seconds} sec`;
  };

  onCalculateClick = () => {
    this.setState({ totalTime: this.getTotalTime() });
  };

  onStartClick = () => {};

  onStopClick = () => {};

  onC = (Cname, Cvalue) => {
    let newState = {};
    newState[Cname] = parseInt(Cvalue);
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <div>
          <Input
            id="excercise-time"
            name="excerciseTime"
            label="Excercise time:"
            onInputChange={this.onC}
          />

          <Input
            id="relax-time"
            name="relaxTime"
            label="Relax time:"
            onInputChange={this.onC}
          />

          <Input
            id="excercises"
            name="excercises"
            label="Amount of excercises:"
            onInputChange={this.onC}
          />

          <Input
            id="rounds"
            name="rounds"
            label="Amount of rounds:"
            onInputChange={this.onC}
          />
        </div>

        <button onClick={this.onCalculateClick}>Calculate</button>

        <div>
          Your workout will last{" "}
          {this.state.totalTime ? this.state.totalTime : `__ min __ sec`}
        </div>

        <button onClick={this.onStartClick}>Start</button>
        <button onClick={this.onStopClick}>Stop</button>
      </div>
    );
  }
}
