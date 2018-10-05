const API_URL = process.env.REACT_APP_API_URL;
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    
export const fetchScores = () => {
    return dispatch => {
        return fetch(proxyUrl + API_URL)
        .then(response => response.json())
        .then(games => dispatch(updateGames(games)))
        .catch(error => console.log(error));
    }
}

export const updateGames = (games) => {
    return { type: "UPDATE_GAMES", games: games }
}

export const saveGame = (user, score) => {
    let body = JSON.stringify({game: {user: user, score: score} })
    return dispatch => {
        return fetch(`${API_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body,
      }).then(response => response.json())
      .then(game => dispatch(addGame(game)))
      .catch(error => console.log(error));
    }
}

export const addGame = (game) => {
    return { type: "ADD_GAME", game: game }
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
