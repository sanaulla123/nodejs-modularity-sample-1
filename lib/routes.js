var bookController = require("./book_controller");

module.exports = function(app){
  //Get the details of the book with the given isbn
  app.get('/book/:isbn', function(req, res){
    bookController.getBookDetails(req.params, function(results){res.json(results);});
  });

  //Get all the books
  app.get('/book', function(req, res){
    bookController.getAllBooks(function(results){res.json(results);});
  });

  app.post('/book', function(req, res){
    bookController.addNewBook(req.body, function(results){
      res.json(results);
    });
  });

  app.put('/book/:isbn', function(req, res){
    bookController.editBook(req.body, req.params.isbn, function(results){
      res.json(results);
    });
  });

  app.delete('/book/:isbn', function(req, res){
    bookController.deleteBook(req.params.isbn, function(results){
      res.json(results);
    });
  });
}
