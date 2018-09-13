import React from 'react';

const Leaf = props => {
      return (
        <div className="leaf">
            <img
                onClick={props.collectLeaf}
                src={require('./images/' + props.leaf.name + '.png')}
                alt={props.leaf.name}
                id={props.stem + '*' + props.leaf.name.replace('leaf-a', '').replace('leaf-b', '') + '*' + props.leaf.id}
            />
        </div>
    )
}
export default Leaf
