import React from 'react'
import ColorInput from "@picker/ColorInput";
import RGBContext from "@picker/context";


const ColorInputs = () => {
  const { red, green, blue, dispatch } = React.useContext(RGBContext)

  const adjustRed: React.ChangeEventHandler<HTMLInputElement> = e => dispatch({
    type: "adjust_red",
    payload: +e.target.value
  })

  const adjustGreen: React.ChangeEventHandler<HTMLInputElement> = e => dispatch({
    type: "adjust_green",
    payload: +e.target.value
  });

  const adjustBlue: React.ChangeEventHandler<HTMLInputElement> = e => dispatch({
    type: "adjust_blue",
    payload: +e.target.value
  })

  return (
    <section className="color-inputs">
      <ColorInput onChange={adjustRed} id="red-input" label="Red" value={red} />
      <ColorInput onChange={adjustGreen} id="green-input" label="Green" value={green} />
      <ColorInput onChange={adjustBlue} id="blue-input" label="Blue" value={blue} />
    </section>
  );
};

export default ColorInputs;
