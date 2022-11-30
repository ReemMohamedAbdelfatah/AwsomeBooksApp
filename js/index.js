const addItemHtml = (book, index) => {
  const child = `
  <hr>
  <p>Title: ${book.title}</p>
  <p>Author: ${book.author}</p>
  <button id="removeBtn${index}" onclick="removeBook(${index})"> Remove</button>
  <hr>`;
  const parent = document.getElementById('listBooks');
  parent.innerHTML += child;
};

const clearListDiv = () => {
  const child = '';
  const parent = document.getElementById('listBooks');
  parent.innerHTML = child;
};

const listBooks = () => {
  clearListDiv();
  let books = JSON.parse(localStorage.getItem('allEntries'));
  if (books == null) books = [];
  for (let i = 0; i < books.length; i += 1) {
    addItemHtml(books[i], i);
  }
};

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// add books
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const newTitle = document.getElementById('addTitleInput').value;
  const newAuthor = document.getElementById('addAuthorInput').value;
  const newBook = new Book(newTitle, newAuthor);

  let books = JSON.parse(localStorage.getItem('allEntries'));
  if (books == null) books = [];
  localStorage.setItem('entry', JSON.stringify(newBook));
  books.push(newBook);
  localStorage.setItem('allEntries', JSON.stringify(books));
  listBooks();
});

// remove books
const removeBook = (index) => {
  const books = JSON.parse(localStorage.getItem('allEntries'));
  books.splice(index, 1);
  localStorage.setItem('allEntries', JSON.stringify(books));
  listBooks();
};

listBooks();

removeBook();