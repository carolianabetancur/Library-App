import axios from 'axios';

const apiClient = axios.create({
  url: 'https://fakerestapi.azurewebsites.net/api/',
  headers: {'Access-Control-Allow-Origin': true,},
})

apiClient.interceptors.request.use(response => response, error => {console.log(error)
return Promise.reject(error)
})

export default {apiClient}