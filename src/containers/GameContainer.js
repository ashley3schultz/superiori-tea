import React, { Component } from 'react';
import { connect } from 'react-redux'
import Trees from '../components/Trees'
import {emptyBasket, trees, rules} from '../components/Data'

class Game extends Component {

    state = {
        msg: <button onClick={this.playGame}>Start</button>,
        level: 0,
        score: [],
        trees: trees.slice(),
        basket: emptyBasket,
        time: 15
    }

    // startTimer = () => {
    //   this.timer = setInterval(() => this.setState({time: this.state.time - 1}), 1000);
    //   if (this.state.time === 0) {
    //     clearInterval(this.timer)
    //     this.setState({level: this.state.level + 1})
    //     this.setState({score: this.state.score.concat(addScore(this.state.basket))})
    //     this.setState({trees: trees.slice()})
    //     this.setState({basket: emptyBasket})
    //     this.setState({time: 15})
    //   }
    // }

    playGame = () => {
        if (this.state.time > 0) { //ajusts timer
            this.setState({msg: rules[this.state.level].tips}) if this.state.time === 15
            this.setState({time: this.state.time - 1})
            setTimeout(startTimer, 1000);
        } else if (this.state.time === 0) {
            if (this.state.level < 4) { //sets state for next level
                this.setState({level:  this.state.level + 1})
                this.setState({score: this.state.score.concat(addScore(this.state.basket))})
                this.setState({trees: trees.slice()})
                this.setState({basket: emptyBasket})
                this.setState({time: 15})
            } else { //saves game!
                this.setState({msg: <button onClick={this.playGame}>Play Again?</button>})
                this.setState({score: this.state.score.concat(addScore(this.state.basket))})
                this.saveGame
            }
        }
    }

    replayGame = () => {
        this.setState({level: 0})
        this.setState({score: []})
        this.setState({trees: trees.slice()})
        this.setState({basket: emptyBasket})
        this.setState({time: 15})
    }

    saveGame = () => {
      alert('game saved')
    }

    addScore = (basket) => {
      var purity = basket.pureCultivar / basket.total
      var quality = basket.qualityLeaves / basket.pureCultivar
      var outOf = basket.pureCultivar / rules[this.state.level].outOf
      return (purity + quality + outOf)
    }

    collectLeaf = (event) => {
      const leaf = event.target.getAttribute('id')split('*')
      if (leaf.length < 4 && this.state.time > 0) {
        this.setState({basket.total: this.state.basket.total + 1})
        var array = this.state.trees.leaves
        var index = array.indexOf(event.target.value)
        delete array[index];
        if (leaf[0] === rules[this.state.level].purity) {
          this.setState({basket.pureCultivar: this.state.basket.pureCultivar + 1})
        }
        if (leaf[1] =< rules[this.state.level].quality) {
          this.setState({basket.qualityLeaves: this.state.basket.qualityLeaves + 1})
        }
      }
    }

  render() {
    return (
      <div className="Game">
        <h3>Level {this.state.level + 1}</h3>
        <p>Basket: {this.state.basket.total}</p>
        <p>Time: {this.state.time}</p>
        {this.state.msg}
        <Trees trees={this.state.trees} collectLeaf={this.collectLeaf}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trees: this.state.trees
  }
}


export default connect(mapStateToProps)(Game)
