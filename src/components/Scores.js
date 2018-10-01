import React from 'react';
            
const Scores = props => {
      return (
        <div className='scoreboard'>
        {/* <button className='likeButton' onClick={props.handleSort}>Sort</button> */}
            <h2>{(props.type === 'm') ? 
            "My" : "Top"} Scores</h2>
            {(props.games.length === 0) ? 
                <p>No games found.</p> : null}
            <ol>
                {props.games.map(game => 
                    <li 
                        key={game.id}>
                        {(props.type === 'm') ? 
                        `${game.created_at.split('T')[0]}: ` : 
                        `${game.user}: `}
                        {game.score}
                         {/* ~ {game.likes}<button className='likeButton' id={game.id} onClick={props.handleLike}>+</button> */}
                    </li>
                )}
            </ol>
        </div>
    )
}
export default Scores