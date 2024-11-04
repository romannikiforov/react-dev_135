import React from "react";
import ColorSlider from "@picker/ColorSlider";
import RGBContext from "@picker/context";


const ColorSliders = () => {
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
    <section className="color-sliders">
      <ColorSlider onChange={adjustRed} id="red-slider" label="Red" value={red} />
      <ColorSlider onChange={adjustGreen} id="green-slider" label="Green" value={green} />
      <ColorSlider onChange={adjustBlue} id="blue-slider" label="Blue" value={blue} />
    </section>
  );
};

export default ColorSliders;
