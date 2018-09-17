import React, { Component } from 'react';
import Trees from '../components/Trees'
import { connect } from 'react-redux'
// import { playGame } from '../actions/game'

class Game extends Component {

  handleStart = () => {
    this.props.playGame()
  }

  render() {
    return (
      <div className="Game">
        <h3>Level {this.props.level + 1} {this.props.scores}</h3>
        <p>Basket: {this.props.basket} |
        Time: {this.props.time} |
        Score: {this.props.score}</p>
        {this.props.msg || <button onClick={this.handleStart}>Start</button>}
        <Trees trees={this.props.trees} collectLeaf={this.props.collectLeaf}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    level: state.level,
    scores: state.scores,
    score: state.score,
    time: state.time,
    msg: state.msg,
    trees: state.trees,
    basket: state.basket.total,
    rules: state.rules
  }
}

const mapDispatchToProps = dispatch => ({
  collectLeaf: leaf => dispatch({ type: "COLLECT_LEAF", leaf }),
  playGame: () => dispatch({ type: "PLAY_GAME" }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
