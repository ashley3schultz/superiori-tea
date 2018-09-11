import React from 'react';
import Leaf from './Leaf'

const leavesA = ['leaf-a1', 'leaf-a2', 'leaf-a3', 'leaf-a4', 'leaf-a5', 'leaf-a6', 'leaf-a7', 'leaf-a8', 'leaf-a9', 'leaf-a10', 'leaf-a11', 'leaf-a12', 'leaf-a13', 'leaf-a14', 'leaf-a15', 'leaf-a16']
const leavesB = ['leaf-b1', 'leaf-b2', 'leaf-b3', 'leaf-b4', 'leaf-b5', 'leaf-b6', 'leaf-b7', 'leaf-b8', 'leaf-b9', 'leaf-b10', 'leaf-b11', 'leaf-b12', 'leaf-b13', 'leaf-b14', 'leaf-b15', 'leaf-b16']
const trees = [['stem-b'].concat(...leavesA), ['stem-g'].concat(...leavesB), ['stem-o'].concat(...leavesA), ['stem-w'].concat(...leavesB), ['stem-y'].concat(...leavesA)]

const Trees = props => {
    return (
        <div>
            {trees.map(tree => (
                tree.map(leaf => <Leaf leaf={leaf} key={leaf} stem={tree[0].replace('stem-', '')} collectLeaf={props.collectLeaf}/>)
                )
            )}
            {/* {trees[this.props.level - 1].map(leaf => <Leaf leaf={leaf}/>)} */}
        </div>
    )
} 
export default Trees