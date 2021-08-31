import {all} from 'redux-saga/effects'
import {addPostSaga, deletePostSaga, editPostSaga, fetchPostsWatcher } from './handleFetchPosts'

export function* rootSaga () {
  yield all([fetchPostsWatcher(), editPostSaga(), addPostSaga(), deletePostSaga()])
}