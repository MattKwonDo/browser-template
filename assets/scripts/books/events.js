'use strict'

const api = require('./api.js') // has ajax codes that connect to the backend
const ui = require('./ui.js') // has the code for displaying the front end after connecting to the backend
const getFormFields = require(`../../../lib/get-form-fields`) // has the code that gets the form data

// read
const onGetItems = (event) => {
  event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.getItemsFailure)
}
const onGetItem29 = (event) => {
  event.preventDefault()
  api.getItem29()
    .then(ui.getItem29Success)
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
  console.log(event.target)
  console.log(event.target.id)
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
const onUpdateItem = (event) => {
  // const data = getFormFields(this)
  event.preventDefault()
  console.log('event: ')
  console.log(event)
  console.log('this: ') // undefined
  console.log(this) // undefined
  // console.log(event.id)
  // console.log('this: ' + this)
  console.log($(this).attr('data-id')) // undefined
  // console.log(.data())
  console.log($(this).data('id')) // undefined
  console.log(event)
  console.log(event.target)
  console.log(event.target.id)
  console.log(event)
  const id = $(this).attr('data-id')
  const data = getFormFields(id)
  console.log(data)
  console.log('updating: ', id)
  $(this).closest('div').slideToggle()

  const item = 29
  // const nameValue = document.getElementById('update-item-input').value
  // console.log('this value' + document.getElementById(this).value)
  // console.log('this value' + document.getElementById(this).value)
  // console.log(data)
  console.log('document: ')
  console.log(document)
  const nameValue = document.getElementById('update-item-input').value
  console.log('field input :' + nameValue)

  console.log(event)
  const ajaxSend = {
    'new_item': {
      'name': nameValue // this should be from the form
    }
  }
  api.updateItem(item, ajaxSend)
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
  $('#getItem29Button').on('click', onGetItem29)
  // update
// what's the reason for using click as opposed to submit here?
  // $('#updateItemsButton').on('submit', onUpdateItem)
  $('#update-item-29').on('submit', onUpdateItem)
  $('.update-group').on('click', onUpdateItem)
  $('#2').on('submit', onUpdateItem)
  // delete
// do we need clear anymore?
// what's the reason for using click as opposed to submit here?
  $('#clearBooksButton').on('click', onClearBooks)
  $('#deleteItemsButton').on('click', onDeleteItems)
  $('#deleteItem29Button').on('click', onDeleteItems)
  // $('.removeBooksButton').on('click', removeBooksSuccess)
  // $(document).on('click', '.update-group', boardActions.onGetBoard)
}

module.exports = {
  addHandlers
}
