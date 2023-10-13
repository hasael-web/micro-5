import { Component, ReactNode } from "react";
import { ImageContent, Temperature } from "../Content";

interface StateI {
  celsius: number;
  fahrenheit: number;
  reamur: number;
  kelvin: number;
}

export default class extends Component<object, StateI> {
  constructor(props: object) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 0,
      kelvin: 0,
      reamur: 0,
    };
  }

  render(): ReactNode {
    return (
      <div className="flex mt-10 gap-4">
        <div className="flex-1">
          <Temperature
            valueSuhu={(
              celsius: number,
              fahrenheit: number,
              kelvin: number,
              reamur: number
            ) =>
              this.setState({
                celsius,
                fahrenheit,
                kelvin,
                reamur,
              })
            }
          />
        </div>
        <div className="flex-1">
          <ImageContent
            celsius={this.state.celsius}
            fahrenheit={this.state.fahrenheit}
            kelvin={this.state.kelvin}
            reamur={this.state.reamur}
          />
        </div>
      </div>
    );
  }
}
