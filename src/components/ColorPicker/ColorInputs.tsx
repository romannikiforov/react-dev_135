import ColorInput from "@picker/ColorInput";
import { ColorsSliderProps } from '@picker/ColorSliders'


const ColorInputs = ({ red, green, blue, dispatch }: ColorsSliderProps) => {

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
