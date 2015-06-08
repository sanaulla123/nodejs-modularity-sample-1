var bookDao = require("./book_dao");

module.exports.getBookDetails = function(params, callback){
  console.log("Fetching details for book with ISBN: " + params.isbn);
  bookDao.findOne(params.isbn, callback);
}

module.exports.getAllBooks = function(callback){
  console.log("Fetching all books");
  bookDao.findAll(callback);
}

module.exports.addNewBook = function(body, callback){
  console.log("Adding new book");
  bookDao.addNewBook(body, callback);
}

module.exports.editBook = function(body, isbn, callback){
  console.log("Editing Book");
  bookDao.editBook(body, isbn, callback);
}
module.exports.deleteBook = function(isbn, callback){
  console.log("Deleting book");
  bookDao.deleteBook(isbn, callback);
}
