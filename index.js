let myLibrary = [];

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'true', 1 );
const neuromancer = new Book('Neuromancer', 'William Gibson', '271', 'true', 2);
const bladeRunner = new Book('Do Androids Dream of Electric Sheep', 'Philip K. Dick', '230', 'true', 3);

myLibrary.push(hobbit);
myLibrary.push(neuromancer);
myLibrary.push(bladeRunner);

const newBookButton = document.getElementById('newBookButton');
newBookButton.addEventListener('click', bookForm);
const form = document.querySelector('.form');
form.style.display = "none";

function Book(title, author, numberOfPages, haveRead, dataAttribute) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;
  this.dataAttribute = dataAttribute;
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
  const dataAttribute = myLibrary.length + 1;
  console.log(dataAttribute);
  const book = new Book(title, author, numberOfPages, haveRead, dataAttribute);
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
    const targetItem = book.dataAttribute;
    bookDiv.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Length: ${book.numberOfPages} pgs.</p>
      <p>${readStatus}</p>
      <button id="targetItem">Delete</button>
      <p>${book.dataAttribute}</p>
    `;
    body.appendChild(bookDiv);
    const deleteBtn = document.getElementById('targetItem');
    deleteBtn.addEventListener('click', deleteBook);
  });
};

function deleteBook(book) {
  console.log(targetItem);
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

