import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureList from './PictureList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: 'portrait',
    };
  }

  changeOrientation = () => {
    this.setState((prevState) => ({
      orientation: (prevState.orientation === 'portrait')
        ? 'landscape'
        : 'portrait',
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button type="button" onClick={this.changeOrientation}>Change orientation</button>
        </header>
        <PictureList orientation={this.state.orientation}/>
      </div>
    );
  }
}

export default App;
