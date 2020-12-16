import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      travel: ['Rome', 'Barcelona', 'Mazatlan']
    };
  }

  render() {
    let travelCities = this.state.travel.map((e, index) => { return <h2 key={index}>{e}</h2> });

    return <div className="App">{travelCities}</div>;
  }
}
export default App;
