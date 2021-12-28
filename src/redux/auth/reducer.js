import { loadData, saveData } from "../../utils/localStorage";
import { actionConstants } from "./actionTypes";

const token = loadData("token") || null;

const initState = {
  isAuth: token !== null,
  token: token
};

export default function reducer(state = initState, action) {
  console.log(state, action);
  switch (action.type) {
    case actionConstants.LOGIN_SUCCESS: {
      saveData("token", action.payload);
      return {
        ...state,
        isAuth: true,
        token: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
