import React, { Component } from 'react';
import './App.css';

class App extends Component {
  loading = false;
  showName = false;
  name = 'shalakha';

  render() {
    return (
      <div>
        {this.loading ? (
          <h1>Loading....</h1>
        ) : (
          <h1>Hello {this.showName ? this.name : null}</h1>
        )}
      </div>
    );
  }
}

export default App;
