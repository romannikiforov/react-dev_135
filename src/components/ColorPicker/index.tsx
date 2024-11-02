import { useReducer, useContext } from 'react'
import reducer, { RGBColorType } from '@picker/reducer';
import ThemeContext from '@picker/themeContext'

import '@picker/index.scss'
import ColorSwatch from "@picker/ColorSwatch";
import ColorInputs from "@picker/ColorInputs";
import ColorSliders from "@picker/ColorSliders";


export const toRGB = ({ red, green, blue }: RGBColorType) => {
  return `rgb(${red}, ${green}, ${blue})`;
};

const initialRGB = {
  red: 122,
  green: 122,
  blue: 122,
};

const ColorPicker = () => {
  const [rgb, dispatch] = useReducer(reducer, initialRGB);

  const themes = useContext(ThemeContext)

  return (
    <div className="picker-container" style={{ borderColor: toRGB(rgb), ...themes.lightMode }}>
      <ColorSwatch {...rgb} />
      <ColorInputs dispatch={dispatch} {...rgb} />
      <ColorSliders dispatch={dispatch} {...rgb} />
    </div>
  );
};

export default ColorPicker;
