import axios from 'axios';

const apiClient = axios.create({
  // url: 'https://fakerestapi.azurewebsites.net/api/v1/',
  baseURL: 'http://cors-anywhere.herokuapp.com/https://fakerestapi.azurewebsites.net/api/v1'
  // headers: {'Access-Control-Allow-Origin': true,},
})

// apiClient.interceptors.request.use(response => response, error => {console.log(error)
// return Promise.reject(error)
// })

const booksClient = {
  getBooks: () => apiClient.get('/Books'),
  getBook: (id) => apiClient.get(`/Books/${id}`),
  putBook: (id, data) => apiClient.put(`/Books/${id}`, data),
  deleteBook: (id) => apiClient.delete(`/Books/${id}`),
}

const authorsClient = {
  getAuthors: () => apiClient.get('/Authors'),
  getAuthor: (id) => apiClient.get(`/Authors/${id}`),
  putAuthor: (id, data) => apiClient.put(`/Authors/${id}`, data),
  deleteAuthor: (id) => apiClient.delete(`/Authors/${id}`),
}

export default { booksClient, authorsClient }