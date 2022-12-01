
const lst = document.querySelector("#book-list");

lst.style.listStyle = "none";
let arrOfBooks;

// Function to getBookList from local storage

const getBookList = () => {
 
  if (localStorage.getItem('Booklist') === null) {
    arrOfBooks = [];
  } else {
    arrOfBooks = JSON.parse(localStorage.getItem('Booklist'));
  }
  addToUI();
  return (arrOfBooks);
};

// function to add list to UI

const addToUI = () => {
  arrOfBooks.forEach((book) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <p>${book.author}</p>
    <p>${book.title}</p>
    <p style="display:none">${book.id}</p>
    <p><input type="button" class="delete" value="Delete" /></p>
    `;
    lst.appendChild(li);
  });
}

// Show list on page load

document.addEventListener("DOMContentLoaded", getBookList);

//  function to Add new book to list in local storage and UI

document.getElementById("submitBtn").addEventListener("click", (e) => {
const author = document.querySelector("#author");
const title = document.querySelector("#title");
let bookObj = new Object();
bookObj.author = author.value;
bookObj.title = title.value;
bookObj.id = Math.random();
  e.preventDefault();
  arrOfBooks.push(bookObj);
  console.log(arrOfBooks);
  localStorage.setItem("Booklist", JSON.stringify(arrOfBooks));
  lst.innerHTML = ``;
  addToUI();
});

// Function to remove books from the list and show new list in UI

const removeBook = (id) => {
  console.log("from remove func")
  const Booklst = getBookList();
  

  let books = Booklst;
  console.log(books);
    books = books.filter(book => book.id == id);
    /*books.forEach((book,index) => {
      if(book.id == id)
      {
        books.splice(index, 1);
        return books;
      }
    })*/
   
    console.log(books);
 
  localStorage.setItem("Booklist", JSON.stringify(books));

  lst.innerHTML = ``;
  addToUI();
}

// Delete Btn event

lst.addEventListener('click', (e) => {
  console.log(e.target.parentElement.previousElementSibling.textContent)

removeBook(e.target.parentElement.previousElementSibling.textContent)
})


