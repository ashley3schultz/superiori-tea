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
        games: [],
    }, action) {
    switch (action.type) {

        case "UPDATE_GAMES":
            return {...state, games: action.games}

        case "ADD_GAME":
            return {...state, games: state.games.concat(action.game)}

        case "UPDATE_USER":
            return {...state, user: action.input}

        case "START_LEVEL":
            return {...state,
              msg: rules[state.level].tips,
              level: state.level,
              scores: state.scores,
              score: 0,
              trees: trees.sort((a, b) => Math.random() - Math.random()),
              basket: emptyBasket,
              time: 18,
              playing: true,
              user: state.user,
              games: state.games,
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
                id: tree.id, name: tree.name, tag: tree.tag,
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
              trees: trees,
              basket: emptyBasket,
              time: 18,
              playing: false,
              user: state.user,
              games: state.games,
            }

        case "RESET_GAME":
            return {...state,
                msg: undefined,
                level: 0,
                scores: [],
                score: 0,
                trees: trees,
                basket: emptyBasket,
                time: 18,
                playing: false,
                user: state.user,
                games: state.games,
            }

        default:
            return state;
    } 
  }
