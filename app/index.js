import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        This is a refrence for the first <h1>React App</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
