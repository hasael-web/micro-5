import { Component, ReactNode } from "react";
import "./index.css";
// icon
import { FaArrowDown } from "react-icons/fa6";

const sameStyle: string =
  "outline-none text-black border-none py-2 px-1 rounded-lg";
const resultStyle: string = "bg-white w-10/12 rounded-lg py-2 px-2 text-black";
const supStyle: string = "font-bold";

interface TemperatureI {
  tName: string | null;
  t2Name: string | null;
  suhu: number;
  result: number;
}

interface PropsI {
  valueSuhu: (
    celsius: number,
    fahrenheit: number,
    kelvin: number,
    reamur: number
  ) => void;
}

export default class Temperature extends Component<PropsI, TemperatureI> {
  constructor(props: PropsI) {
    super(props);
    this.state = {
      tName: "",
      t2Name: "",
      suhu: 0,
      result: 0,
    };
  }

  // 1.dapat kan value untuk membuat validasi si result
  // 2.buat calculator nya bekerja
  // 3.memiliki state private dan state props

  handleSelectT(e: string) {
    this.setState({ tName: e });
  }

  handleSelectT2(e: string) {
    this.setState({ t2Name: e });
  }

  calSuhu(e: number): void {
    const { tName, t2Name } = this.state;
    // celsius
    if (tName === "celsius" && t2Name === "fahrenheit") {
      const multiplication: number = (e * 9) / 5;
      const addition: number = multiplication + 32;
      const result = Number(addition.toFixed(3));

      this.setState({ result });
    }
    if (tName === "celsius" && t2Name === "reamur") {
      const reamur: number = e * 0.8;
      const result = Number(reamur.toFixed(5));

      this.setState({ result });
    }
    if (tName === "celsius" && t2Name === "kelvin") {
      const kelvin: number = e + 273.15;
      const result = Number(kelvin.toFixed(3));

      this.setState({ result });
    }
    // fahrenheit
    if (tName === "fahrenheit" && t2Name === "celsius") {
      const celsius: number = ((e - 32) * 5) / 9;
      const result = Number(celsius.toFixed(3));

      this.setState({ result });
    }
    if (tName === "fahrenheit" && t2Name === "reamur") {
      const celsius: number = ((e - 32) * 4) / 9;
      const result = Number(celsius.toFixed(3));
      this.setState({ result });
    }
    if (tName === "fahrenheit" && t2Name === "kelvin") {
      const kelvin: number = ((e - 32) * 5) / 9 + 273.15;
      const result = Number(kelvin.toFixed(3));
      this.setState({ result });
    }

    // reamur
    if (tName === "reamur" && t2Name === "celsius") {
      const celcius: number = (e * 5) / 4;
      const result = Number(celcius.toFixed(3));
      this.setState({ result });
    }
    if (tName === "reamur" && t2Name === "fahrenheit") {
      const fahrenheit: number = e * 2.25 + 32;
      const result = Number(fahrenheit.toFixed(3));
      this.setState({ result });
    }
    if (tName === "reamur" && t2Name === "kelvin") {
      const kelvin: number = e * 1.25 + 273.15;
      const result = Number(kelvin.toFixed(3));
      this.setState({ result });
    }

    // kelvin
    if (tName === "kelvin" && t2Name === "celsius") {
      const celcius: number = e - 273.15;
      const result = Number(celcius.toFixed(3));
      this.setState({ result });
    }
    if (tName === "kelvin" && t2Name === "fahrenheit") {
      const fahrenheit: number = ((e - 273.15) * 9) / 5 + 32;
      const result = Number(fahrenheit.toFixed(3));
      this.setState({ result });
    }
    if (tName === "kelvin" && t2Name === "reamur") {
      const reamur: number = ((e - 273.15) * 4) / 5;
      const result = Number(reamur.toFixed(3));
      this.setState({ result });
    }
    let celsius: number = 0;
    let fahrenheit: number = 0;
    let reamur: number = 0;
    let kelvin: number = 0;

    if (tName === "celsius") {
      celsius = e;
    }
    if (tName === "fahrenheit") {
      fahrenheit = e;
    }
    if (tName === "reamur") {
      reamur = e;
    }
    if (tName === "kelvin") {
      kelvin = e;
    }
    this.props.valueSuhu(celsius, fahrenheit, kelvin, reamur);
  }

  render(): ReactNode {
    const { tName, t2Name, result } = this.state;
    let check: boolean;
    if (tName !== "" && tName !== "select") {
      check = true;
    } else {
      check = false;
    }
    // suhu caracter
    let suhuCaracter: string = "";
    if (t2Name === "celsius") {
      suhuCaracter = "C";
    }
    if (t2Name === "fahrenheit") {
      suhuCaracter = "F";
    }
    if (t2Name === "reamur") {
      suhuCaracter = "Re";
    }
    if (t2Name === "kelvin") {
      suhuCaracter = "K";
    }
    // cek peruban result
    let resultSuhu: number = 0;
    if (result && t2Name) {
      resultSuhu = result;
    }

    return (
      <div className="flex gap-7 ">
        <div className="text-black flex flex-col gap-6 w-full">
          {/* pilih suhu utama */}
          <select
            id="temperatur"
            name="temperatur"
            defaultValue="select"
            className={`${sameStyle} cursor-pointer`}
            onChange={(e) => this.handleSelectT(e.target.value)}
          >
            <option value="select" disabled>
              select
            </option>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="reamur">Reamur</option>
            <option value="kelvin">Kelvin</option>
          </select>
          {/* suhu yang mau di sama kan */}
          <span className="flex w-full justify-center text-white text-center uppercase">
            <FaArrowDown />
          </span>
          <select
            id="temperatur"
            name="temperatur"
            defaultValue="select"
            className={`${sameStyle} ${
              check === true ? "bg-white" : "bg-slate-200/90"
            } cursor-pointer`}
            disabled={!check}
            onChange={(e) => this.handleSelectT2(e.target.value)}
          >
            <option value="select" disabled>
              select
            </option>
            <option value="celsius" disabled={tName === "celsius"}>
              Celsius
            </option>
            <option value="fahrenheit" disabled={tName === "fahrenheit"}>
              Fahrenheit
            </option>
            <option value="reamur" disabled={tName === "reamur"}>
              Reamur
            </option>
            <option value="kelvin" disabled={tName === "kelvin"}>
              Kelvin
            </option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-5">
          <span>
            <input
              type="number"
              className={`${sameStyle} w-10/12`}
              onChange={(e) => this.calSuhu(Number(e.target.value))}
            />
          </span>
          <span className="flex w-full justify-center text-white text-center uppercase">
            <FaArrowDown />
          </span>
          <span className={`${resultStyle} cursor-text`}>
            {resultSuhu}
            <sup className={`${supStyle} `}>&#9675;</sup>
            {suhuCaracter}
          </span>
        </div>
      </div>
    );
  }
}
