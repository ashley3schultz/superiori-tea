import React from 'react';

const Backgound = props => {
      return (
        <div className='background'>
        <img 
            src={require('./images/Scene.' + ((props.playing === true) ? 'gif' : 'png'))} 
            alt={props.playing}
        />
        </div>
    )
}
export default Backgound
