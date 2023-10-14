import { Component, ReactNode } from "react";
import "./index.css";
import numeral from "numeral";

const currencySelectStyle = `w-[90px] py-1 px-2 rounded-lg`;

interface StateI {
  result: number | string;
  input: number;
  currency1?: string | null;
  currency2?: string | null;
  logo: string | null;
  nameCurrency: string | null;
}

interface ExchangeRates {
  [key: string]: {
    [key: string]: number;
  };
}

export default class CurrencyConverte extends Component<object, StateI> {
  private exchangeRates: ExchangeRates = {
    USD: {
      CNY: 7.3,
      EUR: 0.95,
      IDR: 15703.0,
    },
    CNY: {
      USD: 0.14,
      EUR: 0.13,
      IDR: 2149.83,
    },
    EUR: {
      CNY: 7.68,
      USD: 1.05,
      IDR: 16507.78,
    },
    IDR: {
      CNY: 0.00047,
      EUR: 0.000060653384,
      USD: 0.000064,
    },
  };

  constructor(props: object) {
    super(props);
    this.state = {
      result: 0 || "",
      input: 0,
      currency1: "" || null,
      currency2: "" || null,
      logo: "" || null,
      nameCurrency: "" || null,
    };
  }

  componentDidUpdate(prevState: Readonly<StateI>): void {
    if (prevState.input !== this.state.input) {
      this.state.input;
    }
  }

  calculateCurrency(currency1: string, currency2: string, input: number) {
    // if (currency1 === "USD") {
    //   if (currency2 === "CNY") {
    //     const multiplication = input * 7.3;
    //     const result = Number(multiplication);

    //     this.setState({ result, logo: "CNY" });
    //   }
    //   if (currency2 === "EUR") {
    //     const multiplication = input * 0.95;
    //     const result = Number(multiplication);

    //     this.setState({ result, logo: "EUR" });
    //   }
    //   if (currency2 === "IDR") {
    //     const multiplication = input * 15703.0;
    //     const result = Number(multiplication);

    //     this.setState({ result, logo: "IDR" });
    //   }
    // }

    if (!isNaN(input) && isFinite(input) && input !== 0) {
      if (
        currency1 in this.exchangeRates &&
        currency2 in this.exchangeRates[currency1]
      ) {
        const rate = this.exchangeRates[currency1][currency2];
        const multiplication = input * rate;
        let formatCurrency;
        if (currency2 === "USD") {
          formatCurrency = numeral(multiplication).format("0,0.00");
          this.setState({ logo: "$" });
        }
        if (currency2 === "IDR") {
          formatCurrency = numeral(multiplication).format("0,0");
          this.setState({ logo: "Rp." });
        }
        if (currency2 === "EUR") {
          formatCurrency = numeral(multiplication).format("0,0.00");
          this.setState({ logo: "€" });
        }
        if (currency2 === "CNY") {
          formatCurrency = numeral(multiplication).format("0,0");
          this.setState({ logo: "¥" });
        }

        if (formatCurrency !== undefined) {
          const result = formatCurrency;

          this.setState({ result, nameCurrency: currency2 });
        }

        //   const formatCurrency = numeral(multiplication).format()
      } else {
        if (input !== 0) {
          window.alert("select currency");
        }
      }
    }
  }

  handleReset() {
    this.setState({ result: 0 });
  }

  getInputCurrency(e: number) {
    this.setState({ input: e });
  }

  selectCurrency1(e: string) {
    this.setState({ currency1: e });
  }
  selectCurrency2(e: string) {
    this.setState({ currency2: e });
  }

  sendResult() {
    const { currency1, currency2, input } = this.state;
    if (currency1 === currency2 && currency1 !== null && currency2 !== null) {
      window.alert(`cannot send equel currency ${currency1} and ${currency2}`);
    }

    if (input === 0) {
      window.alert(`please entered input number`);
    }
    this.calculateCurrency(String(currency1), String(currency2), Number(input));
  }

  render(): ReactNode {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { currency1 } = this.state;

    return (
      <div className="flex flex-col  w-[600px] mx-auto mt-24 border bg-gradient rounded-lg py-4 px-2 shadow-slate-950 shadow-xl">
        <div className="flex w-full flex-col justify-center items-center gap-5 text-black">
          <span>
            <input
              type="number"
              className="outline-none px-2 py-1 rounded-lg"
              onChange={(e) => this.getInputCurrency(Number(e.target.value))}
            />
          </span>
          <div className="flex gap-3">
            <span>
              <select
                name="currency1"
                id="currency1"
                className={`${currencySelectStyle}`}
                onChange={(e) => this.selectCurrency1(String(e.target.value))}
                defaultValue={"select"}
              >
                <option value="select" disabled>
                  select
                </option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="IDR">IDR</option>
                <option value="CNY">CNY</option>
              </select>
            </span>
            <p className="text-white text-sm">FOR</p>
            <span>
              <select
                name="currency2"
                id="currency2"
                className={`${currencySelectStyle}`}
                onChange={(e) => this.selectCurrency2(String(e.target.value))}
                disabled={currency1 === "" || currency1 === "select"}
                defaultValue={"select"}
              >
                <option value="select" disabled>
                  select
                </option>
                <option value="USD" disabled={currency1 === "USD"}>
                  USD
                </option>
                <option value="EUR" disabled={currency1 === "EUR"}>
                  EUR
                </option>
                <option value="IDR" disabled={currency1 === "IDR"}>
                  IDR
                </option>
                <option value="CNY" disabled={currency1 === "CNY"}>
                  CNY
                </option>
              </select>
            </span>

            <button
              onClick={() => this.sendResult()}
              className="uppercase bg-indigo-600 py-1 px-4 text-white rounded-md"
            >
              enter
            </button>
          </div>
        </div>
        <div className="mt-4  w-full">
          <h1 className="text-center uppercase mt-3">result :</h1>
          <span className="flex  justify-center w-full mt-6">
            <h1
              className={`bg-white text-slate-950 w-[50%] py-2 px-2  rounded-l-lg cursor-text`}
            >
              {this.state.logo} {this.state.result} {this.state.nameCurrency}
            </h1>
            <button
              onClick={() => this.handleReset()}
              className="bg-indigo-600 rounded-r-lg text-slate-100 p-2 "
            >
              reset
            </button>
          </span>
        </div>
      </div>
    );
  }
}
