var uuid = require('react-native-uuid');

const leaves = {
  b: [
    {name: 'a2', id: uuid(), status: 'show'},
    {name: 'a4', id: uuid(), status: 'show'},
    {name: 'a6', id: uuid(), status: 'show'},
    {name: 'a8', id: uuid(), status: 'show'},
    {name: 'a10', id: uuid(), status: 'show'},
    {name: 'a12', id: uuid(), status: 'show'},
    {name: 'a14', id: uuid(), status: 'show'},
    {name: 'a16', id: uuid(), status: 'show'},
    {name: 'a1', id: uuid(), status: 'show'},
    {name: 'a3', id: uuid(), status: 'show'},
    {name: 'a5', id: uuid(), status: 'show'},
    {name: 'a7', id: uuid(), status: 'show'},
    {name: 'a9', id: uuid(), status: 'show'},
    {name: 'a11', id: uuid(), status: 'show'},
    {name: 'a13', id: uuid(), status: 'show'},
    {name: 'a15', id: uuid(), status: 'show'}
  ],
  g: [
    {name: 'b1', id: uuid(), status: 'show'},
    {name: 'b3', id: uuid(), status: 'show'},
    {name: 'b5', id: uuid(), status: 'show'},
    {name: 'b7', id: uuid(), status: 'show'},
    {name: 'b9', id: uuid(), status: 'show'},
    {name: 'b11', id: uuid(), status: 'show'},
    {name: 'b13', id: uuid(), status: 'show'},
    {name: 'b15', id: uuid(), status: 'show'},
    {name: 'b2', id: uuid(), status: 'show'},
    {name: 'b4', id: uuid(), status: 'show'},
    {name: 'b6', id: uuid(), status: 'show'},
    {name: 'b8', id: uuid(), status: 'show'},
    {name: 'b10', id: uuid(), status: 'show'},
    {name: 'b12', id: uuid(), status: 'show'},
    {name: 'b14', id: uuid(), status: 'show'},
    {name: 'b16', id: uuid(), status: 'show'}
  ],
  o: [
    {name: 'a2', id: uuid(), status: 'show'},
    {name: 'a4', id: uuid(), status: 'show'},
    {name: 'a6', id: uuid(), status: 'show'},
    {name: 'a8', id: uuid(), status: 'show'},
    {name: 'a10', id: uuid(), status: 'show'},
    {name: 'a12', id: uuid(), status: 'show'},
    {name: 'a14', id: uuid(), status: 'show'},
    {name: 'a16', id: uuid(), status: 'show'},
    {name: 'a1', id: uuid(), status: 'show'},
    {name: 'a3', id: uuid(), status: 'show'},
    {name: 'a5', id: uuid(), status: 'show'},
    {name: 'a7', id: uuid(), status: 'show'},
    {name: 'a9', id: uuid(), status: 'show'},
    {name: 'a11', id: uuid(), status: 'show'},
    {name: 'a13', id: uuid(), status: 'show'},
    {name: 'a15', id: uuid(), status: 'show'}
  ],
  w: [
    {name: 'b1', id: uuid(), status: 'show'},
    {name: 'b3', id: uuid(), status: 'show'},
    {name: 'b5', id: uuid(), status: 'show'},
    {name: 'b7', id: uuid(), status: 'show'},
    {name: 'b9', id: uuid(), status: 'show'},
    {name: 'b11', id: uuid(), status: 'show'},
    {name: 'b13', id: uuid(), status: 'show'},
    {name: 'b15', id: uuid(), status: 'show'},
    {name: 'b2', id: uuid(), status: 'show'},
    {name: 'b4', id: uuid(), status: 'show'},
    {name: 'b6', id: uuid(), status: 'show'},
    {name: 'b8', id: uuid(), status: 'show'},
    {name: 'b10', id: uuid(), status: 'show'},
    {name: 'b12', id: uuid(), status: 'show'},
    {name: 'b14', id: uuid(), status: 'show'},
    {name: 'b16', id: uuid(), status: 'show'}
  ],
  y: [
    {name: 'a2', id: uuid(), status: 'show'},
    {name: 'a4', id: uuid(), status: 'show'},
    {name: 'a6', id: uuid(), status: 'show'},
    {name: 'a8', id: uuid(), status: 'show'},
    {name: 'a10', id: uuid(), status: 'show'},
    {name: 'a12', id: uuid(), status: 'show'},
    {name: 'a14', id: uuid(), status: 'show'},
    {name: 'a16', id: uuid(), status: 'show'},
    {name: 'a1', id: uuid(), status: 'show'},
    {name: 'a3', id: uuid(), status: 'show'},
    {name: 'a5', id: uuid(), status: 'show'},
    {name: 'a7', id: uuid(), status: 'show'},
    {name: 'a9', id: uuid(), status: 'show'},
    {name: 'a11', id: uuid(), status: 'show'},
    {name: 'a13', id: uuid(), status: 'show'},
    {name: 'a15', id: uuid(), status: 'show'}
  ]
}

export const trees = [
    {tag: 'Da Ye Zhong', name: 'b', id:  uuid(), leaves: leaves.b},
    {tag: 'Long Jing', name: 'g', id:  uuid(), leaves: leaves.g},
    {tag: 'Tie Guan Yin', name: 'o', id:  uuid(), leaves: leaves.o},
    {tag: 'Da Bai', name: 'w', id:  uuid(), leaves: leaves.w},
    {tag: 'Jin Ji', name: 'y', id:  uuid(), leaves: leaves.y}]

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
