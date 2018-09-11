import React from 'react';

const Leaf = props => {
      return (
        <div className={props.type + '-' + props.align}> 
            <img 
                onClick={props.collectLeaf} 
                className={props.type}
                align={props.align}
                src={require('./images/' + props.leaf + '.png')} 
                alt={props.leaf} 
                id={props.stem + props.leaf.replace('leaf-a', '').replace('leaf-b', '')}
            />
        </div>
    )
} 
export default Leaf