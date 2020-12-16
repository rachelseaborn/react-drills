import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterStr: '',
      cities: ['Rome', 'Barcelona', 'Mazatlan']
    };
  }

  handleChange(filter) {
    this.setState({ filterStr: filter });
  }

  render() {
    let citiesDisplay = this.state.cities

      .filter((element, index) => {
        return element.includes(this.state.filterStr);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App" >
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {citiesDisplay}
      </div>
    );
  }
}

export default App;
