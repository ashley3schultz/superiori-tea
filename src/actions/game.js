// const API_URL = process.env.REACT_APP_API_URL;

export const fetchTopScore = () => {
    return dispatch => {
        return fetch(`http://192.168.1.30:3001/api/v1/games.json`)
        .then(response => response.json())
        .then(game => dispatch(updateTopScore(game)))
    }
}

export const saveGame = (name, score) => {
    let body = JSON.stringify({game: {name: name, score: score} })
    return dispatch => {
        return fetch('http://192.168.1.30:3001/api/v1/games', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body,
      }).then(response => response.json())
      .then(game => dispatch(updateTopScore(game)))
    }
}

// export const fetchAllScores = () => {
//     return dispatch => {
//         return fetch(`http://192.168.1.30:3001/api/v1/games.json`)
//         .then(response => response.json())
//         .then(game => dispatch(updateTopScore(game)))
//     }
// }

// export const fetchMyScores = () => {
//     return dispatch => {
//         return fetch(`http://192.168.1.30:3001/api/v1/games.json`)
//         .then(response => response.json())
//         .then(game => dispatch(updateTopScore(game)))
//     }
// }

export const updateTopScore = (game) => {
    return { type: "UPDATE_TOP_SCORE", game: game }
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

export const collectLeaf = (trees, basket) => {
    return { type: "COLLECT_LEAF", trees: trees, basket: basket }
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
