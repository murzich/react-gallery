import React, { Component } from 'react';
import logo from './tape.svg';
import grid from './grid.svg';
import './App.css';
import PictureList from './PictureList';

const animationTimeout = 200;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: 'portrait',
      show: true,
    };
  }

  changeOrientation = () => {
    this.setState({show: false});
    setTimeout(() => {
      this.setState((prevState) => ({
        show: true,
        orientation: (prevState.orientation === 'portrait')
          ? 'landscape'
          : 'portrait',
      }))}, animationTimeout
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Tapes list</h1>
          <button className="App-button" type="button" onClick={this.changeOrientation}>
            <img src={grid} alt="Change orientation"/>
          </button>
        </header>
        <PictureList orientation={this.state.orientation}
                     show={this.state.show}
                     timeout={animationTimeout}
        />
      </div>
    );
  }
}

export default App;
