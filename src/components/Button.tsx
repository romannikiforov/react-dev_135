import { useReducer } from 'react'

const initialState = { value: false, src: '', active: '' }

type State = {
  value: boolean;
  src: string;
  active: string;
}

type Payload = {
  src: string;
  active: string;
}

type Action = {
  type: "show";
  payload: Payload
} | {
  type: "hide"
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "show": return { ...state, value: true, src: action.payload.src, active: action.payload.active }
    case "hide": return { ...state, value: false }
    default: throw Error("not found any cases")
  }
}

function Button() {
  const [{ value, src, active }, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div className="btn-group">
        <button disabled={active === "Dan Abramov"}
          onClick={() => dispatch({
            type: "show",
            payload: {
              src: "https://bit.ly/dan-abramov",
              active: "Dan Abramov"
            }
          })}

          className="btn btn_primary">
          Show Dan
        </button>
        <button onClick={() => dispatch({ type: "hide" })} className="btn btn_default">
          Hide
        </button>
        <button disabled={active === "Kent C. Dodds"}
          onClick={() => dispatch({
            type: "show",
            payload: {
              src: "https://bit.ly/kent-c-dodds",
              active: "Kent C. Dodds"
            }
          })}

          className="btn btn_primary">
          Show Kent
        </button>

      </div>
      <div className="img-box">
        {value && (
          <img
            src={src}
            alt={active}
            className="img-box__item"
          />
        )}
      </div>
    </>
  );
}

export default Button;
