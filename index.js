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

const message = hobbit.info();

const text = document.querySelector('.text');
text.textContent = message;
