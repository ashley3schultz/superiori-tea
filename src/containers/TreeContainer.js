import React, { Component } from 'react';
// import Tree from './component/Tree'

// const trees = [["stem", "<img src='../public/images/1.png alt='1'/>", '<img/>', '<img/>'], [], [], [], []]

class TreeContainer extends Component {

    // const LevelTrees = trees[this.props.level].map(tree => <Tree tree={this.state}/>)

    // state = trees[this.props.level]

  render() {
    return (
      <div className="Game">
        {}
        {/* <Tree tree={trees[this.props.level]}/> */}
      </div>
    );
  }
}

export default TreeContainer