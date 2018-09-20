import React from 'react';

const LeaderBoard = props => {

      return (
        <div className='LeaderBoard'>
            <h5>Leader</h5><h4>{props.game.user}</h4><h3>{props.game.score}</h3>
        </div>
    )
}
export default LeaderBoard