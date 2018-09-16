// import {playGame, collectLeaf} from '../actions/game';
import {emptyBasket, trees, rules} from '../components/Data'

export default function gameReducer(
    state = {
        msg: undefined,
        level: 0,
        scores: [],
        score: 0,
        trees: trees.slice(),
        basket: emptyBasket,
        time: 15,
        rules: rules,
        playing: false,
    }, action) {
    switch (action.type) {

        case "PLAY_GAME":
            console.log('playing game')
            return {...state, msg: 'playing game'}
            // {...state, basket: {...state.basket, total: [state.basket.total, action.leaf]}}
        
        case "COLLECT_LEAF":
            console.log('collacting leaf')
            // const trees = state.basket.trees.map(tree => {
            //   tree.leaves.filter(leaf => leaf.id !== action.id);
            // })
            // return {...state, trees}
            return state



        default:
          return state;
          
    }
  }

//   playGame = () => {
//     this.setState({playing: true})
//     if (this.state.time > 0) { //ajusts timer
//         this.setState({msg: rules[this.state.level].tips})
//         this.setState({time: this.state.time - 1})
//         setTimeout(this.playGame, 1000);
//     } else if (this.state.time === 0) {
//         if (this.state.level < 4) { //sets state for next level
//           // console.log(this.state.basket)
//             this.setState({msg: undefined})
//             this.setState({level:  this.state.level + 1})
//             this.setState({scores: this.state.scores.concat(this.state.score)})
//             this.setState({trees: trees.slice()})
//             this.setState({basket: emptyBasket})
//             this.setState({time: 15})
//             this.setState({score: 0})
//             this.setState({playing: false})
//         } else {
//             this.setState({msg: undefined})
//             this.setState({scores: this.state.scores.concat(this.state.score)})
//             this.calculateScore()
//             this.saveGame()
//             this.resetGame()
//             this.setState({playing: false})
//         }
//     }
// }

// resetGame = () => {
//     this.setState({level: 0})
//     this.setState({score: []})
//     this.setState({trees: trees.slice()})
//     this.setState({basket: emptyBasket})
//     this.setState({time: 15})
//     this.setState({msg: undefined})
// }

// saveGame = () => {
//   console.log('game saved')
// }

// calculateScore = () => {
//   if (this.state.scores.length === 5) {
//     this.setState({score: (this.state.scores[0] + this.state.scores[1] + this.state.scores[2] + this.state.scores[3] + this.state.scores[4])})
//   } else {
//   var purity = this.state.basket.pureCultivar / this.state.basket.total * 100 || 0
//   var quality = this.state.basket.qualityLeaves / this.state.basket.pureCultivar * 100 || 0
//   var outOf = this.state.basket.pureCultivar / this.state.rules[this.state.level].outOf *100 || 0
//   var total = (Math.floor(purity) + Math.floor(quality) + Math.floor(outOf))
//   this.setState({score: total})
//   }
// }

// hideLeaf = (id) => {
//   console.log('hidden')
//   // let lLeaf = {...this.state.trees[this.state.level].leaves.left}
//   // let rLeaf = {...this.state.trees[this.state.level].leaves.right}
//   this.setState({trees: {
//     ...this.state.trees,
//       ...trees[this.state.level], 
//       leaves: 0
//       // {
//       //   ...trees[this.state.level].leaves,
//       //   left: {
//       //     ...trees[this.state.level].leaves.left[0],
//       //     'show': false
//       //   }
//       // } 
//   } })
//   console.log(this.state.trees[this.state.level].leaves)
  
//   // var leaf = this.state.trees.map((t) => {
//   //   var left = t.leaves.left.map(ll => {
//   //     if (ll.id === id) {
//   //       ll
//   //     }
//   //   })
//   //   var right = t.leaves.right.map(rl => {
//   //     if (rl.id === id) {
//   //       return (
//   //         rl
//   //       )
//   //     }
//   //   })
//   // })
//   // return leaf
//   // console.log(leaf)
// }

// addBasketTotal = () => {
//   this.setState({ basket: { ...this.state.basket, total: this.state.basket.total + 1} });
// }

// addBasketPureCultivar = () => {
//   // console.log('Right Cultivar')
//   this.setState({ basket: { ...this.state.basket, pureCultivar: this.state.basket.pureCultivar + 1} });
// }

// // addBasketQualityLeaves = () => {
// //   // console.log('High Quality')
// //   this.setState({ basket: { ...this.state.basket, qualityLeaves: this.state.basket.qualityLeaves + 1} });
// // }

// collectLeaf = (event) => {
//   const leaf = event.target.getAttribute('id').split('*')
//   const cultivar = this.state.rules[this.state.level].purity
//   const quality = this.state.rules[this.state.level].quality
//   if (leaf[1].length < 4 && this.state.playing === true) {
//     if (leaf[0] === cultivar) {
//       if (parseInt(leaf[1], 10) <= quality) {
//         this.addBasketQualityLeaves()
//       }
//       this.addBasketPureCultivar()
//     }
//     this.props.basketTotal(event.target)
//     // this.addBasketTotal()
//     this.hideLeaf(leaf[2])
//     this.calculateScore()
//   }
// }
