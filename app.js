const booksContainer = document.querySelector(".books-container");
const addBookBtn = document.querySelector(".add-book .add-btn");
const modalBackground = document.querySelector(".form-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const addBookForm = document.querySelector(".add-book-form");
const formBookTitle = document.getElementById("title");
const formBookAuthor = document.getElementById("author");
const formBookPages = document.getElementById("pages");
const formHasRead = document.getElementsByName("has-read");

let myLibrary = [];

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

function removeBook(e) {
  const bookToDelete = e.target.parentNode.parentNode.dataset.index;
  myLibrary.splice(bookToDelete, 1);
  displayBooks();
}

function displayBooks() {
  booksContainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    bookCard.setAttribute("data-index", i);
    booksContainer.appendChild(bookCard);

    const bookTitle = document.createElement("p");
    bookTitle.classList.add("book-title");
    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    const bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    const readBook = document.createElement("p");
    readBook.classList.add("has-read");
    const btnsDiv = document.createElement("div");
    btnsDiv.classList.add("btns");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn", "add-btn");
    deleteBtn.textContent = "Remove";

    deleteBtn.addEventListener("click", removeBook);
    btnsDiv.appendChild(deleteBtn);

    bookTitle.textContent = `Title: ${myLibrary[i].title}`;
    bookCard.appendChild(bookTitle);

    bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
    bookCard.appendChild(bookAuthor);

    bookPages.textContent = `Pages: ${myLibrary[i].numOfPages}`;
    bookCard.appendChild(bookPages);

    readBook.textContent = myLibrary[i].hasRead ? "Read" : "Not Read";
    bookCard.appendChild(readBook);

    bookCard.appendChild(btnsDiv);
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
