import React, { Component } from 'react';
import {rules} from '../components/Data'
import LeaderBoard from '../components/LeaderBoard'
import UserInput from '../components/UserInput'
import Game from '../components/Game'
import { connect } from 'react-redux'
// const API_URL = process.env.REACT_APP_API_URL;
// import { bindActionCreators } from "redux";
// import * as actions from "../actions/game";
// import {fetchTopScore} from "../actions/game";
import { bindActionCreators } from "redux";
import * as actions from "../actions/game";


class GameContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchTopScore()
    }

    // saveGame = (name, score) => {
    //   // let body = JSON.stringify({game: {name: name, score: score} })
    //   // fetch('http://192.168.1.30:3001/api/v1/games', {
    //   //     method: 'POST',
    //   //     headers: {
    //   //       'Content-Type': 'application/json'
    //   //     },
    //   //     body: body,
    //   // }).then((response) => {return response.json()})
    //   // .then(game => this.props.actions.updateTopScore(game))
    //   // .catch(error => console.log(error));
    // }
  

  playGame = () => {
    const { actions } = this.props
    const { time, level, scores, score, user } = this.props.data
    console.log(time)
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
    const { basket, trees, playing } = this.props.data
      const r = rules[this.props.data.level]
      const b = basket
      const l = event.target.getAttribute('id').split('*')
      // const c = (l[0] === r.cultivar) ? 1 : 0
      // const q = (l[1] <= r.quality && c === 1) ? 1 : 0

      const newTrees = trees.map(tree => { 
        return {
          id: tree.id, 
          name: tree.name, 
          leaves: tree.leaves.map(leaf => {
            return {name: leaf.name, id: leaf.id, status: (leaf.id === l[2]) ? 'hide' : leaf.status}
          })
        }})

      if (playing === true && l[3] === 'show'){
        actions.collectLeaf()
        const score = this.calculateScore(basket.cultivar, basket.total, basket.quality, r.outOf)
        actions.updateScore(score)
      }
  }

  render() {
    return (
      <div className="Game">
        <LeaderBoard game={this.props.data.topScore}/>
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
