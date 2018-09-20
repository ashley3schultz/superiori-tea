const API_URL = process.env.REACT_APP_API_URL;

export const fetchScores = () => {
    return dispatch => {
        return fetch(`${API_URL}.json`)
        .then(response => response.json())
        .then(games => dispatch(updateScores(games)))
        .catch(error => console.log(error));
    }
}

export const updateScores = (games) => {
    return { type: "UPDATE_SCORES", games: games }
}

export const saveGame = (name, score) => {
    let body = JSON.stringify({game: {name: name, score: score} })
    return dispatch => {
        return fetch(`${API_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body,
      }).then(response => response.json())
      .then(game => dispatch(updateScores(game)))
      .catch(error => console.log(error));
    }
}

export const updateUser = (input) => {
    return { type: "UPDATE_USER", input: input }
}

export const startLevel = () => {
    return { type: "START_LEVEL" }
}

export const reduceTime = () => {
    return { type: "REDUCE_TIME" }
}

export const collectLeaf = (c, q) => {
    return { type: "COLLECT_LEAF", c: c, q: q}
}

export const updateTrees = (id) => {
      return { type: "UPDATE_TREES", id: id}
}

export const updateScore = (score) => {
    return { type: "UPDATE_SCORE", score: score }
}

export const setNextLevel = () => {
    return { type: "SET_NEXT_LEVEL" }
}

export const resetGame = () => {
    return { type: "RESET_GAME" }
}
