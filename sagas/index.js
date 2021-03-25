import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import commonSaga from "./common";

axios.defaults.baseURL = "http://localhost:8090/";

export default function* rootSaga() {
  yield all([
      fork(commonSaga),
  ]);
}
