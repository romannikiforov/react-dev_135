import { RGBColorType } from '@picker/reducer'

const ColorSwatch = ({ red, green, blue }: RGBColorType) => {
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
