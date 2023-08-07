// Create an array of objects, each representing a book with properties like title, author, and publication year. Print details of each book.

const books = [
  {
    title: 'The Hobbit',
    author: ' J. R. R. Tolkien',
    publication: '1937'
  },
  {
    title: 'The Wheel of Time',
    author: ' Robert Jordan',
    publication: '1990'
  },
  {
    title: 'Eragon',
    author: ' Christopher Paolin',
    publication: '2002'
  }
];

books.forEach(book =>
  console.log(`${book.title},${book.author}, ${book.publication};`)
);
