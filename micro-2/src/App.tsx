import { Component } from "react";
import "./App.css";
import { TimePage } from "./components";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="fixed bg-slate-900 w-full h-full top-0 right-0 left-0 bottom-0" />
        <div className="h-full relative">
          <nav className="navbar relative z-10 bg-slate-400 ">
            <h1>list navbar</h1>
          </nav>
          <h1 className="text-white text-[30px] uppercase text-center mt-5">
            count down time
          </h1>
          <div className="app relative z-10 text-white flex items-center mt-6">
            <TimePage />
          </div>
        </div>
      </div>
    );
  }
}
