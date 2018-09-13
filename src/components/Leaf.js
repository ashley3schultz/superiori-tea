import React from 'react';

const Leaf = props => {
      return (
        <div>
            <img 
                onClick={props.collectLeaf} 
                src={require('./images/' + props.leaf + '.png')} 
                alt={props.leaf} 
                id={props.stem + props.leaf.replace('leaf-a', '').replace('leaf-b', '')}
            />
        </div>
    )
} 
export default Leaf