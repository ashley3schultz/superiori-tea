import React from 'react';
import Leaf from './Leaf'

const Tree = props => {
    let type
    let align
    return (
        <div className='tree'>
            {props.tree.map((leaf, i) => {
                if (i === 0) {
                    type = 'stem'
                } else {
                    type = 'leaf'
                    if (leaf.includes('leaf-a')) {
                        align = ((i%2 === 0) ? 'left' : 'right')
                    } else if (leaf.includes('leaf-b')) {
                            align = ((i%2 === 0) ? 'right' : 'left')
                    }
                }
                return (
                    <Leaf 
                        leaf={leaf} 
                        key={props.tree[0].replace('stem-', '') + i} 
                        stem={props.tree[0].replace('stem-', '')} 
                        collectLeaf={props.collectLeaf}  
                        type={type}
                        align={align}
                    />
                )
            })}
        </div>
    )
}

export default Tree