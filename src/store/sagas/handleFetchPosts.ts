import { addAlert, editAlert } from './../../components/sweetalerts/alert';
import { editPost, fetchPosts, addPost, deletePost } from "./fetchPostsApi";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  downloadPostsErrorAction,
  downloadPostsOkAction,
  editPostFailedAction,
  addPostFailedAction,
  deletePostFailedAction,
} from "../actions/actionCreators";
import { actionTypes } from "../actions/actionTypes";
import { v4 as uuidv4 } from 'uuid'

//Get Post
function* handleFetchPosts() {
  try {
    const { data } = yield call(fetchPosts);
    yield put(downloadPostsOkAction(data));
  } catch (error) {
    yield put(downloadPostsErrorAction());
  }
}

export function* fetchPostsWatcher() {
  yield takeEvery(actionTypes.GET_POSTS, handleFetchPosts);
}

//edit Post worker
function* editSinglePost(action: any) {
  const editedPost = action.payload;

  try {
    yield call(editPost, editedPost);
    const { data } = yield call(fetchPosts);
    yield put(downloadPostsOkAction(data));
    editAlert()
  } catch (error) {
    yield editPostFailedAction();
  }
}

//Edit post Watcher
export function* editPostSaga() {
  yield takeEvery(actionTypes.EDIT_POST, editSinglePost);
}

//Add Post worker
function* addSinglePost(action: any) {
  const editedPost = {
    "id": uuidv4(),
    "title": action.payload.title,
    "description": action.payload.description
  }

  try {
    yield call(addPost, editedPost);
    const { data } = yield call(fetchPosts);
    yield put(downloadPostsOkAction(data.reverse()));
    addAlert()
  } catch (error) {
    yield addPostFailedAction();
  }
}

//Add post Watcher
export function* addPostSaga() {
  yield takeEvery(actionTypes.ADD_POST, addSinglePost);
}

//delete Post worker
function* deleteSinglePost(action: any) {
  const editedPost = action.payload;

  try {
    yield call(deletePost, editedPost);
    const { data } = yield call(fetchPosts);
    yield put(downloadPostsOkAction(data));
  } catch (error) {
    yield deletePostFailedAction();
  }
}

//delete post Watcher
export function* deletePostSaga() {
  yield takeEvery(actionTypes.DELETE_POST_SUCCESSFUL, deleteSinglePost);
}
