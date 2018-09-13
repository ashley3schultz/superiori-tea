import React from 'react';
import Leaf from './Leaf'

const uuidv1 = require('uuid/v1');

const Tree = props => {
    const stem = props.tree.stem
    const renderLeaf = (stem, leaf) => (
        <Leaf
            leaf={leaf} 
            key={uuidv1()} 
            stem={stem.replace('stem-', '')} 
            collectLeaf={props.collectLeaf}  
        />
    )
    return (
        <div className='tree'>
            <div className='stem'>
                {renderLeaf(stem, stem)}
            </div>
            <div className='left'>
                {props.tree.leaves.left.map(leaf => renderLeaf(stem, leaf) )}
            </div>
            <div className='right'>
                {props.tree.leaves.right.map(leaf => renderLeaf(stem, leaf) )}
            </div>
        </div>
    )
}

export default Tree