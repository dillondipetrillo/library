const booksContainer = document.querySelector(".books-container");
const addBookBtn = document.querySelector(".add-book .add-btn");
const modalBackground = document.querySelector(".form-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const addBookForm = document.querySelector(".add-book-form");
const formBookTitle = document.getElementById("title");
const formBookAuthor = document.getElementById("author");
const formBookPages = document.getElementById("pages");
const formHasRead = document.getElementsByName("has-read");

let myLibrary = [
  {
    title: "Book 1",
    author: "Author 1",
    numOfPages: 123,
    hasRead: true,
  },
  {
    title: "Book 2",
    author: "Author 2",
    numOfPages: 432,
    hasRead: false,
  },
  {
    title: "Book 3",
    author: "Author 3",
    numOfPages: 1000,
    hasRead: false,
  },
  {
    title: "Book 4",
    author: "Author 4",
    numOfPages: 96,
    hasRead: true,
  },
];

function Book(title, author, numOfPages, hasRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.hasRead = hasRead;
}

function addBookToLibrary(e) {
  e.preventDefault();

  let checkedRadio;
  for (let i = 0; i < formHasRead.length; i++) {
    if (formHasRead[i].checked) {
      checkedRadio = formHasRead[i].value === "true" ? true : false;
      break;
    }
  }

  const newBook = new Book(
    formBookTitle.value,
    formBookAuthor.value,
    +formBookPages.value,
    checkedRadio
  );

  myLibrary.push(newBook);

  booksContainer.innerHTML = "";
  displayBooks();
  hideModal();

  formBookTitle.value = "";
  formBookAuthor.value = "";
  formBookPages.value = "";
  for (let i = 0; i < formHasRead.length; i++) {
    if (formHasRead[i].checked) {
      formHasRead[i].checked = false;
      break;
    }
  }
}

function displayBooks() {
  for (let book of myLibrary) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    booksContainer.appendChild(bookCard);

    const bookTitle = document.createElement("p");
    bookTitle.classList.add("book-title");
    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    const bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    const readBook = document.createElement("p");
    readBook.classList.add("has-read");

    bookTitle.textContent = `Title: ${book.title}`;
    bookCard.appendChild(bookTitle);

    bookAuthor.textContent = `Author: ${book.author}`;
    bookCard.appendChild(bookAuthor);

    bookPages.textContent = `Pages: ${book.numOfPages}`;
    bookCard.appendChild(bookPages);

    readBook.textContent = book.hasRead ? "Read" : "Not Read";
    bookCard.appendChild(readBook);
  }
}

displayBooks();

function showModal() {
  if (!modalBackground.classList.contains("form-modal-display")) {
    modalBackground.classList.add("form-modal-display");
    document.body.classList.add("no-scroll");
  }
}

function hideModal() {
  if (modalBackground.classList.contains("form-modal-display")) {
    modalBackground.classList.remove("form-modal-display");
    document.body.classList.remove("no-scroll");
  }
}

addBookBtn.addEventListener("click", showModal);

modalOverlay.addEventListener("click", hideModal);

addBookForm.addEventListener("submit", addBookToLibrary);
