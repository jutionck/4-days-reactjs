import http from "./httpCommon";

const baseUrl = '/books';

const getListBook = () => {
  return http.get(`${baseUrl}`)
}

const createBook = params => {
  console.log(params)
  return http.post(`${baseUrl}`, params)
}

const getBookById = id => {
  return http.get(`${baseUrl}/${id}`)
}

const updateBook = (params) => {
  return http.put(`${baseUrl}`, params)
}

const deleteBook = id => {
  console.log("service", id)
  return http.delete(`${baseUrl}/${id}`)
}

export { getListBook, createBook, getBookById, updateBook, deleteBook };