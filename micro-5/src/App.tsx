import { Component } from "react";
import "./App.css";
// components
import { SalaryCalculator } from "./components";

const title = `text-center text-white text-[30px] font-bold mt-5`;

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="fixed bg-slate-900 w-full h-full top-0 right-0 left-0 bottom-0" />
        <div className="h-full relative ">
          <nav className="navbar  z-10 bg-slate-400 ">
            <h1>list navbar</h1>
          </nav>
          <h1 className={`${title}`}>🅢🅐🅛🅐🅡🅨 🅒🅐🅛🅒🅤🅛🅐🅣🅞🅡</h1>
          <div className="flex w-full mt-10 ">
            <SalaryCalculator />
          </div>
        </div>
        <img
          className="w-36 shadow-lg rounded-lg absolute bottom-3 left-4"
          src="https://media.tenor.com/kaRCm9ELxKgAAAAC/menhera-chan-chibi.gif"
          alt=""
        />
      </div>
    );
  }
}
