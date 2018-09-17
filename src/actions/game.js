export const fetchTopScore = () => {
    return { type: "FETCH_TOP_SCORE" }
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

export const collectLeaf = (score, trees, basket) => {
    return { type: "COLLECT_LEAF", score: score, trees: trees, basket: basket }
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
