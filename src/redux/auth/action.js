import { actionConstants } from "./actionTypes";

export const loginSuccess = (token) => {
  return {
    type: actionConstants.LOGIN_SUCCESS,
    payload: token
  };
};
