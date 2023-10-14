import { Component } from "react";
import "./App.css";
import { CurrencyConverte } from "./components";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="fixed bg-slate-900 w-full h-full top-0 right-0 left-0 bottom-0" />
        <div className="h-full relative">
          <nav className="navbar  z-10 bg-slate-400 ">
            <h1>list navbar</h1>
          </nav>
          <h1 className="text-white text-[40px] uppercase text-center mt-5">
            🅲🆄🆁🆁🅴🅽🅲🆈 🅲🅾🅽🆅🅴🆁🆃🅴🆁
          </h1>

          <div className="app z-10 text-white px-4 mt-6">
            <CurrencyConverte />
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
