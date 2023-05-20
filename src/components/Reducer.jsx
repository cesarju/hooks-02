import { useReducer } from "react";

export default function Reducer() {
  function reducer(state, action) {
    switch (action.type) {
      case "sum":
        return { cont: state.cont + 1 };
      case "res":
        return { cont: state.cont - 1 };
      default:
        state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { cont: 0 });
  // const [value, setValue] = useState(0)

  return (
    <div>
      <h1>Contador {state.cont}</h1>
      <button onClick={() => dispatch({ type: "sum" })}>+</button>
      <button onClick={() => dispatch({ type: "res" })}>-</button>
      <h3> </h3>
    </div>
  );
}
