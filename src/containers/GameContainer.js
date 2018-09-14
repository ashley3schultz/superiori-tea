import React, { Component } from 'react';
import { connect } from 'react-redux'
import Trees from '../components/Trees'
import {emptyBasket, trees, rules} from '../components/Data'

class Game extends Component {

    state = {
        msg: undefined,
        level: 4,
        scores: [],
        score: 0,
        trees: trees.slice(),
        basket: emptyBasket,
        time: 15,
        rules: rules
    }

    playGame = () => {
        if (this.state.time > 0) { //ajusts timer
            this.setState({msg: rules[this.state.level].tips})
            this.setState({time: this.state.time - 1})
            this.setState({score: this.addScore(this.state.basket)})
            setTimeout(this.playGame, 1000);
        } else if (this.state.time === 0) {
            if (this.state.level < 4) { //sets state for next level
                this.setState({msg: undefined})
                this.setState({level:  this.state.level + 1})
                this.setState({scores: this.state.scores.concat(this.state.score)})
                this.setState({trees: trees.slice()})
                this.setState({basket: emptyBasket})
                this.setState({time: 15})
                this.setState({score: 0})
            } else {
                this.setState({msg: undefined})
                this.setState({scores: this.state.scores.concat(this.state.score)})
                this.setState({score: (this.state.scores[0] + this.state.scores[1] + this.state.scores[2] + this.state.scores[3] + this.state.scores[4])})
                this.saveGame()
                this.resetGame()
            }
        }
    }

    resetGame = () => {
        this.setState({level: 0})
        this.setState({score: []})
        this.setState({trees: trees.slice()})
        this.setState({basket: emptyBasket})
        this.setState({time: 15})
        this.setState({msg: undefined})
    }

    saveGame = () => {
      console.log('game saved')
    }

    addScore = (basket) => {
      var purity = basket.pureCultivar / basket.total * 100 || 0
      var quality = basket.qualityLeaves / basket.pureCultivar * 100 || 0
      var outOf = basket.pureCultivar / this.state.rules[this.state.level].outOf *100 || 0
      return (Math.floor(purity) + Math.floor(quality) + Math.floor(outOf))
    }

    // collectLeaf = (event) => {
    //   const leaf = event.target.getAttribute('id')
    //   // split('*')
    //   if (leaf.length < 4 && this.state.time > 0) {
    //     this.setState({basket.total: this.state.basket.total + 1})
    //     var array = this.state.trees.leaves
    //     var index = array.indexOf(event.target.value)
    //     delete array[index];
    //     if (leaf[0] === rules[this.state.level].purity) {
    //       this.setState({basket.pureCultivar: this.state.basket.pureCultivar + 1})
    //     }
    //     if (leaf[1] =< rules[this.state.level].quality) {
    //       this.setState({basket.qualityLeaves: this.state.basket.qualityLeaves + 1})
    //     }
    //   }
    // }

  render() {
    return (
      <div className="Game">
        <h3>Level {this.state.level + 1}</h3>
        <p>Basket: {this.state.basket.total}</p>
        <p>Time: {this.state.time}</p>
        <p>Score: {this.state.score}</p>
        {this.state.msg || <button onClick={this.playGame}>Start</button>}
        <Trees trees={this.state.trees} collectLeaf={this.collectLeaf}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trees: this.state
  }
}


export default connect(mapStateToProps)(Game)
