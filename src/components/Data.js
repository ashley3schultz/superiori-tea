import React from 'react';

const leaves = {
  a: {right: [
    {name: 'leaf-a2', id: uuid()},
    {name: 'leaf-a4', id: uuid()},
    {name: 'leaf-a6', id: uuid()},
    {name: 'leaf-a8', id: uuid()},
    {name: 'leaf-a10', id: uuid()},
    {name: 'leaf-a12', id: uuid()},
    {name: 'leaf-a14', id: uuid()},
    {name: 'leaf-a16', id: uuid()}],
  left: [
    {name: 'leaf-a1', id: uuid()},
    {name: 'leaf-a3', id: uuid()},
    {name: 'leaf-a5', id: uuid()},
    {name: 'leaf-a7', id: uuid()},
    {name: 'leaf-a9', id: uuid()},
    {name: 'leaf-a11', id: uuid()},
    {name: 'leaf-a13', id: uuid()},
    {name: 'leaf-a15', id: uuid()}]
  },
  b: {left: [
    {name: 'leaf-b2', id: uuid()},
    {name: 'leaf-b4', id: uuid()},
    {name: 'leaf-b6', id: uuid()},
    {name: 'leaf-b8', id: uuid()},
    {name: 'leaf-b10', id: uuid()},
    {name: 'leaf-b12', id: uuid()},
    {name: 'leaf-b14', id: uuid()},
    {name: 'leaf-b16', id: uuid()}],
  right: [
    {name: 'leaf-b1', id: uuid()},
    {name: 'leaf-b3', id: uuid()},
    {name: 'leaf-b5', id: uuid()},
    {name: 'leaf-b7', id: uuid()},
    {name: 'leaf-b9', id: uuid()},
    {name: 'leaf-b11', id: uuid()},
    {name: 'leaf-b13', id: uuid()},
    {name: 'leaf-b15', id: uuid()}]
  }}

export default const trees = [
    {stem: 'stem-b', leaves: leaves.a},
    {stem: 'stem-g', leaves: leaves.b},
    {stem: 'stem-o', leaves: leaves.a},
    {stem: 'stem-w', leaves: leaves.b},
    {stem: 'stem-y', leaves: leaves.a}]

export default const rules = [
    {purity: 'b', quality: 6, outOf: 6},
    {purity: 'g', quality: 4, outOf: 4},
    {purity: 'o', quality: 6, outOf: 6},
    {purity: 'w', quality: 2, outOf: 2},
    {purity: 'y', quality: 4, outOf: 4}]

export default const emptyBasket = {
    pureCultivar: 0,
    qualityLeaves: 0,
    total: 0}
