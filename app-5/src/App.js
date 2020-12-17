
import React, { Component } from "react";
import Image from "./Image";

import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Image src={require('./angry_chihuahua.png')} />
      </div>
    );
  }
}

export default App;

