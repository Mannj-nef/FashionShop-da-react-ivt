import { call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { addUser, getUsers } from "../../apis/userApi";
import { UserTypes } from "../../common/types";
import { actSetLoading } from "../actions/userAction";
function* fetchUsers(action) {
  yield put(actSetLoading());
  try {
    const users = yield call(getUsers);
    yield put({
      type: UserTypes.GET_USER_SUCCESS,
      payload: users,
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* createUser(action) {
  yield put(actSetLoading());

  try {
    yield call(addUser, action.payload);
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* watchAllUser() {
  yield takeLeading(UserTypes.GET_All_USER, fetchUsers);
}

function* watchCreateUser() {
  yield takeLatest(UserTypes.CREATE, createUser);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchAllUser(), watchCreateUser()];
