'use strict';

const showBooksTemplate = require('../templates/book-listing.handlebars');

const getBooksSuccess = (data) => {
  console.log(data);
  let showBooksHtml = showBooksTemplate({ books: data.books });
  // debugger;
  $('.content').append(showBooksHtml);
  // console.log(data.books[0])
  // console.log(data.books[0].id)
  $('.removeBooksButton').on('click', removeBooksSuccess);
};

const clearBooks = () => {
  $('.content').empty();
};

const failure = (error) => {
  console.error(error);
};

const removeBooksSuccess = (data) => {
  console.log(data);
  console.log(data.target);
  console.log(data.target.id);
  // let book_id = data.target.id
  // console.log('book_id: ' + book_id)
  console.log('data.target.id: ' + data.target.id)
  $('.'+data.target.id).hide();
};

const removeBooksFailure = (error) => {
  console.error(error);
};


module.exports = {
  getBooksSuccess,
  clearBooks,
  failure,
};
