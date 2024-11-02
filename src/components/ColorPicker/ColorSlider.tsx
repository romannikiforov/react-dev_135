export type ColorSliderProps = {
  id: string;
  label: string;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>
}


const ColorSlider = ({ id, label, value, onChange }: ColorSliderProps) => {
  return (
    <div className="color-slider">
      <label htmlFor={id}>{label}</label>
      <input onChange={onChange} id={id} type="range" min="0" max="255" value={value} />
    </div>
  );
};

export default ColorSlider;
