// import {FETCH_TOP_SCORES} from '../actions/actionTypes';

export default function game(state = [], action) {
  switch (action.type) {
    case FETCH_TOP_SCORES:
      return state;
    default:
      return state;
  }
}