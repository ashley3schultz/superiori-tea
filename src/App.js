import React, { Component } from 'react';
import GameContainer from './containers/GameContainer'
import './App.css';
import Backgound from './components/Background';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import MyScoresContainer from "./containers/MyScoresContainer"
import ScoresContainer from "./containers/ScoresContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Backgound playing={this.props.playing}/>
        <div className="dirt"></div>
        <BrowserRouter>
          <div className="App">
            <NavBar/>
            <header className="App-header">
              <h1 className="Superiori-Tea">Superiori-Tea</h1>
            </header>
            <Switch>
              <Route path="/" component={GameContainer} exact/>
              <Route path="/my-scores" component={MyScoresContainer}/>
              <Route path="/scores" component={ScoresContainer}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
    user: state.user,
    allScores: state.allScores
  }
}

export default connect(mapStateToProps)(App)
