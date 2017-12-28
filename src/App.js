import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Todo />
      </div>
    );
  }
}

export default App;
