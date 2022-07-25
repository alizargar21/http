import http from './httpServices'

const getAllComments = ()=>{
   return http.get('/comments')
}
const getOneComment = (id)=>{
return  http.get(`/comments/${id}`)
}
const deleteOneComment = (id)=>{
  return  http.delete(`/comments/${id}`)
}
const postOneComment = (data)=>{
   return http.post('/comments/' , data)
}
const editOneComment = ( id,data)=>{
   return http.put(`/comments/${id}` , data)
}
export {getAllComments , getOneComment , deleteOneComment , postOneComment , editOneComment}