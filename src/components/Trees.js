import React from 'react';
import Tree from './Tree'

const leavesA = {
    right: ['leaf-a2', 'leaf-a4', 'leaf-a6', 'leaf-a8', 'leaf-a10', 'leaf-a12', 'leaf-a14', 'leaf-a16'],
    left: ['leaf-a1', 'leaf-a3', 'leaf-a5', 'leaf-a7', 'leaf-a9', 'leaf-a11', 'leaf-a13', 'leaf-a15']
}

const leavesB = {
    left: ['leaf-b2', 'leaf-b4', 'leaf-b6', 'leaf-b8', 'leaf-b10', 'leaf-b12', 'leaf-b14', 'leaf-b16'],
    right: ['leaf-b1', 'leaf-b3', 'leaf-b5', 'leaf-b7', 'leaf-b9', 'leaf-b11', 'leaf-b13', 'leaf-b15']
}

const trees = [
    {stem: 'stem-b', leaves: leavesA},
    {stem: 'stem-g', leaves: leavesB}, 
    {stem: 'stem-o', leaves: leavesA}, 
    {stem: 'stem-w', leaves: leavesB}, 
    {stem: 'stem-y', leaves: leavesA}]

const Trees = props => {
    return (
        <div className='trees'>
            {trees.map(tree => 
                <Tree 
                    tree={tree} 
                    key={tree.stem}  
                    collectLeaf={props.collectLeaf}  
                />
            )}
            {/* {trees[this.props.level - 1].map(leaf => <Leaf leaf={leaf}/>)} */}
        </div>
    )
} 
export default Trees