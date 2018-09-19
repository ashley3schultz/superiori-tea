import React from 'react';

const LeaderBoard = props => {

      return (
        <div className='LeaderBoard'>
            <h3>{props.game.user}: {props.game.score}</h3>
        </div>
    )
}
export default LeaderBoard