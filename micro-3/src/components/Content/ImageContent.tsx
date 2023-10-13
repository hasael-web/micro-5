import { Component, ReactNode } from "react";
import gif from "../data/gifAnime";
interface PropsI {
  celsius: number;
  fahrenheit: number;
  reamur: number;
  kelvin: number;
}
interface ImageI {
  hot?: string;
  veryHot?: string;
  relax?: string;
  relaxCold?: string;
  freez?: string;
}
interface SuhuS {
  celsius: number;
  fahrenheit: number;
  reamur: number;
  kelvin: number;
}

export default class ImageContent extends Component<PropsI, ImageI & SuhuS> {
  constructor(props: PropsI) {
    super(props);
    this.state = {
      hot: "",
      freez: "",
      relax: "",
      veryHot: "",
      relaxCold: "",
      celsius: 0,
      fahrenheit: 0,
      reamur: 0,
      kelvin: 0,
    };
  }

  componentDidMount(): void {
    this.setImage();
  }

  componentDidUpdate(prevProps: Readonly<PropsI>): void {
    if (prevProps.celsius !== this.props.celsius) {
      this.setState({ celsius: this.props.celsius });
    }
    if (prevProps.fahrenheit !== this.props.fahrenheit) {
      this.setState({ fahrenheit: this.props.fahrenheit });
    }
    if (prevProps.reamur !== this.props.reamur) {
      this.setState({ reamur: this.props.reamur });
    }
    if (prevProps.kelvin !== this.props.kelvin) {
      this.setState({ kelvin: this.props.kelvin });
    }
  }

  setImage() {
    gif.map((item) => {
      if (item.hot) {
        this.setState({ hot: item.hot });
      }
      if (item.veryHot) {
        this.setState({ veryHot: item.veryHot });
      }
      if (item.relax) {
        this.setState({ relax: item.relax });
      }
      if (item.relaxCold) {
        this.setState({ relaxCold: item.relaxCold });
      }
      if (item.freez) {
        this.setState({ freez: item.freez });
      }
    });
  }

  render(): ReactNode {
    const {
      hot,
      veryHot,
      relax,
      relaxCold,
      freez,
      celsius,
      fahrenheit,
      kelvin,
      reamur,
    } = this.state;

    // console.log(hot);
    // console.log(veryHot);
    // console.log(relax);
    // console.log(relaxCold);
    // console.log(freez);

    // console.log(celsius);

    let imageHtml: string | undefined = freez;

    // celcius kondisi
    if (celsius !== 0) {
      if (celsius > 28) {
        imageHtml = veryHot;
      }
      if (celsius <= 28) {
        imageHtml = hot;
      }
      if (celsius <= 25) {
        imageHtml = relax;
      }
      if (celsius < 20) {
        imageHtml = relaxCold;
      }
      if (celsius < 16) {
        imageHtml = freez;
      }
    }

    // fahrenheit kondisi
    if (fahrenheit !== 0) {
      if (fahrenheit > 89) {
        imageHtml = veryHot;
      }

      if (fahrenheit <= 89) {
        imageHtml = hot;
      }
      if (fahrenheit <= 85) {
        imageHtml = relax;
      }
      if (fahrenheit < 77) {
        imageHtml = relaxCold;
      }
      if (fahrenheit < 60) {
        imageHtml = freez;
      }
    }

    // reamur kondisi
    if (reamur !== 0) {
      if (reamur > 28) {
        imageHtml = veryHot;
      }
      if (reamur <= 28) {
        imageHtml = hot;
      }
      if (reamur <= 25) {
        imageHtml = relax;
      }
      if (reamur < 20) {
        imageHtml = relaxCold;
      }
      if (reamur < 16) {
        imageHtml = freez;
      }
    }
    // console.log("reamur", reamur);

    // // kelvin kondisi
    if (kelvin !== 0) {
      if (kelvin > 301) {
        imageHtml = veryHot;
      }
      if (kelvin <= 301) {
        imageHtml = hot;
      }
      if (kelvin <= 298) {
        imageHtml = relax;
      }
      if (kelvin < 293) {
        imageHtml = relaxCold;
      }
      if (kelvin < 289) {
        imageHtml = freez;
      }
    }

    // console.log(imageHtml);

    return (
      <div className="w-[460px] h-[300px]">
        <img
          src={imageHtml}
          alt="test"
          className="object-contain w-full h-full"
        />
      </div>
    );
  }
}
