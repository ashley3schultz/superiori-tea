import React, { Component } from 'react';
import { connect } from 'react-redux'
import Scores from '../components/Scores'
import UserInput from '../components/UserInput'
import {fetchScores} from "../actions/game";

class MyScoresContainer extends Component {

    componentDidMount() {
        this.props.fetchScores()
    }

    render() {
        return (
            <div>
                {(this.props.user === '') ? 
                <UserInput/> :
                (this.props.games.length === 0) ? 
                'Loading Scores...' : 
                <Scores type='m' games={this.props.games.filter(game => game.user === this.props.user)}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.games,
        user: state.user
    }
}


export default connect(mapStateToProps, {fetchScores})(MyScoresContainer)