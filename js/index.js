/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const addItemHtml = (book, index) => {
  const child = `
  <section class="book" style="display:flex; flex-direction:column">
    <div id="col1" style="display:flex; justify-content: space-between;">
      <p>"${book.title}" by ${book.author}</p>
      <button id="removeBtn${index}" onclick="remove(${index})" class="deleteBtn" > Remove</button>
    </div>
  </section>`;
  const parent = document.getElementById('listBooks');
  parent.innerHTML += child;
};

const clearListDiv = () => {
  const child = '';
  const parent = document.getElementById('listBooks');
  parent.innerHTML = child;
};

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookStorage {
  addBook = (newBook) => {
    let books = JSON.parse(localStorage.getItem('allEntries'));
    if (books == null) books = [];
    localStorage.setItem('entry', JSON.stringify(newBook));
    books.push(newBook);
    localStorage.setItem('allEntries', JSON.stringify(books));
  }

  removeBook = (index) => {
    const books = JSON.parse(localStorage.getItem('allEntries'));
    books.splice(index, 1);
    localStorage.setItem('allEntries', JSON.stringify(books));
    listBooks();
  }
}

listBooks = () => {
  clearListDiv();
  let books = JSON.parse(localStorage.getItem('allEntries'));
  if (books == null) books = [];
  for (let i = 0; i < books.length; i += 1) {
    addItemHtml(books[i], i);
  }
};

// add books
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const newTitle = document.getElementById('addTitleInput').value;
  const newAuthor = document.getElementById('addAuthorInput').value;
  const newBook = new Book(newTitle, newAuthor);
  const storage = new BookStorage();
  storage.addBook(newBook);
  listBooks();
  document.getElementById('addTitleInput').value = '';
  document.getElementById('addAuthorInput').value = '';
});

// remove books
const remove = (index) => {
  const storage = new BookStorage();
  storage.removeBook(index);
  listBooks();
};

listBooks();