let myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;
};

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', true );
const neuromancer = new Book('Neuromancer', 'William Gibson', '271', true);
const bladeRunner = new Book('Do Androids Dream of Electric Sheep', 'Philip K. Dick', '230', true);

myLibrary.push(hobbit);
myLibrary.push(neuromancer);
myLibrary.push(bladeRunner);

function addBookToLibrary() {
  const newBook = new Book();
  myLibrary.push(newBook);
  return myLibrary;
};

const newBookButton = document.querySelector('#newBookButton');
newBookButton.addEventListener('click', bookForm);

function bookForm() {
  const newBookButton = document.querySelector('#newBookButton');
  newBookButton.style.display = 'none';
  const form = document.createElement('form');
  const inputField = document.querySelector('.input-field');
  form.setAttribute('id', 'form');
  form.innerHTML = `
    <div class="form-line">
      <label for="title">Title: </label>
      <input type="text" name="title" id="title">
    </div>
    <div class="form-line">  
      <label for="author">Author:</label>
      <input type="text" name="author" id="author">
    </div>
    <div class="form-line"> 
      <label for="numberOfPages">Number of Pages:</label>
      <input type="text" name="numberOfPages" id="numberOfPages">
    </div>
    <div class="form-line">
      <label for="haveRead">Have you read this title:</label>
      <div>
        <input type="radio" id="haveRead" name="haveRead" value="true">
        <label for="yes">Yes</label>  
        <input type="radio" id="haveRead" name="haveRead" value="false">
        <label for="no">No</label>
      </div>
    </div> 
    <div>
      <input type="submit" value="Submit" id="submit">
    </div>  
  `;
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
  const haveRead = document.getElementById('haveRead').value;
  const book = new Book(title, author, numberOfPages, haveRead);
  myLibrary.push(book);
  bookList();
}

function bookList() {
  const body = document.querySelector('.body');
  myLibrary.map((book) => {
    let readStatus = '';
    if (book.haveRead === true) {
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
    `;
    body.appendChild(bookDiv);
  });
};

function clearBookList() {
  const body = document.querySelector('.body');
  body.innerHTML = ``;
}


bookList();

