let myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = false;
  this.info = function() {
    let readStatus = '';
    haveRead ? readStatus = "have read" : readStatus = "not read yet";
    return (`${title} by ${author}, ${numberOfPages} pages, ${readStatus}.`)
  }
}

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
}

function bookList() {
  const body = document.querySelector('.body');
  myLibrary.map((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h1>${book.title}</h1>
    `;
    body.appendChild(bookDiv);
  });
};


bookList();

