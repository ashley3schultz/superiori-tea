import React, { Component } from 'react';
import { connect } from 'react-redux'
import Scores from '../components/Scores'
import {fetchScores} from "../actions/game";

class ScoresContainer extends Component {

    componentDidMount() {
        this.props.fetchScores()
    }

    render() {
        return (
            <div>
                {(this.props.games.length === 0) ? 'Loading Scores...' : 
                <Scores type='t' games={this.props.games}/>}
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


export default connect(mapStateToProps, {fetchScores})(ScoresContainer)