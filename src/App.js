import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Buttons from "./Buttons/Buttons.jsx";
import Img from "./Img.jsx";

const weather = {
  spring: "https://b1.m24.ru/c/885511.860x560.jpg",
  summer: "https://images.aif.ru/011/707/29d7043dced25e5f45e701436bf1e984.jpg",
  autumn: "http://kaifolog.ru/uploads/posts/2016-08/thumbs/1472223447_009.jpg",
  winter:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tatra_Gebirge%2C_Wald_bei_Schnee.jpg/1200px-Tatra_Gebirge%2C_Wald_bei_Schnee.jpg"
};

class App extends Component {
  state = {
    seas: "winter"
  };

  clickButton(e) {
    e.preventDefault();
    this.setState({ seas: e.target.value });
  }

  render() {
    const { seas } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Времена года))</h1>
        </header>
        <Buttons buttons={this.clickButton.bind(this)} />
        <Img src={weather[seas]} />
      </div>
    );
  }
}

export default App;
