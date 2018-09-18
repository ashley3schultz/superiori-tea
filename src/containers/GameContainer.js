import React, { Component } from 'react';
import {rules} from '../components/Data'
import Trees from '../components/Trees'
import UserInput from '../components/UserInput'
import { connect } from 'react-redux'
// import { playGame } from '../actions/game'

class Game extends Component {

  playGame = () => {
    if (this.props.time === 15) {
        this.props.startLevel()
    }
    if (this.props.time > 0) { //ajusts timer
        this.props.reduceTime()
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

  getPercent(num1, num2, num3, num4) {
    var a = num1 / num2 * 100 || 0
    var b = num3 / num1 * 100 || 0
    var c = num1 / num4 * 100 || 0
    return Math.floor(a + b + c)
  }

  handleLeafClick = (event) => {
      const r = rules[this.props.level]
      const b = this.props.basket
      const l = event.target.getAttribute('id').split('*')
      const score = this.calculateScore(b.cultivar, b.total, b.quality, r.outOf)
      const trees = this.props.trees.map(tree => tree.leaves.filter(leaf => leaf !== l[2]))
      const basket = {
        cultivar: b.cultivar + (l[0] === r.cultivar) ? 1 : 0,
        quality: b.quality + (l[1] <= r.quality) ? 1 : 0,
        total: b.total + 1
      }
      this.props.collectLeaf(score, trees, basket)
  }

  handleInput = (event) => {
    const input = event.target.value
    this.props.updateUser(input)
  }

  render() {
    return (
      <div className="Game">
        <h3>Level {this.props.level + 1} {this.props.scores}</h3>
        <UserInput handleInput={this.handleInput} user={this.props.user}/>
        <p>Basket: {this.props.basket} |
        Time: {this.props.time} |
        Score: {this.props.score}</p>
        {this.props.msg || <button onClick={this.playGame}>Start</button>}
        <Trees trees={this.props.trees} handleLeafClick={this.props.handleLeafClick}/>
      </div>
    );
  }

  // defaultProps() {
  //   return {
  //     rules: {rules}
  //   }
  // }
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
    user: state.user,
    topScore: state.topScore
  }
}

const mapDispatchToProps = dispatch => ({
  collectLeaf: leaf => dispatch({ type: "COLLECT_LEAF", leaf }),
  playGame: () => dispatch({ type: "PLAY_GAME" }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
