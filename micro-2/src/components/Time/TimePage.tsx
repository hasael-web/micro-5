import { Component, ReactNode } from "react";
import InputTimeAndDate from "./InputTimeAndDate";
import ResultTime from "./ResultTime";

// type TimeType = {
//   year: number;
//   mount: number;
//   day: number;
//   hour: number;
//   min: number;
//   sec: number;
// };

interface StateI {
  time?: string;
  checkCondition: boolean;
  result?: string | number;
}

export default class TimePage extends Component<object, StateI> {
  constructor(props: object) {
    super(props);
    this.state = {
      result: 0,
      checkCondition: false,
    };
  }

  handleClick = () => {
    const data = this.state.time;

    this.setState({ result: data });
  };

  resetClick = () => {
    this.setState({ result: 0, time: "" });
  };

  checkConditon = (b: boolean) => {
    this.setState({ checkCondition: b });
  };

  render(): ReactNode {
    let enteretCountDown: boolean;
    let resetCountDown: boolean;

    const result =
      this.state.result !== undefined
        ? new Date(this.state.result).getTime()
        : 0;
    const check: number =
      typeof result === "number" ? new Date(result).getTime() : 0;

    if (check > 0) {
      resetCountDown = true;
      enteretCountDown = false;
    } else {
      resetCountDown = false;
      enteretCountDown = true;
    }

    return (
      <div className="w-[600px] rounded-lg p-16 mb-16 flex flex-col justify-center items-center gap-10 text-white border border-white">
        <h3 className="capitalize font-mono text-[26px]">
          enter the target date and time
        </h3>
        <InputTimeAndDate
          enteredButton={this.handleClick}
          resetButton={this.resetClick}
          enteredCountDown={enteretCountDown}
          resetCountDown={resetCountDown}
          onChange={(e) => this.setState({ time: e })}
          condition={this.state.checkCondition}
        />
        <ResultTime
          dataTime={this.state.result}
          checkConditon={(b: boolean) => this.checkConditon(b)}
          resetCountDown={resetCountDown}
        />
      </div>
    );
  }
}
