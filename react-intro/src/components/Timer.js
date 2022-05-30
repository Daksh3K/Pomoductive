import React from "react";
import "./timer.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

/*
 * this variable is used to track how much the
 * user has worked in seconds
 */
var timeWorkedInSeconds = 0;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.workMin = React.createRef();
    this.breakMin = React.createRef();
    this.interval = React.createRef();

    this.state = {
      minutes: 25,
      seconds: 0,
      isWork: true,
      isStarted: false,
      showSettings: false,
    };
  }

  showSettings = () => {
    this.setState((prevState) => {
      return { showSettings: !prevState.showSettings };
    });
  };

  handleWorkChange = (e) => {
    this.workMin.current = parseInt(e.target.value);
    this.setState((prevState) => {
      return {
        minutes: !prevState.isWork
          ? this.breakMin.current
          : this.workMin.current,
        seconds: 0,
        isStarted: false,
      };
    });
    clearInterval(this.interval.current);
  };

  handleBreakChange = (e) => {
    this.breakMin.current = parseInt(e.target.value);
    this.setState((prevState) => {
      return {
        minutes: !prevState.isWork
          ? this.breakMin.current
          : this.workMin.current,
        seconds: 0,
        isStarted: false,
      };
    });
    clearInterval(this.interval.current);
  };

  timerStart = () => {
    this.setState({ isStarted: true });
    this.interval.current = setInterval(() => {
      if (this.state.seconds === 0) {
        if (this.state.minutes !== 0) {
          this.setState((prevState) => {
            return { minutes: prevState.minutes - 1, seconds: 59 };
          });
        } else {
          this.setState((prevState) => {
            return {
              isWork: !prevState.isWork,
              minutes: prevState.isWork
                ? this.breakMin.current
                : this.workMin.current,
            };
          });
          // handle timer change
        }
      } else {
        this.setState((prevState) => {
          return { seconds: prevState.seconds - 1 };
        });
      }
      // increments timeWorkedInSeconds by a second
      if (this.state.isWork) {
        timeWorkedInSeconds += 1;
        console.log(timeWorkedInSeconds)
      }
    }, 1000);

  };

  timerStop = () => {
    clearInterval(this.interval.current);
    this.setState({ isStarted: false });
  };

  componentDidMount() {
    this.workMin.current = 25;
    this.breakMin.current = 5;
    // this.setState({minutes: this.workMin.current})
  }

  render() {
    const timerMinutes =
      this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes;
    const timerSeconds =
      this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds;

    return (
      <div className="timer-container">
        <div className="timer-progressbar-container">
          <CircularProgressbar
            value={this.state.minutes * 60 + this.state.seconds}
            minValue={0}
            maxValue={
              this.state.isWork
                ? this.workMin.current * 60
                : this.breakMin.current * 60
            }
            background
            backgroundPadding={3}
            strokeWidth={4}
            styles={buildStyles({
              pathColor: "#c84b31",
              trailColor: "transparent",
              backgroundColor: "#292929"
            })}
          />
        </div>
        <div className="timer-text">
          {timerMinutes}:{timerSeconds}
        </div>
        <div className="timer-buttons">
          <button className="timer-start-button"
            onClick={this.state.isStarted ? this.timerStop : this.timerStart}
          >
            {this.state.isStarted ? "Stop" : "Start"}
          </button>
          <button className="timer-settings-button" onClick={this.showSettings}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 timer-settings-button-svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
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
            defaultValue="25"
          />
          <label for="break-min">Break Minutes</label>
          <input
            className="timer-settings-input-break"
            id="break-min"
            onChange={this.handleBreakChange}
            defaultValue="5"
          />
        </div>
      </div>
    );
  }
}

export default Timer;
