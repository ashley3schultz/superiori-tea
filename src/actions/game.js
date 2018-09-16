export const playGame = () => {
    return { type: "PLAY_GAME" }
  }
  
export const collectLeaf = (leaf) => {
    return { type: "COLLECT_LEAF", leaf: leaf }
}