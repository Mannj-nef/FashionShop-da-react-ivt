import { AuthTypes } from "../../../common/types";

export const actLogin = (payload) => ({
  type: AuthTypes.LOGIN,
  payload,
});

export const actLoginFail = () => {
  return {
    type: AuthTypes.LOGIN_FAIL,
  };
};

export const actSetLoadingSuccess = () => {
  return {
    type: AuthTypes.SET_IS_LOADING,
  };
};

export const actLoginSuccess = (payload) => {
  return {
    type: AuthTypes.LOGIN_SUCCESS,
    payload: payload,
  };
};

export const actLogout = () => ({
  type: AuthTypes.LOGOUT,
});
