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
  event.preventDefault()
  const nameValue = document.getElementById('new-item-input').value
  // console.log('field input :' + nameValue)
  const ajaxSend = {
    'new_item': {
      'name': nameValue // this should be from the form
    }
  }
  api.createItem(ajaxSend)
    .then(ui.createItemsSuccess)
    .catch(ui.createItemsFailure)
// refresh the page with all data
  // sleep(1000)
  // setTimeout(
  // api.getItems()
  //   .then(ui.getItemsSuccess)
  //   .catch(ui.getItemsFailure) // , 1000)
}
// function sleep (milliseconds) {
//   const start = new Date().getTime()
//   for (let i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds) {
//       break
//     }
//   }
// }

// update
const onUpdateItem = (event) => {
  event.preventDefault()
  // console.log('event: ')
  // console.log(event)
  const id = event.target.id
  // console.log('id: ' + id)
  const item = 'input-' + event.target.id
  // console.log('item: ' + item)
  // console.log($(this).data('id'))
  // console.log(document)
  const nameValue = document.getElementById(item).value // this needs to be the id of the input field
  // console.log('field input :' + nameValue)
  const ajaxSend = {
    'new_item': {
      'name': nameValue // this should be from the form
    }
  }
  api.updateItem(id, ajaxSend)
    .then(ui.updateItemsSuccess)
    .catch(ui.updateItemsFailure)
}

// hide
// const onClearItems = (event) => {
//   event.preventDefault()
//   ui.clearItems()
// }

// delete
const onDeleteItems = () => {
  event.preventDefault()
  const id = event.target.id
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
  $('.content').on('submit', '.update-item', onUpdateItem)
// delete
  // $('#clearItemsButton').on('click', onClearItems)
  $('.content').on('click', '.remove-item', onDeleteItems)
}

module.exports = {
  addHandlers
}
