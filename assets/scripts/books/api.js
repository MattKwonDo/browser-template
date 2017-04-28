'use strict'

const app = require('../app.js')
const store = require('../store')
// const gameStore = require('../gameStore')

// read
const getBooks = function () {
  return $.ajax({
    url: app.host + '/new_items', // "http://book-json.herokuapp.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// create
// need to update this to do an ajax method to delete the thing from the database
const createItems = function () {
  return $.ajax({
    url: app.host + '/new_items', // "http://book-json.herokuapp.com/books"
    method: 'POST',
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

// update
// need to update this to do an ajax method to delete the thing from the database
// need id included
const updateItems = function () {
// need ID here
  return $.ajax({
    url: app.host + '/new_items/' + ID, // "http://book-json.herokuapp.com/books"
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
// need to update this to do an ajax method to delete the thing from the database
// need id included
const deleteItems = function () {
// need ID here
  return $.ajax({
    url: app.host + '/new_items', // "http://book-json.herokuapp.com/books"
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBooks,
  createItems,
  updateItems,
  deleteItems
}
