import React from 'react';

const Trees = props => {
    const randomizedTrees = props.trees.sort(function(a, b){return a.id - b.id})
    return (
        <div className='UserInput'>
            <input
              type='text'
              value={props.user}
              onChange={props.handleInput}
            />
        </div>
    )
}
export default Trees
