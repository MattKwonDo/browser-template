'use strict'

const showBooksTemplate = require('../templates/book-listing.handlebars')

// read
const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ items: data.new_items })
  // debugger;
  $('.content').append(showBooksHtml)
  console.log(data.new_items)
  console.log(data.new_items[0])
  console.log(data.new_items[0].name)
  console.log(data.new_items[1].user)
  console.log(data.new_items[2].user_id)
  $('.removeBooksButton').on('click', removeBooksSuccess)
}

const clearBooks = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

// create
// need to update this to do an ajax method to delete the thing from the database
const createItemsSuccess = (data) => {
  console.log(data)
  console.log(data.target)
  console.log(data.target.id)
  // let book_id = data.target.id

  console.log('data.target.id: ' + data.target.id)
  // $('.' + data.target.id).hide()
}

const createItemsFailure = (error) => {
  console.error(error)
}

// update
// need to update this to do an ajax method to delete the thing from the database
const updateItemsSuccess = (data) => {
  console.log(data)
  console.log(data.target)
  console.log(data.target.id)
  // let book_id = data.target.id

  console.log('data.target.id: ' + data.target.id)
  // $('.' + data.target.id).hide()
}

const updateItemsFailure = (error) => {
  console.error(error)
}

// delete
// this is redundant with the deleteItemsSuccess
// need to update this to do an ajax method to delete the thing from the database
const removeBooksSuccess = (data) => {
  console.log(data)
  console.log(data.target)
  console.log(data.target.id)
  // let book_id = data.target.id
  // console.log('book_id: ' + book_id)
  console.log('data.target.id: ' + data.target.id)
  $('.' + data.target.id).hide()
}

const removeBooksFailure = (error) => {
  console.error(error)
}
// this is redundant with the removeBooksSuccess
const deleteItemsSuccess = (data) => {
  console.log(data)
  console.log(data.target)
  console.log(data.target.id)
  // let book_id = data.target.id

  console.log('data.target.id: ' + data.target.id)
  // $('.' + data.target.id).hide()
}

const deleteItemsFailure = (error) => {
  console.error(error)
}

module.exports = {
  // read
  getBooksSuccess,
  clearBooks,
  failure,
  // create
  createItemsSuccess,
  createItemsFailure,
  // update
  updateItemsSuccess,
  updateItemsFailure,
  // delete
  removeBooksSuccess,
  removeBooksFailure,
  deleteItemsSuccess,
  deleteItemsFailure
}
