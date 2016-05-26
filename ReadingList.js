

var bookList = [
          {bookTitle: "Harry Potter Series",
          bookAuthor: "JK Rowling",
          alreadyRead: true},

          {bookTitle: "Outliers",
          bookAuthor: "Malcolm Gladwell",
          alreadyRead: false},

          {bookTitle: "The Sleep Revolution",
          bookAuthor: "Ariana Huffington",
          alreadyRead: false},

          {bookTitle: "Javascript For Kids",
          bookAuthor: "Nick Morgan",
          alreadyRead: true}
        ];


for (var arrayIndex = 0; arrayIndex < bookList.length; arrayIndex++)  {
  var bookinfo = bookList[arrayIndex];

        	console.log(bookinfo.bookTitle + " by " + bookinfo.bookAuthor)
          }

          if (bookinfo.alreadyRead === false) {
              console.log ("You still need to read" + bookinfo.bookTitle + " by " + bookinfo.bookAuthor)
          }

          else if (bookinfo.alreadyRead === true) {
            console.log ("You already read " + bookinfo.bookTitle + " by " + bookinfo.bookAuthor);
          }
