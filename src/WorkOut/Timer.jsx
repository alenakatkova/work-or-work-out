import React from "react";

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

  onExcercisesChange = e => {
    this.setState({ excercises: parseInt(e.target.value) });
  };

  onRoundsChange = e => {
    this.setState({ rounds: parseInt(e.target.value) });
  };

  onExcerciseTimeChange = e => {
    this.setState({ excerciseTime: parseInt(e.target.value) });
  };

  onRelaxTimeChange = e => {
    this.setState({ relaxTime: parseInt(e.target.value) });
  };

  render() {
    return (
      <div>
        <div>
          <label htmlFor="excercise-time">Excercise time:</label>
          <input
            type="number"
            id="excercise-time"
            name="excercise-time"
            onChange={this.onExcerciseTimeChange}
          />

          <br />

          <label htmlFor="relax-time">Relax time:</label>
          <input
            type="number"
            id="relax-time"
            name="relax-time"
            onChange={this.onRelaxTimeChange}
          />

          <br />

          <label htmlFor="excercises">Amount of excercises:</label>
          <input
            type="number"
            id="excercises"
            name="excercises"
            onChange={this.onExcercisesChange}
          />

          <br />

          <label htmlFor="rounds">Amount of rounds:</label>
          <input
            type="number"
            id="rounds"
            name="rounds"
            onChange={this.onRoundsChange}
          />
        </div>

        <button onClick={this.onCalculateClick}>Calculate</button>

        <div>
          Your workout will last{" "}
          {this.state.totalTime ? this.state.totalTime : `__ min __ sec`}
        </div>

        <button onClick={this.onStartClick}>Start</button>
      </div>
    );
  }
}
