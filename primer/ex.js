// Function made to add a book to favoriteBooks array.
function addFavoriteBook(bookName) {
  // Checking if the parameter bookname doesn't contains word "great"
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

// TODO: define printFavoriteBooks() function

// Function made to print the favoriteBooks array length and his content
function printFavoriteBooks() {
  // Printing length of favoriteBooks array
  const favoriteBooksLength = favoriteBooks.length;
  console.log(`Favorite books: ${favoriteBooksLength}`);

  // Printing every single value in favoriteBooks array
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

//Printing out favorite books
printFavoriteBooks();
