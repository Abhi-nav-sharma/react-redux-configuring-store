import { actionConstants } from "./actionTypes";

const initState = {
  todos: [],
  isLoading: true,
  isError: false,
  counter: 0
};

export default function reducer(state = initState, action) {
  console.log(state, action);
  switch (action.type) {
    case actionConstants.GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actionConstants.GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.payload.todos,
        isLoading: false
      };
    }
    case actionConstants.GET_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case actionConstants.ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case actionConstants.REMOVE_TODO_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action?.payload?.id)
      };
    }
    case actionConstants.TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
      };
    }
    case actionConstants.INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + action?.payload
      };
    }
    case actionConstants.DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - action?.payload
      };
    }
    default: {
      return state;
    }
  }
}
