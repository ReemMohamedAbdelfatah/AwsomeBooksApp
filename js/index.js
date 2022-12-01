/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import setTime from './date.js';

setTime();

const addItemHtml = (book, index) => {
  const child = `
  <section class="book">
    <p>"${book.title}" by ${book.author}</p>
    <button id="removeBtn${index}" onclick="remove(${index})" class="deleteBtn" > Remove</button>
  </section>`;
  const parent = document.getElementById('books');
  parent.innerHTML += child;
};

const clearListDiv = () => {
  const child = '';
  const parent = document.getElementById('books');
  parent.innerHTML = child;
};

// Navigation
const showList = () => {
  document.getElementById('listBooks').style.display = 'block';
  document.getElementById('addBook').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'none';
};

const showAddBook = () => {
  document.getElementById('listBooks').style.display = 'none';
  document.getElementById('addBook').style.display = 'block';
  document.getElementById('contactInfo').style.display = 'none';
};

const showContact = () => {
  document.getElementById('listBooks').style.display = 'none';
  document.getElementById('addBook').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'block';
};

// Classes
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

// list books
const listBooks = () => {
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

document.querySelector('#showListBtn').addEventListener('click', showList);
document.querySelector('#addNewBtn').addEventListener('click', showAddBook);
document.querySelector('#contactBtn').addEventListener('click', showContact);
showList();
listBooks();