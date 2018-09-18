const API_URL = process.env.REACT_APP_API_URL;

export const fetchTopScore = (game) => {
    console.log('action top score')
    return { type: "FETCH_TOP_SCORE", game: game }
}

export const fetchGames = () => {
    return dispatch => {
        return fetch(`${API_URL}`)
          .then(response => response.json())
          .then(game => dispatch(fetchTopScore(game)))
          .catch(error => console.log(error));
      };
}

export const updateUser = (input) => {
  return { type: "UPDATE_INPUT", input: input }
}

export const startLevel = () => {
    return { type: "START_LEVEL" }
}

export const reduceTime = () => {
    return { type: "REDUCE_TIME" }
}

export const collectLeaf = (trees, basket) => {
    return { type: "COLLECT_LEAF", trees: trees, basket: basket }
}

export const updateScore = (score) => {
    return { type: "UPDATE_SCORE", score: score }
}

export const setNextLevel = () => {
    return { type: "SET_NEXT_LEVEL" }
}

export const saveGame = () => {
    return { type: "SAVE_GAME" }
}

export const resetGame = () => {
    return { type: "RESET_GAME" }
}
