import React from 'react';
import Leaf from './Leaf'

const Tree = props => {
    const renderLeaf = (leaf) => (
        <Leaf
            leaf={leaf}
            key={leaf.id}
            stem={props.tree.name}
            handleLeafClick={props.handleLeafClick}
        />
    )
    return (
        <div className='tree'>
            <div className='stem'>
            </div>
            <div className='left'>
                {props.tree.leaves.map((leaf, i) => 
                    (i > 7) ? renderLeaf(leaf) : null
                )}
            </div>
            <div className='right'>
                {props.tree.leaves.map((leaf, i) => 
                    (i <= 7) ? renderLeaf(leaf) : null
                )}
            </div>
        </div>
    )
}

export default Tree
