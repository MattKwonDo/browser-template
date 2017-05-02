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
  // console.log(this)
  // console.log(this.id)
  // // console.log(data)
  // console.log('document: ')
  // console.log(document)
  const nameValue = document.getElementById('new-item-input').value
  // console.log('field input :' + nameValue)
  //
  // console.log(event)
  // console.log(event.target)
  // console.log(event.target.id)
  // console.log(event)
  const ajaxSend = {
    'new_item': {
      'name': nameValue // this should be from the form
    }
  }
  api.createItem(ajaxSend)
    .then(ui.createItemsSuccess)
    .catch(ui.createItemsFailure)
  // refresh the page with all data
  // setTimeout(
  // api.getItems()
  //   .then(ui.getItemsSuccess)
  //   .catch(ui.getItemsFailure), 1000)
}

// update
const onUpdateItem = (event) => {
  // const data = getFormFields(this)
  event.preventDefault()
  // console.log('event: ')
  // console.log(event)
  const id = event.target.id
  // console.log('id: ' + id)
  const item = 'input-' + event.target.id
  // const item = this.attr('data-id')
  // console.log('item: ' + item)

  // const data = getFormFields(id)
  // console.log(data)
  // console.log($(this).data('id'))
  // console.log($(this).data('id'))
  // console.log($(this).attr('data-id')) // undefined

  // console.log('document: ')
  // console.log(document)
  const nameValue = document.getElementById(item).value // this needs to be the id of the input field
  // const nameValue = document.getElementById('update-item-input-29').value // this needs to be the id of the input field
  // console.log('field input :' + nameValue)

  // console.log(event)
  const ajaxSend = {
    'new_item': {
      'name': nameValue // this should be from the form
    }
  }
  api.updateItem(id, ajaxSend)
    .then(ui.updateItemsSuccess)
    .catch(ui.updateItemsFailure)
  // refresh the page with all data
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.getItemsFailure)
}

// hide
// const onClearBooks = (event) => {
//   event.preventDefault()
//   ui.clearBooks()
// }

// delete
const onDeleteItems = () => {
  // const data = getFormFields(this)
  event.preventDefault()
  // console.log('event: ')
  // console.log(event)
  const id = event.target.id
  // console.log('id: ' + id)
  // const item = 'input-' + event.target.id
  // const item = this.attr('data-id')
  // console.log('item: ' + item)

  // const data = getFormFields(id)
  // console.log(data)
  // console.log('test')
  // console.log($(this).data('id'))
  // console.log(this)

  // console.log($(this).data('id')) // undefined

  api.deleteItems(id)
    .then(ui.deleteItemsSuccess(id))
    .catch(ui.deleteItemsFailure)
}

const addHandlers = () => {
// create
  $('#create-item').on('submit', onCreateItem)
  // $('#create-item').delay(1000).fadeIn(onGetItems())
// read
  $('#getItemsButton').on('click', onGetItems)
// update
  $('.content').on('submit', '.update-group', onUpdateItem)
// delete
  // $('#clearBooksButton').on('click', onClearBooks)
  $('.content').on('submit', '.remove-group', onDeleteItems)
  // $(document).on('click', '.update-group', boardActions.onGetBoard)
}

module.exports = {
  addHandlers
}
