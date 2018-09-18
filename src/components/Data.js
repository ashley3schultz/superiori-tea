var uuid = require('react-native-uuid');

const leaves = {
  a: [
    {name: 'a2', id: uuid(), show: true},
    {name: 'a4', id: uuid(), show: true},
    {name: 'a6', id: uuid(), show: true},
    {name: 'a8', id: uuid(), show: true},
    {name: 'a10', id: uuid(), show: true},
    {name: 'a12', id: uuid(), show: true},
    {name: 'a14', id: uuid(), show: true},
    {name: 'a16', id: uuid(), show: true},
    {name: 'a1', id: uuid(), show: true},
    {name: 'a3', id: uuid(), show: true},
    {name: 'a5', id: uuid(), show: true},
    {name: 'a7', id: uuid(), show: true},
    {name: 'a9', id: uuid(), show: true},
    {name: 'a11', id: uuid(), show: true},
    {name: 'a13', id: uuid(), show: true},
    {name: 'a15', id: uuid(), show: true}
  ],
  b: [
    {name: 'b1', id: uuid(), show: true},
    {name: 'b3', id: uuid(), show: true},
    {name: 'b5', id: uuid(), show: true},
    {name: 'b7', id: uuid(), show: true},
    {name: 'b9', id: uuid(), show: true},
    {name: 'b11', id: uuid(), show: true},
    {name: 'b13', id: uuid(), show: true},
    {name: 'b15', id: uuid(), show: true},
    {name: 'b2', id: uuid(), show: true},
    {name: 'b4', id: uuid(), show: true},
    {name: 'b6', id: uuid(), show: true},
    {name: 'b8', id: uuid(), show: true},
    {name: 'b10', id: uuid(), show: true},
    {name: 'b12', id: uuid(), show: true},
    {name: 'b14', id: uuid(), show: true},
    {name: 'b16', id: uuid(), show: true}
  ]
}

export const trees = [
    {name: 'b', id:  uuid(), leaves: leaves.a},
    {name: 'g', id:  uuid(), leaves: leaves.b},
    {name: 'o', id:  uuid(), leaves: leaves.a},
    {name: 'w', id:  uuid(), leaves: leaves.b},
    {name: 'y', id:  uuid(), leaves: leaves.a}]

export const rules = [
    {cultivar: 'b', quality: 6, outOf: 6, tips: 'Black Tea Challenge, Only pick the young leaves from da ye zhong cultivar'},
    {cultivar: 'g', quality: 4, outOf: 4, tips: 'Green Tea Challenge, Only pick the buds from long jing cultivar'},
    {cultivar: 'o', quality: 6, outOf: 6, tips: 'Oolong Tea Challenge, Only pick the up to the fourth leaf from tie guan yin cultivar'},
    {cultivar: 'w', quality: 2, outOf: 2, tips: 'White Tea Challenge, Only pick the buds from da bai cultivar'},
    {cultivar: 'y', quality: 4, outOf: 4, tips: 'Yellow Tea Challenge, Only pick the buds from jin ji cultivar'}]

export const emptyBasket = {
    cultivar: 0,
    quality: 0,
    total: 0}
