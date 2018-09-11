import React from 'react';

const Leaf = props => {
    return (
        <div> 
            <img className="leaf" src={require('./images/' + props.leaf + '.png')} alt={props.leaf}/>
        </div>
    )
} 
export default Leaf