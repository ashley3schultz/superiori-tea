import {emptyBasket, trees, rules} from '../components/Data'
  
export default function gameReducer(
    state = {
        msg: undefined,
        level: 0,
        scores: [],
        score: 0,
        trees: trees,
        basket: emptyBasket,
        time: 18,
        playing: false,
        user: '',
        topScore: {},
    }, action) {
    switch (action.type) {
        case "UPDATE_TOP_SCORE":
            return {...state, topScore: action.game}

        case "UPDATE_USER":
            return {...state, user: action.input}

        case "START_LEVEL":
            return {...state,
              msg: rules[state.level].tips,
              level: state.level,
              scores: state.scores,
              score: 0,
              trees: trees.sort(function(a, b){ return Math.random() - Math.random() }),
              basket: emptyBasket,
              time: 18,
              playing: true,
              user: state.user,
              topScore: state.topScore,
            }

        case "REDUCE_TIME":
            return {...state, time: state.time - 1}

        case "COLLECT_LEAF":
            const basket = {
                cultivar: state.basket.cultivar + action.c,
                quality: state.basket.quality + action.q,
                total: state.basket.total + 1
            }
            return {...state, basket: basket}

        case "UPDATE_TREES":
            const newTrees = state.trees.map(tree => { 
                return {
                id: tree.id, name: tree.name, 
                leaves: tree.leaves.map(leaf => {
                    return {name: leaf.name, id: leaf.id, status: (leaf.id === action.id) ? 'hide' : leaf.status}
                })
            }})
            return {...state, trees: newTrees}

        case "UPDATE_SCORE":
        return {...state, score: action.score}

        case "SET_NEXT_LEVEL":
            return {...state,
              msg: undefined,
              level: state.level + 1,
              scores: state.scores.concat(state.score),
              score: 0,
              trees: trees.slice(),
              basket: emptyBasket,
              time: 18,
              playing: false,
              user: state.user,
              topScore: state.topScore,
            }

        case "RESET_GAME":
            console.log('new game loaded')
            return {...state,
                msg: undefined,
                level: 0,
                scores: [],
                score: 0,
                trees: trees.slice(),
                basket: emptyBasket,
                time: 18,
                playing: false,
                user: '',
                topScore: state.topScore,
            }

        default:
            return state;
    } 
  }
