import React from 'react';
import Tree from './Tree'

const Trees = props => {

    return (
        <div className='trees'>
            {props.trees.map(tree =>
                <Tree
                    tree={tree}
                    key={tree.id}
                    collectLeaf={props.collectLeaf}
                />
            )}
        </div>
    )
}
export default Trees
