import React from 'react';
import logo from './logo.svg';
import NewTask from "./NewTask";
import List from "./List";

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [];
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

}

export default App;
