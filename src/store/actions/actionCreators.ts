import { actionTypes } from "./actionTypes";
import { IPost } from "../reducers/getUser";
import { store } from "../store";

const downloadPosts = () => ({
  type: actionTypes.GET_POSTS,
});

const downloadPostsOk = (posts: IPost[]) => ({
  type: actionTypes.GET_POSTS_SUCCESSFUL,
  payload: posts,
});

const downloadPostsError = () => ({
  type: actionTypes.GET_POSTS_FAILED,
});

export const downloadPostsAction = () => store.dispatch(downloadPosts());

export const downloadPostsOkAction = (posts: IPost[]) =>
  store.dispatch(downloadPostsOk(posts));

export const downloadPostsErrorAction = () =>
  store.dispatch(downloadPostsError());

//Edit Post
const editPost = (editedPost: IPost) => ({
  type: actionTypes.EDIT_POST,
  payload: editedPost,
});

const editPostSuccessful = (editedPost: IPost) => ({
  type: actionTypes.EDIT_POST_SUCCESSFUL,
  payload: editedPost,
});

const editPostFailed = () => ({
  type: actionTypes.EDIT_POST_FAILED,
});

export const editPostAction = (editedPost: IPost) =>
  store.dispatch(editPost(editedPost));

export const editPostSuccessfulAction = (editedPost: IPost) =>
  store.dispatch(editPostSuccessful(editedPost));

export const editPostFailedAction = () => store.dispatch(editPostFailed());

//Add Post

const addPost = (editedPost: IPost) => ({
  type: actionTypes.ADD_POST,
  payload: editedPost,
});

const addPostSuccessful = (editedPost: IPost) => ({
  type: actionTypes.ADD_POST_SUCCESSFUL,
  payload: editedPost,
});

const addPostFailed = () => ({
  type: actionTypes.ADD_POST_FAILED,
});

export const addPostAction = (editedPost: IPost) =>
  store.dispatch(addPost(editedPost));

export const addPostSuccessfulAction = (editedPost: IPost) =>
  store.dispatch(addPostSuccessful(editedPost));

export const addPostFailedAction = () => store.dispatch(addPostFailed());

//Delete Post
const deletePostSuccessful = (editedPost: IPost) => ({
  type: actionTypes.DELETE_POST_SUCCESSFUL,
  payload: editedPost,
});

const deletePostFailed = () => ({
  type: actionTypes.DELETE_POST_FAILED,
});

export const deletePostSuccessfulAction = (editedPost: IPost) =>
  store.dispatch(deletePostSuccessful(editedPost));

export const deletePostFailedAction = () => store.dispatch(deletePostFailed());