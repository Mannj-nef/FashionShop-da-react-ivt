import { all } from "@redux-saga/core/effects";
import categorySaga from "./categorySaga";
import orderSaga from "./orderSaga";
import userSaga from "./userSaga";
import productSaga from "./productSaga";
import authSaga from "./authSaga";

function* rootSaga() {
  yield all([
    ...productSaga,
    ...categorySaga,
    ...orderSaga,
    ...userSaga,
    ...authSaga,
  ]);
}

export default rootSaga;
