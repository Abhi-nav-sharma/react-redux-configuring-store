import { useSelector } from "react-redux";
import Counter from "./Counter/Counter";
import Login from "./Login/Login";
import "./styles.css";
import Todo from "./Todo/Todo";

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);
  return isAuth ? (
    <div className="App">
      <h3>USER token: {token}</h3>
      <h1>Todo</h1>
      <Todo />
      <h1>Counter</h1>
      <Counter />
    </div>
  ) : (
    <Login />
  );
}
