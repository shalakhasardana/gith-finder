import React, { Component } from 'react';
import './App.css';

class App extends Component {
  name = () => 'Bar';

  render() {
    return (
      <div>
        <h1>Hello {this.name().toLowerCase()}</h1>
      </div>
    );
  }
}

export default App;
