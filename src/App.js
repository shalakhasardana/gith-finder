import React, { Component } from 'react';
import './App.css';

class App extends Component {
  loading = true;

  render() {
    return <div>{this.loading ? <h1>Loading....</h1> : <h1>Hello</h1>}</div>;
  }
}

export default App;
