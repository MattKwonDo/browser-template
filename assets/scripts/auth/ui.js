'use strict'
const ui = require('../items/ui')

const store = require('../store')

const signUpSuccess = (data) => {
  $('.errors-sign-up').text('')
}
const signUpFailure = () => {
  $('.errors-sign-up').text('Uh uh uh, you didnt say the magic word')
}

const signInSuccess = (data) => {
  store.user = data.user
  // show diff modal pieces
  $('#change-password').show()
  $('#show-screen').show()
  $('#sign-out').show()
  // hide sign-up modal piece until sign-out
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.errors-sign-in').text('')
  $('#errors-sign-in-image').hide()
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
  $('#sign-in').show()
  $('#change-password').hide()
  $('#show-screen').hide()
  $('#sign-out').hide()
  ui.clearItems()
}

const signOutFailure = () => {
}

const changePasswordSuccess = (data) => {
  $('.errors-change-password').text('')
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
