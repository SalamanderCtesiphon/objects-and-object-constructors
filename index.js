let myLibrary = [];

class Book {
  constructor(title, author, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
  }
};

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'true');
const neuromancer = new Book('Neuromancer', 'William Gibson', '271', 'false');
const bladeRunner = new Book('Do Androids Dream of Electric Sheep', 'Philip K. Dick', '230', 'true');

myLibrary.push(hobbit);
myLibrary.push(neuromancer);
myLibrary.push(bladeRunner);

const newBookButton = document.getElementById('newBookButton');
newBookButton.addEventListener('click', bookForm);
const form = document.querySelector('.form');
form.style.display = "none";
window.addEventListener('click', updateScreen);

function updateScreen() {
  clearBookList();
  bookList();
}




function bookForm() {
  form.style.display = 'block';
  newBookButton.style.display = 'none';
  const inputField = document.querySelector('.input-field');
  form.classList.add('form');
  form.setAttribute('id', 'form');
  inputField.appendChild(form);
  const submit = document.getElementById('submit');
  submit.addEventListener('click', submitBook);
}; 

function submitBook(e) {
  e.preventDefault();
  clearBookList();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const numberOfPages = document.getElementById('numberOfPages').value;
  const haveRead = document.querySelector('input[name="haveRead"]:checked').value;
  const book = new Book(title, author, numberOfPages, haveRead);
  if(title === '' || author === '' || numberOfPages === '') {
    alert('Please fill out form completely.');
    bookList();
    return;
  }
  myLibrary.push(book);
  bookList();
  clearForm();
}

function bookList() {
  const body = document.querySelector('.body');
  myLibrary.forEach((book) => {
    let readStatus = '';
    book.haveRead === 'true' ? readStatus = 'Have read.' : readStatus = "Have not read."
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookLength = document.createElement('p');
    const deleteButton = document.createElement('button');
    const readStatusDisplay = document.createElement('button');
    bookDiv.classList.add('book');
    bookTitle.setAttribute('class', 'bookTitle');
    bookAuthor.setAttribute('class', 'bookAuthor');
    bookLength.setAttribute('class', 'bookLength');
    deleteButton.setAttribute('class', 'deleteButton');
    readStatusDisplay.setAttribute('class', 'readStatusDisplay');
    bookTitle.textContent = `${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookLength.textContent = `Length: ${book.numberOfPages} pgs.`;
    readStatusDisplay.textContent = `${readStatus}`;
    deleteButton.textContent = 'Delete';
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookLength);
    bookDiv.appendChild(readStatusDisplay);
    bookDiv.appendChild(deleteButton)
    body.appendChild(bookDiv);
    deleteButton.addEventListener('click', deleteBook);
    readStatusDisplay.addEventListener('click', toggleRead);
  });
};

function toggleRead(e) {
  e.preventDefault();
  const book = e.target.parentElement;
  const index = Array.from(book.parentElement.children).indexOf(book);
  const title = e.target.parentElement.children[0].textContent;
  const authorPLaceholder = e.target.parentElement.children[1].textContent.toString();
  const author = authorPLaceholder.slice(7);
  const numberOfPagesPlaceholder = e.target.parentElement.children[2].textContent.toString();
  const numberOfPagesSecondPlaceholder = numberOfPagesPlaceholder.slice(6)
  const numberOfPages = numberOfPagesSecondPlaceholder.slice(-9, -4);
  const haveRead = e.target.parentElement.children[3].textContent;
  let readingStatus = '';
  if (haveRead === 'Have not read.') {
    readingStatus = 'true';
  } else if ( haveRead === 'Have read.') {
    readingStatus = "false";
  }
  const newBook = new Book(title, author, numberOfPages, readingStatus);
  myLibrary.splice(index, 1, newBook);
  clearBookList();
  bookList();
}


function deleteBook(e) {
  const book = e.target.parentElement;
  const index = Array.from(book.parentElement.children).indexOf(book);
  myLibrary.splice(index, 1);
  clearBookList();
  bookList();
}


function clearBookList() {
  const body = document.querySelector('.body');
  body.innerHTML = ``;
}

function clearForm() {
  title.value = '';
  author.value = '';
  numberOfPages.value = '';
  const form = document.querySelector('.form');
  form.style.display = "none";
  const newBookButton = document.querySelector('#newBookButton');
  newBookButton.style.display = 'block';
  submit.addEventListener('click', submitBook);
}

bookList();

