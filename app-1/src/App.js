import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      snackInput: ''
    }
  }

  handleInput(value) {
    this.setState({
      snackInput: value
      //this.setState({ snackInput: value });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App">

          <p>
            What is your favorite snack while coding at 2am?
        </p>
          <input onChange={e => this.handleInput(e.target.value)} type="text" />
          <p>{this.state.snackInput}</p>
        </header>
      </div >
    );
  }
}
export default App;
