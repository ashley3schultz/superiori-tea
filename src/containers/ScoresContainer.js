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
                {(this.props.allScores.length === 0) ? 'Loading Scores...' : 
                <Scores type='t' games={this.props.allScores}/>}
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


export default connect(mapStateToProps, {fetchScores})(ScoresContainer)