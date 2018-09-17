export const startLevel = () => {
    return { type: "START_LEVEL" }
}

export const changeLevel = () => {
    return { type: "CHANGE_LEVEL" }
}

export const saveReset = () => {
    return { type: "SAVE_RESET" }
}

export const collectLeaf = (basket) => {
    return { type: "COLLECT_LEAF", basket: basket }
}
