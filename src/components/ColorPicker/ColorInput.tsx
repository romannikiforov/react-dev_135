import { ColorSliderProps } from '@picker/ColorSlider'

const ColorInput = ({ id, label, value, onChange }: ColorSliderProps) => {
  return (
    <div className="color-input">
      <label htmlFor={id}>{label}</label>
      <input onChange={onChange} id={id} type="number" min="0" max="255" value={value} />
    </div>
  );
};

export default ColorInput;
