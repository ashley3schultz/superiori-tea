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

        case "UPDATE_INPUT":
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
            return {...state,
              msg: state.msg,
              level: state.level,
              scores: state.scores,
              score: state.score,
              trees: action.trees,
              basket: action.basket,
              time: state.time,
              playing: state.playing,
              user: state.user,
              topScore: state.topScore,
            }
        
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
