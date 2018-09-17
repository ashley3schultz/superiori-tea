import React from 'react';

const Leaf = props => {
      const name = props.leaf.name
      const num = name.replace('a', '').replace('b', '')
      return (
        <div className="leaf">
            <img
                onClick={props.handleLeafClick}
                src={require('./images/' + props.leaf.name + '.png')}
                alt={props.leaf.name}
                id={props.stem + '*' + num + '*' + props.leaf.id}
                className={(num < 3) ? 'bud' : 'leaf'}
            />
        </div>
    )
}
export default Leaf
