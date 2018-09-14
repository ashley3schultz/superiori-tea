import React from 'react';
import Leaf from './Leaf'

const Tree = props => {
    const stem = props.tree
    const leaves = props.tree.leaves
    const renderLeaf = (leaf) => (
        <Leaf
            leaf={leaf}
            key={leaf.id}
            stem={stem.name.replace('stem-', '')}
            collectLeaf={props.collectLeaf}
        />
    )
    return (
        <div className='tree'>
            <div className='stem'>
                {renderLeaf(stem)}
            </div>
            <div className='left'>
                {leaves.left.map(leaf => renderLeaf(leaf))}
            </div>
            <div className='right'>
                {leaves.right.map(leaf => renderLeaf(leaf) )}
            </div>
        </div>
    )
}

export default Tree
