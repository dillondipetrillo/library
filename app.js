const booksContainer = document.querySelector(".books-container");
const addBookBtn = document.querySelector(".add-book .add-btn");
const modalBackground = document.querySelector(".form-modal");
const modalOverlay = document.querySelector(".modal-overlay");

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

function Book() {}

function addBookToLibrary() {}

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
