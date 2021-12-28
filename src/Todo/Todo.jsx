import { useDispatch } from "react-redux";
import { addTodo } from "../redux/app/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

export default function Todo() {
  const dispatch = useDispatch();
  const handleAdd = (text) => {
    const action = addTodo({
      title: text,
      status: false,
      id: uuid()
    });
    dispatch(action);
  };
  return (
    <div>
      <div>
        <TodoInput onAdd={handleAdd} />
      </div>
      <TodoList />
    </div>
  );
}
