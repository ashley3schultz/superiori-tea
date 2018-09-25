import React from 'react';
import Trees from '../components/Trees'
import {rules} from '../components/Data'

const Game = props => {
    const { msg, trees, level, time, playing } = props.data
    const { cultivar, quality, total } = props.data.basket
    const pty = cultivar / total * 100 || 0
    const qty = quality / total * 100 || 0
    const qta = quality / rules[level].outOf * 100 || 0
      return (
        <div>
            <div className='timer'><h5>Time</h5><h3>{time}</h3></div>
            <h3 className='level'>
                Level {level + 1}
            </h3>
            {(playing) ?
            <p>    
                Purity: {Math.floor(pty)}%
                ~ Quality: {Math.floor(qty)}% ~
                Quota: {Math.floor(qta)}%
            </p> : null}
            {msg || <button className='start' onClick={props.playGame}>Start</button>}
            {(playing) ? 
            <Trees trees={trees} handleLeafClick={props.handleLeafClick}/> :
            null}
        </div>
    )
}
export default Game
