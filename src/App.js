import React, { Component } from 'react';
import GameContainer from './containers/GameContainer'
import './App.css';
import Backgound from './components/Background';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import TopScores from "./components/TopScores"
import MyScores from "./components/MyScores"

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
              <Route path="/my-scores" component={MyScores}/>
              <Route path="/top-scores" component={TopScores}/>
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
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
