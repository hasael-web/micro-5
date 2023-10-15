import numeral from "numeral";
import { Component, ReactNode } from "react";

interface PropsI {
  gajiPokok: number | null;
  kewajiban: number | null;
  total: string | number;
  tunjangan: number | null;
}
interface StateI {
  gajiPokok: number | null;
  kewajiban: number | null;
  total: string | number;
  tunjangan: number | null;
}

export default class Result extends Component<PropsI, StateI> {
  constructor(props: PropsI) {
    super(props);
    this.state = {
      gajiPokok: 0,
      kewajiban: 0,
      total: 0,
      tunjangan: 0,
    };
  }

  render(): ReactNode {
    const { gajiPokok, kewajiban, total, tunjangan } = this.props;

    const resultGajiPokok = numeral(gajiPokok).format("0,0");
    const resultKewajiban = numeral(kewajiban).format("0,0");
    const resultTunjangan = numeral(tunjangan).format("0,0");

    return (
      <div className="bg-slate-200 text-black h-[440px] rounded-lg shadow-lg shadow-blue-600/50 px-4 py-3 ">
        <h1 className="uppercase font-extrabold tracking-wider">Result : </h1>
        <div className="flex flex-col gap-7 mt-5 tracking-widest font-serif font-semibold">
          <span className="capitalize">
            <p>ganji pokok</p>
            <span>Rp. {resultGajiPokok}</span>
          </span>
          <span className="capitalize">
            <p>tunjangan</p>
            <span>Rp. {resultTunjangan}</span>
          </span>
          <span className="capitalize">
            <p>kebutuhan pokok</p>
            <span>Rp. {resultKewajiban}</span>
          </span>
          <span className="capitalize border-t-2 border-black pt-5 ">
            <div className="flex justify-between w-full px-3">
              <p>total</p>
              <span>Rp. {total}</span>
            </div>
          </span>
        </div>
      </div>
    );
  }
}
