import React from 'react';
import Trees from '../components/Trees'

const Game = props => {
      return (
        <div>
            <h3>
                Level {props.data.level + 1}
            </h3>
            <p>
                Basket: {props.data.basket.total} |
                Time: {props.data.time} |
                Score: {props.data.score}
            </p>
            {props.data.msg || <button onClick={props.playGame}>Start</button>}
            <Trees trees={props.data.trees} handleLeafClick={props.handleLeafClick}/>
        </div>
    )
}
export default Game
