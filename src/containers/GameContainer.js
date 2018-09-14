import React, { Component } from 'react';
import { connect } from 'react-redux'
import Trees from '../components/Trees'
import {emptyBasket, trees, rules} from '../components/Data'

class Game extends Component {

    state = {
        msg: undefined,
        level: 0,
        scores: [],
        score: 0,
        trees: trees.slice(),
        basket: emptyBasket,
        time: 15,
        rules: rules,
        playing: false
    }

    playGame = () => {
        this.setState({playing: true})
        if (this.state.time > 0) { //ajusts timer
            this.setState({msg: rules[this.state.level].tips})
            this.setState({time: this.state.time - 1})
            this.setState({score: this.addScore(this.state.basket)})
            setTimeout(this.playGame, 1000);
        } else if (this.state.time === 0) {
            if (this.state.level < 4) { //sets state for next level
              console.log(this.state.basket)
                this.setState({msg: undefined})
                this.setState({level:  this.state.level + 1})
                this.setState({scores: this.state.scores.concat(this.state.score)})
                this.setState({trees: trees.slice()})
                this.setState({basket: emptyBasket})
                this.setState({time: 15})
                this.setState({score: 0})
                this.setState({playing: false})
            } else {
                this.setState({msg: undefined})
                this.setState({scores: this.state.scores.concat(this.state.score)})
                this.setState({score: (this.state.scores[0] + this.state.scores[1] + this.state.scores[2] + this.state.scores[3] + this.state.scores[4])})
                this.saveGame()
                this.resetGame()
                this.setState({playing: false})
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

    hideLeaf = () => {
      console.log('0')
      // var array = this.state.trees
      //   var rmvlf = array.map((t, i) => {
      //     t.leaves.left.map((l, i) => {
      //       if (l.id === leaf[2]s) {
      //         return l
      //       }
      //     })
      //     t.leaves.right.map((l, i) => {
      //       if (l.id === leaf[2]) {
      //         return l
      //       }
      //     })
      //   })
    }

    addBasketTotal = () => {
      console.log('1')
      this.setState({ basket: { ...this.state.basket, total: this.state.basket.total + 1} });
    }

    addBasketPureCultivar = () => {
      console.log('2')
      this.setState({ basket: { ...this.state.basket, pureCultivar: this.state.basket.pureCultivar + 1} })
    }

    addBasketQualityLeaves = () => {
      console.log('3')
      this.setState({ basket: { ...this.state.basket, qualityLeaves: this.state.basket.qualityLeaves + 1} })
    }

    collectLeaf = (event) => {
      const leaf = event.target.getAttribute('id').split('*')
      const cultivar = this.state.rules[this.state.level].purity
      const quality = this.state.rules[this.state.level].quality
      if (leaf[1].length < 4 && this.state.playing === true) {
        if (leaf[0] === cultivar) {
          if (parseInt(leaf[1], 10) <= quality) {
            this.addBasketQualityLeaves()
          }
          this.addBasketPureCultivar()
        }
        this.addBasketTotal()
        this.hideLeaf()
      }
    }

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
