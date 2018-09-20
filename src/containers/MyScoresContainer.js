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
                (this.props.allScores.length === 0) ? 
                'Loading Scores...' : 
                <Scores type='m' games={this.props.allScores.filter(game => game.user === this.props.user)}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allScores: state.allScores,
      user: state.user
    }
}


export default connect(mapStateToProps, {fetchScores})(MyScoresContainer)