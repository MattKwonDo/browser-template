'use strict'

const api = require('./api.js') // has ajax codes that connect to the backend
const ui = require('./ui.js') // has the code for displaying the front end after connecting to the backend
// const getFormFields = require(`../../../lib/get-form-fields`) // has the code that gets the form data

// read
const onGetItems = (event) => {
  event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.getItemsFailure)
}

// create
const onCreateItem = function (event) {
  // const data = getFormFields(this)
  event.preventDefault()
  console.log(this)
  console.log(this.id)
  // console.log(data)
  console.log('document: ')
  console.log(document)
  const nameValue = document.getElementById('new-item-input').value
  console.log('field input :' + nameValue)

  console.log(event)
  const ajaxSend = {
    'new_item': {
      'name': nameValue // this should be from the form
    }
  }
  api.createItem(ajaxSend)
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
  $('#create-item').on('submit', onCreateItem)
  // $('#sign-up').on('submit', onSignUp)
  // read
// what's the reason for using click as opposed to submit here?
  $('#getItemsButton').on('click', onGetItems)
  // update
// what's the reason for using click as opposed to submit here?
  $('#updateItemsButton').on('click', onUpdateItems)
  // delete
// do we need clear anymore?
// what's the reason for using click as opposed to submit here?
  $('#clearBooksButton').on('click', onClearBooks)
  $('#deleteItemsButton').on('click', onDeleteItems)
}

module.exports = {
  addHandlers
}
