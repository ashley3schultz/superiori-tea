import React from 'react';
import Tree from './Tree'

const Trees = props => {
    const randomizedTrees = props.trees.sort(function(a, b){return a.id - b.id})
    return (
        <div className='trees'>
            {randomizedTrees.map(tree =>
                <Tree
                    tree={tree}
                    key={tree.id}
                    handleLeafClick={props.handleLeafClick}
                />
            )}
        </div>
    )
}
export default Trees
