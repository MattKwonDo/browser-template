'use strict'

const app = require('../app.js')

let getBooks = function () {
  return $.ajax({
    url: app.host + '/new_items', // "http://book-json.herokuapp.com/books"
    method: 'GET'
  })
}

module.exports = {
  getBooks
}
