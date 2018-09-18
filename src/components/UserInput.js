import React from 'react';

const Trees = props => {

    return (
        <div className='UserInput'>
            <input
              type='text'
              value={props.user}
              onChange={props.handleInput}
              placeholder='Enter Your Name'
            />
        </div>
    )
}
export default Trees
