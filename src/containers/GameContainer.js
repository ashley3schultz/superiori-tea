import React, { Component } from 'react';
import {rules} from '../components/Data'
import Trees from '../components/Trees'
import LeaderBoard from '../components/LeaderBoard'
import UserInput from '../components/UserInput'
import { connect } from 'react-redux'
// const API_URL = process.env.REACT_APP_API_URL;
// import { bindActionCreators } from "redux";
// import * as actions from "../actions/game";

class Game extends Component {

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
    if (this.props.time === 18) {
        this.props.startLevel()
    }
    if (this.props.time > 0) {
        this.props.reduceTime()
        setTimeout(this.playGame, 1000);
    } else {
        if (this.props.level < 4) {
            this.props.setNextLevel()
        } else {
            const s = this.props.scores
            const score = (s[0] + s[1] + s[2] + s[3] + this.props.score)
            const name = this.props.user
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
      const r = rules[this.props.level]
      const b = this.props.basket
      const l = event.target.getAttribute('id').split('*')
      const c = (l[0] === r.cultivar) ? 1 : 0
      const q = (l[1] <= r.quality && c === 1) ? 1 : 0
      const trees = this.props.trees.map(tree => { 
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
      if (this.props.playing === true && l[3] === 'show'){
        this.props.collectLeaf(trees, basket)
        const score = this.calculateScore(this.props.basket.cultivar, this.props.basket.total, this.props.basket.quality, r.outOf)
        this.props.updateScore(score)
      }
  }

  handleInput = (event) => {
    const input = event.target.value
    this.props.updateUser(input)
  }

  render() {
    return (
      <div className="Game">
        <LeaderBoard game={this.props.topScore}/>
        <UserInput handleInput={this.handleInput} user={this.props.user}/>
        <h3>Level {this.props.level + 1}</h3>
        <p>Basket: {this.props.basket.total} |
        Time: {this.props.time} |
        Score: {this.props.score}</p>
        {this.props.msg || <button onClick={this.playGame}>Start</button>}
        <Trees trees={this.props.trees} handleLeafClick={this.handleLeafClick}/>
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
    basket: state.basket,
    playing: state.playing,
    user: state.user,
    topScore: state.topScore
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

export default connect(mapStateToProps, mapDispatchToProps)(Game)
