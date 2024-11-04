import { useReducer, useContext } from 'react'
import reducer, { RGBColorType } from '@picker/reducer';
import ThemeContext from '@picker/themeContext'

import '@picker/index.scss'
import ColorSwatch from "@picker/ColorSwatch";

import ColorAdjustment from '@picker/ColorAdjastment'
import ColorInput from '@picker/ColorInput'
import ColorSlider from '@picker/ColorSlider'

export const toRGB = ({ red, green, blue }: RGBColorType) => {
  return `rgb(${red}, ${green}, ${blue})`;
};

const initialRGB = {
  red: 122,
  green: 122,
  blue: 122,
};

const ColorPicker = () => {
  const [rgb] = useReducer(reducer, initialRGB);

  const themes = useContext(ThemeContext)

  return (
    <div className="picker-container" style={{ borderColor: toRGB(rgb), ...themes.lightMode }}>
      <ColorSwatch />
      <ColorAdjustment Adjustment={ColorInput} />
      <ColorAdjustment Adjustment={ColorSlider} />
    </div>
  );
};

export default ColorPicker;
