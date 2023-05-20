let library = [];
let add = document.querySelector('.add');
let form = document.getElementById('form');

function Book (title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary (title, author, pages) {
  let book = new Book(title, author, pages);
  library.push(book);
}

function displayLibrary () {
  const books = document.querySelector('.books');
  const template = document.getElementById('card');
  library.forEach(book => {
    const clone = template.cloneNode(true);
    clone.querySelector(".title").textContent = book.title;
    clone.querySelector(".author").textContent = book.author;
    clone.querySelector(".pages").textContent = book.pages + " pages";
    clone.style.display = "flex";
    books.appendChild(clone);
  });
}

add.addEventListener('click', () => {
  form.style.display = "flex";
});

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting and page refresh

  // Access form input values
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;

  console.log(title, author, pages);

  // Add book to library
  addBookToLibrary(title, author, pages);
  displayLibrary();

  // Reset the form
  form.reset();
  form.style.display = "none";
});