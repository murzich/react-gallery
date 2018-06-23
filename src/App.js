import React, { Component } from 'react';
import logo from './tape.svg';
import grid from './grid.svg';
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Tapes list</h1>
          <button className="App-button" type="button" onClick={this.changeOrientation} aria-controls="button">
            <img src={grid} alt="Change orientation"/>
          </button>
        </header>
        <PictureList orientation={this.state.orientation}/>
      </div>
    );
  }
}

export default App;
