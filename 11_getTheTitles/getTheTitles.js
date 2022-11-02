// const books = [
//   {
//     title: "Book",
//     author: "Name",
//   },
//   {
//     title: "Book2",
//     author: "Name2",
//   },
// ];

const getTheTitles = function (books) {
  //   let booksOne = books[0];
  //   let booksTwo = books[1];

  //   titleOne = booksOne.title;
  //   titleTwo = booksTwo.title;

  //   let array = [titleOne, titleTwo];

  //   return array;

  return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
