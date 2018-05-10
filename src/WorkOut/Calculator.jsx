import React from "react";
import Input from "../Calculator/Input";
import styled from "styled-components";
import Timer from "./Timer";

const Button = styled.button`
  padding: 8px 15px;
  background-color: pink;
  margin-right: 10px;
`;

export default class extends React.Component {
  initialState = {
    settings: {
      exerciseTime: 0,
      relaxTime: 0,
      exercises: 0,
      rounds: 0,
      totalTime: 0
    },
    workflow: {
      time: 0,
      status: "not set",
      round: 1,
      exercise: 1
    }
  };

  state = Object.assign({}, this.initialState);

  /**
   * Calculating total workout time based on data filled in by the user
   * @returns {number} workout length in seconds
   */

  getTotalTime = () => {
    return (
      (this.state.settings.exerciseTime + this.state.settings.relaxTime) *
      this.state.settings.exercises * this.state.settings.rounds
    );
  };

  onCalculateClick = () => {
    this.setState(prevState => ({
      settings: {
        ...prevState.settings,
        totalTime: this.getTotalTime()
      },
      workflow: {
        ...prevState.workflow,
        status: "set"
      },
    }));
  };

  isStartBtnDisabled = () => {
    return this.state.workflow.status === "not set" || this.state.workflow.status === "started";
  }

  onStartClick = () => {
    this.setState(prevState => ({
      workflow: {
        ...prevState.workflow,
        status: "started"
      }
    }));

    clearInterval(this.workflow);
    this.workflow = setInterval(this.tick, 1000);
  };

  onPauseClick = () => {
    this.setState(prevState => ({
      workflow: {
        ...prevState.workflow,
        status: "paused"
      }
    }));

    clearInterval(this.workflow);
  };

  onResetClick = () => {
    this.setState(this.initialState);
  }

  onInputChange = (name, value) => {
    this.setState(prevState => ({
      settings: {
        ...prevState.settings,
        [name]: parseInt(value)
      }
    }))
  };

  isNextExercise = () => {
    return this.state.workflow.time % (this.state.settings.exerciseTime + this.state.settings.relaxTime) === 0;
  };

  isNextRound = () => {
    return this.state.workflow.exercise % this.state.settings.exercises === 0;
  };

  countExercises = () => {
    if (this.isNextExercise()) {
      if (this.isNextRound()) {
        this.setState(prevState => ({
          workflow: {
            ...prevState.workflow,
            round: this.state.workflow.round + 1,
            exercise: 1
          }
        }));
      } else {
        this.setState(prevState => ({
          workflow: {
            ...prevState.workflow,
            exercise: this.state.workflow.exercise + 1
          }
        }));
      }
    }
  };

  tick = () => {
    this.setState(
      prevState => ({
        workflow: { ...prevState.workflow, time: this.state.workflow.time + 1 }
      }),
      this.countExercises
    );
  };

  render() {
    return (
      <div>
        <div>
          <Input
            id="exercise-time"
            name="exerciseTime"
            label="Exercise time, sec:"
            value={this.state.settings.exerciseTime || ''}
            onInputChange={this.onInputChange}
            onEnterPress={this.onCalculateClick}
          />

          <Input
            id="relax-time"
            name="relaxTime"
            label="Relax time, sec:"
            value={this.state.settings.relaxTime || ''}
            onInputChange={this.onInputChange}
            onEnterPress={this.onCalculateClick}
          />

          <Input
            id="exercises"
            name="exercises"
            label="Amount of exercises:"
            value={this.state.settings.exercises || ''}
            onInputChange={this.onInputChange}
            onEnterPress={this.onCalculateClick}
          />

          <Input
            id="rounds"
            name="rounds"
            label="Amount of rounds:"
            value={this.state.settings.rounds || ''}
            onInputChange={this.onInputChange}
            onEnterPress={this.onCalculateClick}
          />
        </div>

        <Button onClick={this.onCalculateClick}>Calculate</Button>
        <Button onClick={this.onResetClick}>Reset</Button>


        <div>
          Your workout will last{" "}
          {this.state.settings.totalTime
            ? `${Math.floor(this.state.settings.totalTime / 60)} min ${this.state
                .settings.totalTime % 60} sec`
            : `__ min __ sec`}
        </div>

        <Button
          onClick={this.onStartClick}
          disabled={this.isStartBtnDisabled()}
        >
          Start
        </Button>
        <Button onClick={this.onPauseClick}>Pause</Button>

        <Timer
          round={this.state.workflow.round}
          exercise={this.state.workflow.exercise}
          minutes={Math.floor(this.state.workflow.time / 60)
            ? Math.floor(this.state.workflow.time / 60)
            : "00"}
          seconds={this.state.workflow.time % 60}
        />
      </div>
    );
  }
}
