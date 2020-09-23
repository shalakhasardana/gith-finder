import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Shalakha';
    return (
      <div>
        <h1>Hello {name.toLowerCase()}</h1>
      </div>
    );
  }
}

export default App;
