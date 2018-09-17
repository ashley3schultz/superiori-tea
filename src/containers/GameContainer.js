import React, { Component } from 'react';
import Trees from '../components/Trees'
import { connect } from 'react-redux'
// import { playGame } from '../actions/game'

class Game extends Component {

  playGame = () => {
    if (this.props.time === 15) {
        this.props.startLevel()
    }
    if (this.props.time > 0) { //ajusts timer
        this.props.incrementTime()
        setTimeout(this.playGame, 1000);
    } else {
        if (this.props.level < 4) {
            this.props.setNextLevel()
        } else {
            this.props.saveGame()
            this.props.resetGame()
        }
    }
  }

  render() {
    return (
      <div className="Game">
        <h3>Level {this.props.level + 1} {this.props.scores}</h3>
        <p>Basket: {this.props.basket} |
        Time: {this.props.time} |
        Score: {this.props.score}</p>
        {this.props.msg || <button onClick={this.playGame}>Start</button>}
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
