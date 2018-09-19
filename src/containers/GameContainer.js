import React, { Component } from 'react';
import {rules} from '../components/Data'
import LeaderBoard from '../components/LeaderBoard'
import UserInput from '../components/UserInput'
import Game from '../components/Game'
import { connect } from 'react-redux'
// const API_URL = process.env.REACT_APP_API_URL;
// import { bindActionCreators } from "redux";
// import * as actions from "../actions/game";

class GameContainer extends Component {

  componentDidMount() {
    // ${API_URL}
    fetch(`http://192.168.1.30:3001/api/v1/games.json`)
          .then(response => response.json())
          .then(game => this.props.updateTopScore(game))
          .catch(error => console.log(error));
    }

    saveGame = (name, score) => {
      let body = JSON.stringify({game: {name: name, score: score} })
      fetch('http://192.168.1.30:3001/api/v1/games', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body,
      }).then((response) => {return response.json()})
      .then(game => this.props.updateTopScore(game))
      .catch(error => console.log(error));
    }
  

  playGame = () => {
    if (this.props.data.time === 18) {
        this.props.startLevel()
    }
    if (this.props.data.time > 0) {
        this.props.reduceTime()
        setTimeout(this.playGame, 1000);
    } else {
        if (this.props.data.level < 4) {
            this.props.setNextLevel()
        } else {
            const s = this.props.data.scores
            const score = (s[0] + s[1] + s[2] + s[3] + this.props.data.score)
            const name = this.props.data.user
            this.saveGame(name, score)
            this.props.resetGame()
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
      const r = rules[this.props.data.level]
      const b = this.props.data.basket
      const l = event.target.getAttribute('id').split('*')
      const c = (l[0] === r.cultivar) ? 1 : 0
      const q = (l[1] <= r.quality && c === 1) ? 1 : 0
      const trees = this.props.data.trees.map(tree => { 
        return {
          id: tree.id, 
          name: tree.name, 
          leaves: tree.leaves.map(leaf => {
            return {name: leaf.name, id: leaf.id, status: (leaf.id === l[2]) ? 'hide' : leaf.status}
          })
        }})
      const basket = {
        cultivar: b.cultivar + c,
        quality: b.quality + q,
        total: b.total + 1
      }
      if (this.props.data.playing === true && l[3] === 'show'){
        this.props.collectLeaf(trees, basket)
        const score = this.calculateScore(this.props.data.basket.cultivar, this.props.data.basket.total, this.props.data.basket.quality, r.outOf)
        this.props.updateScore(score)
      }
  }

  submitUser = (name) => {
    this.props.updateUser(name)
  }

  render() {
    return (
      <div className="Game">
        {console.log(this.props.data)}
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

const mapDispatchToProps = dispatch => ({
  updateTopScore: game => dispatch({ type: "UPDATE_TOP_SCORE", game }),
  updateUser: input => dispatch({ type: "UPDATE_INPUT", input }),
  startLevel: () => dispatch({ type: "START_LEVEL" }),
  reduceTime: () => dispatch({ type: "REDUCE_TIME" }),
  collectLeaf: (trees, basket) => dispatch({ type: "COLLECT_LEAF", trees, basket }),
  setNextLevel: () => dispatch({ type: "SET_NEXT_LEVEL" }),
  resetGame: () => dispatch({ type: "RESET_GAME" }),
  updateScore: score => dispatch({ type: "UPDATE_SCORE", score })
})

// const mapDispatchToProps = dispatch => {
//   return { actions: bindActionCreators(actions, dispatch) };
// };

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
