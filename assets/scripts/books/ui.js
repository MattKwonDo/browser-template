'use strict'

const showBooksTemplate = require('../templates/book-listing.handlebars')

// read
const getItemsSuccess = (data) => {
  // console.log(data)
  const showBooksHtml = showBooksTemplate({ items: data.new_items })
  // debugger;
  $('.content').html(showBooksHtml) // .order
  // console.log(data.new_items)
  // console.log(data.new_items[0])
  // console.log(data.new_items[0].id)
  // console.log(data.new_items[0].name)
  // console.log(data.new_items[0].user)
  // console.log(data.new_items[0].user_id)
}

const getItemsFailure = () => { // (error) => {
  // console.error(error)
}

// clear the screen
const clearBooks = () => {
  $('.content').empty()
}

// create
// need to update this to show the data with an ajax call possibly from the database, possibly with an append child, but that would be messier
const createItemsSuccess = (data) => {
// append data to the end with an append child?
  // console.log(data)
  // console.log(data.new_item)
  // console.log(data.new_item.id)
  // console.log(data.new_item.name)
  // console.log(data.new_item.user)
  // console.log(data.new_item.user_id)
  // // let book_id = data.new_item.id
  //
  // console.log('data.new_items.id: ' + data.new_item.id)
  // $('.' + data.new_item.id).hide()
}

const createItemsFailure = () => { // (error) => {
  // console.error(error)
  $('#errors-create-item').text('Uh uh uh, you didnt say the magic word')
}

// update
// need to update this to do an ajax method to delete the thing from the database
const updateItemsSuccess = (data) => {
  // console.log(data)
  // console.log(data.new_item)
  // console.log(data.new_item.id)
  // console.log(data.new_item.name)
  // console.log(data.new_item.user)
  // console.log(data.new_item.user_id)
  // // let book_id = data.new_item.id
  //
  // console.log('data.new_item.id: ' + data.new_item.id)
  // $('.' + data.new_item.id).hide()
}

const updateItemsFailure = () => { // (error) => {
  // console.error(error)
}

// delete
// this is redundant with the removeBooksSuccess
const deleteItemsSuccess = (id) => {
  // console.log('delete success')
  // console.log(id)
  $('#total-' + id).hide()
}

const deleteItemsFailure = () => { // (error) => {
  // console.error(error)
}

module.exports = {
  // read
  getItemsSuccess,
  getItemsFailure,
  clearBooks,
  // create
  createItemsSuccess,
  createItemsFailure,
  // update
  updateItemsSuccess,
  updateItemsFailure,
  // delete
  deleteItemsSuccess,
  deleteItemsFailure
}
