import React from 'react'
import RGBContext from '@picker/context'
import { ColorSliderProps } from '@picker/ColorSlider'

export interface ColorAdjastmentProps {
    Adjustment: React.ComponentType<ColorSliderProps>
}

const ColorAdjastment = ({ Adjustment }: ColorAdjastmentProps) => {
    const { red, green, blue, dispatch } = React.useContext(RGBContext);

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
            <Adjustment onChange={adjustRed} id="red-input" label="Red" value={red} />
            <Adjustment onChange={adjustGreen} id="green-input" label="Green" value={green} />
            <Adjustment onChange={adjustBlue} id="blue-input" label="Blue" value={blue} />
        </section>
    )
}

export default ColorAdjastment