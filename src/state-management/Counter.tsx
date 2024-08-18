import { useReducer } from "react";
import counterReducers from "./reducers/counterReducers";

const Counter = () => {
  const [value, dispatch] = useReducer(counterReducers, 0);

  return (
    <div>
      Counter ({value})
      <button
        className="btn btn-primary mx-1"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
