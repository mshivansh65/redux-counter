import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggleState = useSelector((state) => state.counter.toggleState);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleState());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleState && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increase Counter</button>
      <button onClick={decrementHandler}>Decrease Counter</button>
      <button
        style={{ display: "block", margin: "0 auto" }}
        onClick={toggleCounterHandler}
      >
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
