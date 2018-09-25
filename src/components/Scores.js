import React from 'react';
            
const Scores = props => {
    const games = props.games.sort((a, b) => b.score - a.score )
      return (
        <div className='scoreboard'>
            <h2>{(props.type === 'm') ? 
            "My" : "Top"} Scores</h2>
            {(props.games.length === 0) ? 
                <p>No games found.</p> : null}
            <ol>
                {games.map(game => 
                    <li 
                        key={game.id}>
                        {(props.type === 'm') ? 
                        `${game.created_at.split('T')[0]}: ` : 
                        `${game.user}: `}
                        {game.score} ~ {game.likes}<button className='likeButton' id={game.id} onClick={props.handleLike}>+</button>
                    </li>
                )}
            </ol>
        </div>
    )
}
export default Scores