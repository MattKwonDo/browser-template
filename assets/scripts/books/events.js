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
  const id = event.target.id
  console.log('id: ' + id)
  const item = 'input-' + event.target.id
  // const item = this.attr('data-id')
  console.log('item: ' + item)

  const data = getFormFields(id)
  console.log(data)

  console.log($(this).data('id'))
  console.log($(this).attr('data-id')) // undefined
  console.log(event)
  console.log(event.target)
  console.log(event.target.id)

  console.log('item: ' + item)
  console.log('document: ')
  console.log(document)
  const nameValue = document.getElementById(item).value // this needs to be the id of the input field
  // const nameValue = document.getElementById('update-item-input-29').value // this needs to be the id of the input field
  console.log('field input :' + nameValue)

  console.log(event)
  const ajaxSend = {
    'new_item': {
      'name': nameValue // this should be from the form
    }
  }
  api.updateItem(id, ajaxSend)
    .then(ui.updateItemsSuccess)
    .catch(ui.updateItemsFailure)
}

const onUpdateItem29 = (event) => {
  // const data = getFormFields(this)
  event.preventDefault()
  console.log('event: ')
  console.log(event)
  const id = event.target.id
  console.log('id: ' + id)
  const item = 29
  console.log('item: ' + item)

  const data = getFormFields(id)
  console.log(data)

console.log($(this).data('id'))

  // $(this).closest('div').slideToggle()
  const thisId = $(this).data('id')
  console.log('thisid: ' + thisId)

  // const nameValue = document.getElementById('update-item-input').value
  // console.log('this value' + document.getElementById(this).value)
  // console.log(data)

  // console.log('document: ')
  // console.log(document)
  // const nameValue = document.getElementById(event.target.id).value // this needs to be the id of the input field
// get field input
  const nameValue = document.getElementById('29').value // this needs to be the id of the input field
  console.log(nameValue)
  console.log(document.getElementById(id).value)
  console.log(document.getElementById(event.target.id).value)
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

const onDeleteItem5 = (event) => {
  event.preventDefault()
  api.deleteItems(5)
    .then(ui.deleteItemsSuccess)
    .catch(ui.deleteItemsFailure)
}

const onClick = (event) => {
  event.preventDefault()
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
  $('.update-item').on('submit', onUpdateItem29)
  $('.update-group').on('submit', onUpdateItem)
  $('#2').on('submit', onUpdateItem)
  // delete
// do we need clear anymore?
// what's the reason for using click as opposed to submit here?
  $('#clearBooksButton').on('click', onClearBooks)
  $('#deleteItemsButton').on('click', onDeleteItems)
  $('#deleteItem5Button').on('click', onDeleteItem5)
  // $('.removeBooksButton').on('click', removeBooksSuccess)
  // $(document).on('click', '.update-group', boardActions.onGetBoard)
  // $('.content').on('click', onClick)
}

module.exports = {
  addHandlers
}
