'use strict';

const showBooksTemplate = require('../templates/book-listing.handlebars');

const getBooksSuccess = (data) => {
  console.log(data);
  let showBooksHtml = showBooksTemplate({ items: data.new_items });
  // debugger;
  $('.content').append(showBooksHtml);
  console.log(data.new_items)
  console.log(data.new_items[0])
  console.log(data.new_items[0].name)
  console.log(data.new_items[1].user)
  console.log(data.new_items[2].user_id)
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
