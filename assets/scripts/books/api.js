'use strict'

const app = require('../app.js')
const store = require('../store')
// const gameStore = require('../gameStore')

// read
const getItems = function () {
  return $.ajax({
    url: app.host + '/new_items', // "http://book-json.herokuapp.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// create
// need to update this to use form input
const createItem = function (ajaxSend) {
  return $.ajax({
    url: app.host + '/new_items', // "http://book-json.herokuapp.com/books"
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // data: {
    //   'new_item': {
    //     'name': 'ajax_glove' // this should be from the form
    //   }
    // }
    data: ajaxSend
  })
}

// delete this once createItem is working
// const updateGameState = (ajaxSend) => {
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + gameStore.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: ajaxSend
//   })
// }

// update
// need to probably update this path to find the item id, not just the user id
// this should run every time the list is updated in the browser? or when the user clicks save?
const updateItems = function () {
  return $.ajax({
    url: app.host + '/new_items/' + app.user.id, // "http://book-json.herokuapp.com/books"
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'new_item': {
        'name': 'ajax_glove'
      }
    }
  })
}

// delete
// need to probably update this path to find the item id, not just the user id
// this should run every time the list item is deleted? or when the user clicks save?
const deleteItems = function () {
  return $.ajax({
    url: app.host + '/new_items/' + app.user.id, // "http://book-json.herokuapp.com/books"
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getItems,
  createItem,
  updateItems,
  deleteItems
}
