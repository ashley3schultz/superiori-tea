import React, { Component } from 'react';
import { connect } from 'react-redux'
import Scores from '../components/Scores'
import {fetchScores} from "../actions/game";
// const API_URL = process.env.REACT_APP_API_URL;

class ScoresContainer extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { games: [] };
    // }

    componentDidMount() {
        this.props.fetchScores()
        // fetch(`${API_URL}.json`)
        // .then(response => response.json())
        // .then(games => this.setState({games: games}))
        // .catch(error => console.log(error));
    }

    // handleSort = () => {
    //     this.setState(prevState => {
    //         return { games: prevState.games.sort((a, b) => b.likes - a.likes)}
    //     })
    // }
          
    // handleLike = (event) => {
    //     const gameid = parseInt(event.target.getAttribute('id'))
    //     const gamearray = (this.state.games.length === 0) ? this.props.games : this.state.games
    //     const games = gamearray.map(game => {
    //         return {
    //             id: game.id, 
    //             user: game.user,
    //             score: game.score, 
    //             likes: (game.id === gameid) ? game.likes + 1 : game.likes,
    //             created_at: game.created_at
    //         }
    //     })
    //     this.setState({games: games})
        
    //     let body = JSON.stringify({game: {id: gameid} })
    //     fetch(`${API_URL}/${gameid}`, {
    //           method: 'PATCH',
    //           body: body,
    //       }).then(response => response.json())
    //       .catch(error => console.log(error));
    // }

    render() {
        return (
            <div>
                {(this.props.games.length === 0) ? 'Loading Scores...' :
                <Scores type='t' games={this.props.games} handleLike={this.handleLike} handleSort={this.handleSort}/>}
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

// export default ScoresContainer
export default connect(mapStateToProps, {fetchScores})(ScoresContainer)