import React, { Component } from 'react';
import { connect } from 'react-redux'
import Trees from '../components/Trees'

class Game extends Component {

    state = {
        level: 0,
        basket: [],
        total: [],
        time: 15
    }

    startTimer = () => {
      this.setState({time: this.state.time - 1})
      if (this.state.time === 0) {
        alert('times up')
        this.setState({time: 15})
        this.setState({level: this.state.level + 1})
        this.setState({total: this.state.total.concat([this.state.basket])})
        this.setState({basket: []})
      }
    }

    collectLeaf = (event) => {
      const leaf = event.target.getAttribute('id')
      if (leaf.length < 4) {
        this.setState({basket: this.state.basket.concat(leaf)})
        document.getElementById(leaf).remove();
      }
    }

  render() {
    return (
      <div className="Game">
        <h3>Level {this.state.level + 1}</h3>
        <p>Basket: {this.state.basket.length}</p>
        <p>Time: {this.state.time}</p>
        <button onClick={this.startTimer}>Start</button>
        <Trees collectLeaf={this.collectLeaf}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}


export default connect(mapStateToProps)(Game)