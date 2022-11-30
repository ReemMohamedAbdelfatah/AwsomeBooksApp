// var books = [{id: 1, name: 'The Hunger Games', author: 'Suzanne Collins'},
//             {id: 2, name: 'Harry Potter and the Order of the Phoenix', author: 'J.K. Rowling'},
//             {id: 3, name: 'Pride and Prejudice', author: 'Jane Austen'},
//             {id: 4, name: 'Animal Farm', author: 'George Orwell'},
//             {id: 5, name: 'The Fault in Our Stars', author: 'John Green'},
//             {id: 6, name: 'Divergent', author: 'Veronica Roth'}
//           ]

//var books = [{ title: 'book1', author: 'author1' }, { title: 'book2', author: 'author2' }]
//var books = []

const addItemHtml = (book, index) => {
  const child = `
  <hr>
  <p>Title: ${book.title}</p>
  <p>Author: ${book.author}</p>
  <button id="removeBtn${index}" onclick="removeBook(${index})"> Remove</button>
  <hr>`
  const parent = document.getElementById('listBooks');
  parent.innerHTML += child;
}

const clearListDiv = () => {
  const child = ``
  const parent = document.getElementById('listBooks');
  parent.innerHTML = child;
}

const listBooks = () => {
  clearListDiv()
  var books = JSON.parse(localStorage.getItem("allEntries"))
  if (books == null) books = []
  for (i = 0; i < books.length; i += 1) {
    addItemHtml(books[i], i)
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// add books
const addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", () => {
  var newTitle = document.getElementById("addTitleInput").value;
  var newAuthor = document.getElementById("addAuthorInput").value;
  newBook = new Book(newTitle, newAuthor)

  var books = JSON.parse(localStorage.getItem("allEntries"))
  if (books == null) books = []
  localStorage.setItem("entry", JSON.stringify(newBook))
  books.push(newBook)
  localStorage.setItem("allEntries", JSON.stringify(books))
  listBooks()
})

// remove books
let removeBook = (index) => {
  var books = JSON.parse(localStorage.getItem("allEntries"))
  books.splice(index, 1)
  localStorage.setItem("allEntries", JSON.stringify(books))
  listBooks()
}

// storage

// const addToStorage = (book) => {
//   var books = JSON.parse(localStorage.getItem("allEntries"))
//   if (books == null) books = []
//   console.log(book)
//   localStorage.setItem("entry", JSON.stringify(book))
//   books.push(book)
//   localStorage.setItem("allEntries", JSON.stringify(books))
// }

// const deleteFromStorage = () => {
//   var books = JSON.parse(localStorage.getItem("allEntries"))
//   books.splice(index, 1)
//   localStorage.setItem("allEntries", JSON.stringify(books))
// }


// console.log('############')
// console.log(books)
// console.log('############')

listBooks()

