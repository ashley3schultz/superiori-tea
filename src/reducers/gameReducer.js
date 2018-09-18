// import {playGame, collectLeaf} from '../actions/game';
import {emptyBasket, trees, rules} from '../components/Data'
// import axios from 'axios'
  
export default function gameReducer(
    state = {
        msg: undefined,
        level: 0,
        scores: [],
        score: 0,
        trees: trees,
        basket: emptyBasket,
        time: 15,
        playing: false,
        user: '',
        topScore: {},
    }, action) {
        console.log(action)
    switch (action.type) {
        case "FETCH_TOP_SCORE":
            console.log('reducer Top Score')
            return {...state, topScore: action.game}

        case "UPDATE_INPUT":
            console.log('input updated')
            return {...state, user: action.input}

        case "START_LEVEL":
            console.log('level started')
            return {...state,
              msg: rules[state.level].tips,
              level: state.level,
              scores: state.scores,
              score: 0,
              trees: trees.sort(function(a, b){ return Math.random() - Math.random() }),
              basket: emptyBasket,
              time: 15,
              playing: true,
              user: state.user,
              topScore: state.topScore,
            }

        case "REDUCE_TIME":
            return {...state, time: state.time - 1}

        case "COLLECT_LEAF":
            console.log('leaf collected')
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
        console.log('score updated')
        return {...state, score: action.score}

        case "SET_NEXT_LEVEL":
            console.log('next level loaded')
            return {...state,
              msg: undefined,
              level: state.level + 1,
              scores: [state.scores, state.score],
              score: 0,
              trees: trees.slice(),
              basket: emptyBasket,
              time: 15,
              playing: false,
              user: state.user,
              topScore: state.topScore,
            }

        case "SAVE_GAME":
            console.log('game saved')
            // *** Calculate Score ***
            // *** Send To Api ***
            // *** Fetch Api ***
            return state

        case "RESET_GAME":
            console.log('new game loaded')
            return {...state,
                msg: undefined,
                level: 0,
                scores: [],
                score: 0,
                trees: trees.slice(),
                basket: emptyBasket,
                time: 15,
                playing: false,
                user: '',
                topScore: state.topScore,
            }

        default:
            return state;
    } 
  }
