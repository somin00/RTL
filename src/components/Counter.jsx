import React, { useReducer } from "react";

function Counter(props) {
  const [count, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const increase = () => {
    dispatch({ type: ACTION_TYPE.increase });
  };

  const decrease = () => {
    dispatch({ type: ACTION_TYPE.decrease });
  };

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increase}>increase button</button>
      <button onClick={decrease}>decrease button</button>
    </div>
  );
}

const INITIAL_STATE = 0;

export const ACTION_TYPE = {
  increase: "increase",
  decrease: "decrease",
};

export function counterReducer(state, action) {
  if (action?.type === ACTION_TYPE.increase) {
    return state + 1;
  }
  if (action?.type === ACTION_TYPE.decrease) {
    return state - 1;
  }
  return state;
}
export default Counter;
