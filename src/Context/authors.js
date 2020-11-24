const storeAuthor = (author) => {
  localStorage.setItem('authors', JSON.stringify(author));
};

const getAuthor = () => {
  if(localStorage.getItem('authors')){
    const author = JSON.parse(localStorage.getItem('authors'));
    return author;
  }
  return null;
};

const removeAuthor = () => {
  localStorage.removeItem('authors');
};

export { storeAuthor, getAuthor, removeAuthor };