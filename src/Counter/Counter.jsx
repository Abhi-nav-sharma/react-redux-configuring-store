import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/app/action";

export default function Counter() {
  const count = useSelector((state) => state.app.counter);
  console.log(count);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e.target.name === "add") {
      let action = incrementCounter(1);
      dispatch(action);
    } else if (e.target.name === "reduce") {
      let action = decrementCounter(1);
      dispatch(action);
    }
  };
  return (
    <div>
      <h2>{count}</h2>
      <button name="add" onClick={handleClick}>
        Add
      </button>
      <button name="reduce" onClick={handleClick}>
        Reduce
      </button>
    </div>
  );
}
