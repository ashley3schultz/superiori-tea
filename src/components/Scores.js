import React from 'react';
            
const Scores = props => {
      return (
        <div>
            <h2>{(props.type === 'm') ? 
            "My" : "Top"} Scores</h2>
            {(props.games.length === 0) ? 
                <p>No games found.</p> : null}
            <ol>
                {props.games.map(game => 
                    <li 
                        key={game.id}>
                        {(props.type === 'm') ? 
                        `Date: ${game.created_at.split('T')[0]} ` : 
                        `Name: ${game.user} `}
                        | Score: {game.score}
                    </li>
                )}
            </ol>
        </div>
    )
}
export default Scores