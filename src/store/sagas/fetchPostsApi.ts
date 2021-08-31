
import axios from "axios"
import { IPost } from './../reducers/getUser';



const axiosClient = axios.create({
  baseURL: 'https://backendservermock.herokuapp.com'
})

export async function fetchPosts() {
  return await axiosClient.get('/posts')
}

export async function editPost(post: IPost) {
  return await axiosClient.put(`/posts/${post.id}`, post)
}

export async function addPost(post: any) {
  return await axios.post('https://backendservermock.herokuapp.com/posts', post)
}

export async function deletePost(post: IPost) {
  return await axios.delete(`https://backendservermock.herokuapp.com/posts/${post.id}`)
}