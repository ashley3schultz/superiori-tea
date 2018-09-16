import React from 'react';
import Leaf from './Leaf'

const Tree = props => {
    const renderLeaf = (leaf) => (
        <Leaf
            leaf={leaf}
            key={leaf.id}
            stem={props.tree.name}
            collectLeaf={props.collectLeaf}
        />
    )
    return (
        <div className='tree'>
            <div className='stem'>
            </div>
            <div className='left'>
                {props.tree.leaves.left.map(leaf => renderLeaf(leaf))}
            </div>
            <div className='right'>
                {props.tree.leaves.right.map(leaf => renderLeaf(leaf) )}
            </div>
        </div>
    )
}

export default Tree
