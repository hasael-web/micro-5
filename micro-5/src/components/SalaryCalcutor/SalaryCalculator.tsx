import { Component, ReactNode } from "react";
import "./index.css";
import Result from "./Result";
import numeral from "numeral";

interface StateI {
  gajiPokok: number | null;
  tunjangan: number | null;
  kewajiban: number | null;
  total: number | string;
}

export default class SalaryCalculator extends Component<object, StateI> {
  constructor(props: object) {
    super(props);
    this.state = {
      gajiPokok: 0,
      tunjangan: 0,
      kewajiban: 0,
      total: 0,
    };
  }

  //   componentDidMount(): void {
  //     this.handleInput;
  //   }

  componentDidUpdate(prevProps: object, prevState: Readonly<StateI>): void {
    if (prevState.gajiPokok !== this.state.gajiPokok) {
      this.state.gajiPokok;
    }
    if (prevState.kewajiban !== this.state.kewajiban) {
      this.state.kewajiban;
    }
    if (prevState.tunjangan !== this.state.tunjangan) {
      this.state.tunjangan;
    }
    if (prevState.total !== this.state.total) {
      this.state.total;
    }
  }

  handlePokok(e: number) {
    this.setState({ gajiPokok: e });
  }
  handleTunjangan(e: number) {
    this.setState({ tunjangan: e });
  }
  handleKewajiban(e: number) {
    this.setState({ kewajiban: e });
  }
  totalSalary() {
    const { gajiPokok, kewajiban, tunjangan } = this.state;
    if (gajiPokok !== null && kewajiban !== null && tunjangan !== null) {
      const totalSalary: number | null = gajiPokok + tunjangan - kewajiban;

      const total = numeral(totalSalary).format("0,0");

      this.setState({ total: total });
    }
  }

  render(): ReactNode {
    const { gajiPokok, kewajiban, total, tunjangan } = this.state;
    return (
      <>
        <div className="text-white flex flex-col gap-5 px-5 flex-1">
          <span>
            <label htmlFor="pokok">Gaji Pokok</label>
            <input
              id="pokok"
              type="number"
              className="outline-none border-none shadow-sm rounded-lg px-2 py-1 text-black"
              onChange={(e) => this.handlePokok(Number(e.target.value))}
            />
          </span>
          <span>
            <label htmlFor="tunjangan">Tunjangan</label>
            <input
              onChange={(e) => this.handleTunjangan(Number(e.target.value))}
              id="tunjangan"
              type="number"
              className="outline-none border-none shadow-sm rounded-lg px-2 py-1 text-black"
            />
          </span>
          <span>
            <label htmlFor="kewajiban">Kewajiban Pokok</label>
            <input
              onChange={(e) => this.handleKewajiban(Number(e.target.value))}
              id="kewajiban"
              type="number"
              className="outline-none border-none shadow-sm rounded-lg px-2 py-1 text-black"
            />
          </span>
          <div className="">
            <button
              onClick={() => this.totalSalary()}
              className="uppercase text-left bg-indigo-700 px-8 py-2 rounded-xl hover:bg-indigo-600 active:scale-95 ease-out duration-200"
            >
              enter
            </button>
          </div>
        </div>
        <div className="flex-1 text-white px-5">
          <Result
            gajiPokok={gajiPokok}
            kewajiban={kewajiban}
            total={total}
            tunjangan={tunjangan}
          />
        </div>
      </>
    );
  }
}
