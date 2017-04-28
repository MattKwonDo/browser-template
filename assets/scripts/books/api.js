'use strict'

const app = require('../app.js')
const store = require('../store')
// const gameStore = require('../gameStore')

let getBooks = function () {
  return $.ajax({
    url: app.host + '/new_items', // "http://book-json.herokuapp.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBooks
}
