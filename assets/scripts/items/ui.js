'use strict'

const showItemsTemplate = require('../templates/item-listing.handlebars')

// read
const getItemsSuccess = (data) => {
  // console.log(data)
  const showItemsHtml = showItemsTemplate({ items: data.new_items })
  // debugger;
  $('.content').html(showItemsHtml) // .order
  $('.errors-create-item').empty()
  $('#create-item').show()
  $('#spacer1').text('List')
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
const clearItems = () => {
  $('.content').empty()
}

// create
// append data to the end with an append child?
const createItemsSuccess = (data) => {
  // console.log(data.new_item)
  // console.log(data.new_item.id)
  // console.log(data.new_item.name)
  // console.log(data.new_item.user)
  // console.log(data.new_item.user_id)
  // $('.' + data.new_item.id).hide()
  $('.errors-create-item').text('click Get/Read Items! to see your item added to the list')
  $('#create-item').trigger('reset')
}

const createItemsFailure = () => { // (error) => {
  // console.error(error)
  $('#errors-create-item').text('Uh uh uh, you didnt say the magic word')
}

// update
const updateItemsSuccess = (data) => {
  // console.log(data.new_item)
  // console.log(data.new_item.id)
  // console.log(data.new_item.name)
  // console.log(data.new_item.user)
  // console.log(data.new_item.user_id)
  // $('.' + data.new_item.id).hide()
}

const updateItemsFailure = () => { // (error) => {
  // console.error(error)
}

// delete
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
  clearItems,
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
