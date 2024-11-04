import React from 'react'
import RGBContext from "@picker/context";

const ColorSwatch = () => {
  const { red, green, blue } = React.useContext(RGBContext)

  return (
    <div
      className="color-swatch"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }}
    ></div>
  );
};

export default ColorSwatch;
