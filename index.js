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

function bookForm() {
  const form = document.createElement('form');
  const inputField = document.querySelector('.input-field');
  form.setAttribute('id', 'form');
  form.innerHTML = `
    <div>
      <label for="title">Title: </label>
      <input type="text" name="title" id="title>
    </div>
    <div>  
      <label for="author">Author:</label>
      <input type="text" name="author" id="author">
    </div>
    <div> 
      <label for="numberOfPages">Number of Pages:</label>
      <input type="text" name="numberOfPages" id="numberOfPages">
    </div>
    <div>
      <label for="haveRead">Have you read this title?:</label>
      <input type="radio" id="yes" name="haveRead" value="true">
      <label for="yes">Yes</label>  
      <input type="radio" id="no" name="haveRead" value="false">
      <label for="no">No</label>
    </div>   
  `;
  inputField.appendChild(form);
};

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


bookList();
bookForm();

