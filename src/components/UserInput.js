import React from 'react';

const Trees = props => {

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
