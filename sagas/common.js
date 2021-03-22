import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  MY_PAGE_TOGGLE_FAILURE,
  MY_PAGE_TOGGLE_REQUEST,
  MY_PAGE_TOGGLE_SUCCESS
} from '../reducers/common';

import axios from "axios";

function myPageAPI() {
  return axios.get("/member/find");
}

function* myPage() {
  try {
    const result = yield call(myPageAPI);
    yield put({
      type: MY_PAGE_TOGGLE_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: MY_PAGE_TOGGLE_FAILURE,
      data: e.response.data,
    });
  }
}

function* watchMyPageView() {
  yield takeLatest(MY_PAGE_TOGGLE_REQUEST, myPage);
}

export default function* commonSaga() {
  yield all([
    fork(watchMyPageView),
  ])
}