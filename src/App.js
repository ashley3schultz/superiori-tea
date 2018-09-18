import React, { Component } from 'react';
import Game from './containers/GameContainer'
import './App.css';
import Backgound from './components/Background';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
 
      <div className="App">
        <Backgound playing={this.props.playing}/>
        <div className="dirt"></div>
        <header className="App-header">
          <h1 className="Superiori-Tea">Superiori-Tea</h1>
        </header>
        <Game/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playing: state.playing
  }
}

export default connect(mapStateToProps)(App)
