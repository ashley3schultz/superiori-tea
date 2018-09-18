import React from 'react';
import Tree from './Tree'

const Trees = props => {
    return (
        <div className='trees'>
            {props.trees.map(tree =>
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
