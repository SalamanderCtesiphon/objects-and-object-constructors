let myLibrary = [];

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'true' );
const neuromancer = new Book('Neuromancer', 'William Gibson', '271', 'true');
const bladeRunner = new Book('Do Androids Dream of Electric Sheep', 'Philip K. Dick', '230', 'true');

myLibrary.push(hobbit);
myLibrary.push(neuromancer);
myLibrary.push(bladeRunner);

const newBookButton = document.getElementById('newBookButton');
newBookButton.addEventListener('click', bookForm);
const form = document.querySelector('.form');
form.style.display = "none";

function Book(title, author, numberOfPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;
};

function addBookToLibrary() {
  const newBook = new Book();
  myLibrary.push(newBook);
  return myLibrary;
};

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
  myLibrary.map((book) => {
    let readStatus = '';
    if (book.haveRead === 'true') {
      readStatus = "Have read." 
    } else {
      readStatus = "Have not read yet."
    };
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Length: ${book.numberOfPages} pgs.</p>
      <p>${readStatus}</p>
      <button class="remove">Delete</button>
    `;
    body.appendChild(bookDiv);
    const removeBtn = document.querySelector('.remove');
    removeBtn.addEventListener('click', removeBook);
  });
};



function removeBook(e) {
  if (e.target.classList.contains('remove')) {
    const book = e.target.parentElement;
    const index = Array.from(book.parentElement.children).indexOf(book);
    myLibrary.splice(index, 1);
    clearBookList();
    bookList();
  }
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

