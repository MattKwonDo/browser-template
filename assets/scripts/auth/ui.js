'use strict'
const ui = require('../items/ui')

const store = require('../store')

const signUpSuccess = (data) => {
  $('.errors-sign-up').text('Woohoo! Signed up successfully!')
  $('#sign-up').trigger('reset')
}
const signUpFailure = () => {
  $('.errors-sign-up').text('Uh uh uh, you didnt say the magic word')
}

const signInSuccess = (data) => {
  store.user = data.user
  // hide modal
  $('#myModal').modal('hide')
  // show diff modal pieces
  $('#change-password').show()
  $('#show-screen').show()
  $('#sign-out').show()
  // show main page buttons
  $('#logInButton').show()
  $('#getItemsButton').show()
  // hide sign-up modal piece until sign-out
  $('#sign-up').hide()
  // clear sign-up errors and text
  $('.errors-sign-up').text('')
  // $('#sign-up').find('input:text, input:password, input:password, select, textarea').val('')
  $('#sign-up').trigger('reset')
  // hide sign-in stuff
  $('#sign-in').hide()
  $('#sign-in').trigger('reset')
  // clear sign in error text
  $('.errors-sign-in').text('')
  // $('#errors-sign-in-image').hide()
}

const signInFailure = () => {
  $('.errors-sign-in').text('Uh uh uh, you didnt say the magic word')
  // $('#errors-sign-in-image').html(
  //   $('<img />', {src: 'http://i.imgur.com/hLepfiT.gif' //, 'class': 'fullImage'
  //   })
  // ).show()
  $('#sign-in-box').text('god dang')
}

const signOutSuccess = () => {
  store.user = null
  $('#sign-up').show()
  $('#sign-up').trigger('reset')
  $('#sign-in').show()
  $('#change-password').hide()
  $('#show-screen').hide()
  $('#sign-out').hide()
  $('#spacer1').empty()
  $('#create-item').hide()
  $('#getItemsButton').hide()
  $('#logInButton').hide()
  $('.errors-sign-up').text('')
  $('.errors-sign-in').text('')
  $('.errors-change-password').text('')
  $('#change-password').trigger('reset')
  ui.clearItems()
}

const signOutFailure = () => {
}

const changePasswordSuccess = (data) => {
  $('.errors-change-password').text('Woohoo! Password changed successfully!')
  $('#change-password').trigger('reset')
  // $('#change-password').find('input:password, input:password, select, textarea').val('')
}
const changePasswordFailure = () => {
  $('.errors-change-password').text('Uh uh uh, you didnt say the magic word')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
  // ,refData
}
