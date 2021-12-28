import { actionConstants } from "./actionTypes";

export const getTodosRequest = () => ({
  type: actionConstants.GET_TODO_REQUEST,
  payload: {
    isLoading: true
  }
});

export const getTodosSuccess = (todos) => ({
  type: actionConstants.GET_TODO_SUCCESS,
  payload: {
    todos: todos
  }
});

export const getTodosFailure = () => ({
  type: actionConstants.GET_TODO_FAILURE,
  payload: {
    isError: true
  }
});

export const decrementCounter = (amount) => ({
  type: actionConstants.DECREMENT_COUNTER,
  payload: amount
});

export const incrementCounter = (amount) => ({
  type: actionConstants.INCREMENT_COUNTER,
  payload: amount
});

export const addTodo = ({ title, status, id }) => {
  return {
    type: actionConstants.ADD_TODO,
    payload: {
      title,
      status,
      id
    }
  };
};

export const removeTodo = (id) => {
  return {
    type: actionConstants.REMOVE_TODO_ITEM,
    payload: {
      id: id
    }
  };
};

export const toggleTodo = (id) => {
  return {
    type: actionConstants.TOGGLE_TODO_STATUS,
    payload: {
      id: id
    }
  };
};
