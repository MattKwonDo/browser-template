'use strict'

const config = require('../config')
const store = require('../store')

// read
const getItems = function () {
  return $.ajax({
    url: config.host + '/new_items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// read item 29
const getItem29 = function () {
  return $.ajax({
    url: config.host + '/new_items/29',
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
    url: config.host + '/new_items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ajaxSend
  })
}

// update
// this should run every time the list is updated in the browser? or when the user clicks save?
const updateItem = function (item, ajaxSend) {
  return $.ajax({
    url: config.host + '/new_items/' + item,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ajaxSend
  })
}

// delete
// this should run every time the list item is deleted? or when the user clicks save?
const deleteItems = function (item) {
  return $.ajax({
    url: config.host + '/new_items/' + item,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getItems,
  getItem29,
  createItem,
  updateItem,
  deleteItems
}
