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

  calculateScore(rule) {
    const { cultivar, total, quality } = this.props.data.basket
    var a = cultivar / total * 100 || 0
    var b = quality / total * 100 || 0
    var c = quality / rule * 100 || 0
    var d = (Math.floor(a + b + c) === 300) ? this.props.data.time * 50 : 0
    var sum = Math.floor(a + b + c + d)
    console.log(sum)
    return sum
  }

  handleLeafClick = (event) => {
      const { actions } = this.props
      const { playing, level } = this.props.data
      const leaf = event.target.getAttribute('id').split('*')
      const c = (leaf[0] === rules[level].cultivar) ? 1 : 0
      const q = (leaf[1] <= rules[level].quality && c === 1) ? 1 : 0
      if (playing === true && leaf[3] === 'show'){
        actions.collectLeaf(c, q)
        const score = this.calculateScore(rules[level].outOf - 1)
        actions.updateScore(score)
        actions.updateTrees(leaf[2])
      }
  }

  render() {
    return (
      <div className="Game">
        {(this.props.data.games.length === 0) ? 
        null : 
        <LeaderBoard game={this.props.data.games.sort((a, b) => b.score - a.score)[0]}/>}
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
