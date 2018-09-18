import React, { Component } from 'react';
import Game from './containers/GameContainer'
import './App.css';

class App extends Component {
  render() {
    return (
 
      <div className="App">
        <div className="dirt"></div>
        <header className="App-header">
          <h1 className="Superiori-Tea">Superiori-Tea</h1>
        </header>
        <Game/>

      </div>
    );
  }
}


export default App;
