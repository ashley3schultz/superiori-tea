import React, { Component } from 'react';
import { connect } from 'react-redux'

class MyScores extends Component {

    
    render() {

        const renderGames = this.props.scores.map(game => {
            return (
            <li>
                Date: {game.user} | Score: {game.score}
            </li> )
        })
        console.log(this.props.scores)

        return (
            <div>
                <h1>My Scores</h1>
                <ol>
                    {(this.props.scores.length === 0) ? null : {renderGames}}
                </ol>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      scores: state.allScores
    }
}

export default connect(mapStateToProps)(MyScores)