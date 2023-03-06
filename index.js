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

console.log(myLibrary);

function addBookToLibrary() {
  const newBook = new Book();
  myLibrary.push(newBook);
  return myLibrary;
}

function bookList(myLibrary) {
 const message = myLibrary.map(() => {
    return this.info();
  });
};



bookList();


const text = document.querySelector('.text');
text.textContent = message;
