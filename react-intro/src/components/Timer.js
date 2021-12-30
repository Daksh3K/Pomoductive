import React from "react";
import "./timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workMin: 25,
      breakMin: 5,
      minutes: 25,
      seconds: 0,
      showSettings: false,
    };
  }

  showSettings = () => {
    this.setState((prevState) => {
      return { showSettings: !prevState.showSettings };
    });
  };

  handleWorkChange = (e) => {
    this.setState({ workMin: e.target.value });
  };

  handleBreakChange = (e) => {
    this.setState({ breakMin: e.target.value });
  };

  render() {
    const timerMinutes =
      this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes;
    const timerSeconds =
      this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds;

    return (
      <div>
        <div className="timer-text">
          {timerMinutes}:{timerSeconds}
        </div>
        <button className="timer-settings-button" onClick={this.showSettings}>
          Settings
        </button>

        <div
          className="timer-settings-container"
          style={{ display: this.state.showSettings ? "block" : "none" }}
        >
          <button
            onClick={() => {
              this.setState((prevState) => {
                return { showSettings: !prevState.showSettings };
              });
            }}
            className="timer-settings-close-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <label for="work-min">Work Minutes</label>
          <input
            className="timer-settings-input-work"
            id="work-min"
            onChange={this.handleWorkChange}
          />
          <label for="break-min">Break Minutes</label>
          <input
            className="timer-settings-input-break"
            id="break-min"
            onChange={this.handleBreakChange}
          />
        </div>
      </div>
    );
  }
}

export default Timer;
