import React, { Component } from 'react';
import {rules} from '../components/Data'
import LeaderBoard from '../components/LeaderBoard'
import UserInput from '../components/UserInput'
import Game from '../components/Game'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "../actions/game";

class GameContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchScores()
  }
  
  playGame = () => {
    const { actions } = this.props
    const { time, level, scores, score, user } = this.props.data
    if (time === 18) {
        actions.startLevel()
    }
    if (time > 0) {
        actions.reduceTime()
        setTimeout(this.playGame, 1000);
    } else {
        if (level < 4) {
            actions.setNextLevel()
        } else {
            const totalScore = (scores[0] + scores[1] + scores[2] + scores[3] + score)
            actions.saveGame(user, totalScore)
            actions.resetGame()
        }
    }
  }

  calculateScore(num1, num2, num3, num4) {
    var a = Math.floor(num1 / num2 * 100 || 0)
    var b = Math.floor(num3 / num1 * 100 || 0)
    var c = Math.floor(num1 / num4 * 100 || 0)
    var total = (a + b + c)
    return total
  }

  handleLeafClick = (event) => {
      const { actions } = this.props
      const { basket, playing, level } = this.props.data
      const leaf = event.target.getAttribute('id').split('*')
      const c = (leaf[0] === rules[level].cultivar) ? 1 : 0
      const q = (leaf[1] <= rules[level].quality && c === 1) ? 1 : 0
      if (playing === true && leaf[3] === 'show'){
        actions.collectLeaf(c, q)
        const score = this.calculateScore(basket.cultivar, basket.total, basket.quality, rules[level].outOf)
        actions.updateScore(score)
        actions.updateTrees(leaf[2])
      }
  }

  render() {
    return (
      <div className="Game">
        {(this.props.data.allScores.length === 0) ? 
        null : 
        <LeaderBoard game={this.props.data.allScores[0]}/>}
        {(this.props.data.user === '') ? 
          <UserInput/> : 
          <Game 
            data={this.props.data}
            playGame={this.playGame}
            handleLeafClick={this.handleLeafClick}
          />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
