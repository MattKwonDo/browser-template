'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

// read
const onGetItems = (event) => {
  event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.getItemsFailure)
}

// create
const onCreateItems = (event) => {
  event.preventDefault()
  api.createItems()
    .then(ui.createItemsSuccess)
    .catch(ui.createItemsFailure)
}

// update
const onUpdateItems = (event) => {
  event.preventDefault()
  api.updateItems()
    .then(ui.updateItemsSuccess)
    .catch(ui.updateItemsFailure)
}

// delete
const onClearBooks = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

const onDeleteItems = (event) => {
  event.preventDefault()
  api.deleteItems()
    .then(ui.deleteItemsSuccess)
    .catch(ui.deleteItemsFailure)
}

const addHandlers = () => {
  // create
  $('#createItemsButton').on('click', onCreateItems)
  // read
  $('#getItemsButton').on('click', onGetItems)
  // update
  $('#updateItemsButton').on('click', onUpdateItems)
  // delete
  // do we need clear anymore?
  $('#clearBooksButton').on('click', onClearBooks)
  $('#deleteItemsButton').on('click', onDeleteItems)
}

module.exports = {
  addHandlers
}
