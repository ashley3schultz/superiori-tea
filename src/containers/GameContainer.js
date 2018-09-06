import React, { Component } from 'react';
import TreeContainer from './TreeContainer'

class Game extends Component {

    state = {
        level: 1,
        basket: [[], [], [], [], []],
        time: 15
    }

  render() {
    return (
      <div className="Game">
        <h3>Level {this.state.level}</h3>
        <p>Basket: {this.state.basket.length}</p>
        <p>Time: {this.state.time}</p>
        <TreeContainer/>
      </div>
    );
  }
}

export default Game