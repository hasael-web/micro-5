import { Component, ReactNode } from "react";
import video from "../../assets/kobo.mp4";

interface PropsInputI {
  onChange: (e: string) => void;
  enteredCountDown: boolean;
  resetCountDown: boolean;
  enteredButton: (date: string) => void;
  resetButton: () => void;
  condition: boolean;
}

interface StateI {
  selectDate: string;
}

export default class InputTimeAndDate extends Component<PropsInputI, StateI> {
  constructor(props: PropsInputI) {
    super(props);
    this.state = {
      selectDate: "",
    };
  }

  handleInput(e: string) {
    this.setState({ selectDate: e });
    this.props.onChange(e);
  }

  handleButtonClick = () => {
    const { selectDate } = this.state;
    this.props.enteredButton(selectDate);
  };

  resetButtonClick = () => {
    this.props.resetButton();
  };

  onEndVideo() {
    window.location.reload();
  }

  render(): ReactNode {
    return (
      <>
        <section className="flex">
          <input
            type="datetime-local"
            className="outline-none bg-slate-500 p-2 rounded-l-lg"
            value={this.state.selectDate}
            onChange={(e) => this.handleInput(e.target.value)}
          />
          {this.props.resetCountDown && this.props.condition === false ? (
            <button
              onClick={this.resetButtonClick}
              className="capitalize bg-indigo-300 rounded-r-lg p-2"
            >
              Reset
            </button>
          ) : null}
          {this.props.enteredCountDown || this.props.condition === true ? (
            <button
              onClick={this.handleButtonClick}
              className="capitalize bg-indigo-300 rounded-r-lg p-2"
            >
              Enter
            </button>
          ) : null}
        </section>
        <section className="flex gap-7">
          {(this.props.resetCountDown && this.props.condition === true) ||
          (this.props.enteredCountDown && this.props.condition === false) ? (
            <video width="120" height="140" autoPlay onEnded={this.onEndVideo}>
              <source src={video} />
            </video>
          ) : null}
        </section>
      </>
    );
  }
}
