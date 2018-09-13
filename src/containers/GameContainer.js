import React, { Component } from 'react';
import { connect } from 'react-redux'
import Trees from '../components/Trees'
const uuid = require('uuid/v3')

class Game extends Component {

    state = {
        level: 0,
        score: [],
        trees: trees.slice(),
        basket: {pureCultivar: 0, qualityLeaves: 0, total: 0},
        time: 15
    }

    startTimer = () => {
      setInterval(function(){ this.setState({time: this.state.time - 1}) }, 1000);
      if (this.state.time === 0) {
        alert('times up')
        this.setState({level: this.state.level + 1})
        this.setState({score: this.state.score.concat(addScore(this.state.basket))}),
        this.setState({trees: trees.slice()})
        this.setState({basket: emptyBasket})
        this.setState({time: 15})
      }
    }

    addScore = (basket) => {
      var purity = basket.pureCultivar / basket.total
      var quality = basket.qualityLeaves / basket.pureCultivar
      var outOf = basket.pureCultivar / rules[this.state.level].outOf
      return (purity + quality + outOf)
    }

    collectLeaf = (event) => {
      const leaf = event.target.getAttribute('id')split('-')
      if (leaf.length < 4) {
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
        <button onClick={this.startTimer}>Start</button>
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
