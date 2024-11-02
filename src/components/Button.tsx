import { useReducer } from 'react'

const initialState = { value: false }

function reducer(state: any, action: any) {
  switch (action.type) {
    case "show": return { value: true }
    case "hide": return { value: false }
    default: throw Error("not found any cases")
  }
}

function Button() {
  const [{ value }, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div className="btn-group">
        <button onClick={() => dispatch({ type: "show" })} className="btn btn_primary">
          Show
        </button>
        <button onClick={() => dispatch({ type: "hide" })} className="btn btn_default">
          Hide
        </button>
      </div>
      <div className="img-box">
        {value && (
          <img
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            className="img-box__item"
          />
        )}
      </div>
    </>
  );
}

export default Button;
