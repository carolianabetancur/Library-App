const storeBook = (book) => {
  localStorage.setItem('books', JSON.stringify(book));
};

const getBook = () => {
  if(localStorage.getItem('books')){
    const book = JSON.parse(localStorage.getItem('books'));
    return book;
  }
  return null;
};

const removeBook = () => {
  localStorage.removeItem('books');
};

export { storeBook, getBook, removeBook };