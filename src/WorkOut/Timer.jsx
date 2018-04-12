import React from "react";
import Input from "../Calculator/Input";

export default class extends React.Component {
  intitialState = {
    excerciseTime: 0,
    relaxTime: 0,
    excercises: 0,
    rounds: 0,
    totalTime: "",
    count: {
      time: 0,
      status: "not set",
      round: 1,
      excercise: 1
    }
  };

  state = this.intitialState;

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

  onStartClick = () => {
    this.setState(prevState => ({
      count: {
        ...prevState.count,
        status: "started"
      }
    }));

    clearInterval(this.timer);

    this.timer = setInterval(this.tick, 1000);
  };

  onPauseClick = () => {
    this.setState(prevState => ({
      count: {
        ...prevState.count,
        status: "paused"
      }
    }));

    clearInterval(this.timer);
  };

  onInputChange = (name, value) => {
    let newState = {};
    newState[name] = parseInt(value);
    this.setState(newState);
  };

  tick = () => {
    this.setState(prevState => ({
      count: { ...prevState.count, time: this.state.count.time + 1 }
    }));
    console.log(this.state.count.time);
  };

  render() {
    return (
      <div>
        <div>
          <Input
            id="excercise-time"
            name="excerciseTime"
            label="Excercise time, sec:"
            onInputChange={this.onInputChange}
            onEnterPress={this.onCalculateClick}
          />

          <Input
            id="relax-time"
            name="relaxTime"
            label="Relax time, sec:"
            onInputChange={this.onInputChange}
            onEnterPress={this.onCalculateClick}
          />

          <Input
            id="excercises"
            name="excercises"
            label="Amount of excercises:"
            onInputChange={this.onInputChange}
            onEnterPress={this.onCalculateClick}
          />

          <Input
            id="rounds"
            name="rounds"
            label="Amount of rounds:"
            onInputChange={this.onInputChange}
            onEnterPress={this.onCalculateClick}
          />
        </div>

        <button onClick={this.onCalculateClick}>Calculate</button>

        <div>
          Your workout will last{" "}
          {this.state.totalTime ? this.state.totalTime : `__ min __ sec`}
        </div>

        <button
          onClick={this.onStartClick}
          disabled={this.state.count.status === "started"}
        >
          Start
        </button>
        <button onClick={this.onPauseClick}>Pause</button>

        {this.state.count.status !== "not set" ? (
          <div>
            <div>Round №{this.state.count.round}</div>
            <div>Excercise №{this.state.count.excercise}</div>
            <div>
              <span>
                {Math.floor(this.state.count.time / 60)
                  ? Math.floor(this.state.count.time / 60)
                  : "00"}
              </span>:<span>{this.state.count.time % 60}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
