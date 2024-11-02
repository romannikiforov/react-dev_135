import { useEffect, useReducer } from "react";

type State = {
  count: number;
  step: number;
}

type Action = {
  type: "tick";
} | {
  type: "step";
  step: number
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "tick": return { ...state, count: state.count + state.step }
    case "step": return { ...state, step: action.step }
    default: throw Error('t;his is impossible')
  }
}

const initialState = { count: 0, step: 1 }

const Counter = () => {
  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000)
    return () => {
      clearInterval(id)
    }
  }, [])


  return (
    <>
      <p className="counter-title">Counter: {count}</p>
      <input
        className="counter-input"
        type="number"
        value={step}
        onChange={(e) => dispatch({ type: "step", step: +e.target.value })}
      />
    </>
  );
};

export default Counter;
