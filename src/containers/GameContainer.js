import React, { Component } from 'react';
import { connect } from 'react-redux'
import Trees from '../components/Trees'

class Game extends Component {

    state = {
        level: 0,
        basket: [],
        total: [],
        time: 15
    }

    startTimer = () => {
      this.setState({time: this.state.time - 1})
    }

  render() {
    return (
      <div className="Game">
        <h3>Level {this.state.level + 1}</h3>
        <p>Basket: {this.state.basket.length}</p>
        <p>Time: {this.state.time}</p>
        <button onClick={this.startTimer}>Start</button>
        <Trees/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    level: state.level
  }
}


export default connect(mapStateToProps)(Game)