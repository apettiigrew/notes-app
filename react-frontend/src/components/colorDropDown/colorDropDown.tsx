import { useRef } from "react";
import { Colors } from "../../interfaces/colors.interface";
import React from "react";
import classes from "./colorDropDown.module.css";


const ColorDropDown: React.FC<{ preselect: string, colorPicker: Function, show: boolean }> = ({ show, colorPicker, preselect }) => {
    const myRef = useRef<HTMLDivElement>(null);

    const colorClickHandler = (color: Colors) => {
        colorPicker(color);
    }

    const colors = Object.keys(Colors).map(key => {
        const color = Colors[key as keyof typeof Colors]
        const border = (preselect === color) ? "3px solid black" : "";
        const toolTipProps = { "data-bs-toggle": "tooltip", "data-bs-placement": "top", title: key }
        if (color === Colors.white.toString()) {
            return <div {...toolTipProps} key={color} style={{ 'backgroundColor': color, "border": '3px solid black !important' }} onClick={() => {
                colorClickHandler(color);
            }} className={classes.colors} >
                <i className="fa-solid fa-droplet-slash"></i>
            </div>

        } else {
            return <div {...toolTipProps} key={color} style={{ 'backgroundColor': color, "border": border }} onClick={() => {
                colorClickHandler(color);
            }} className={classes.colors} />
        }

    });


    return (
        <div ref={myRef} style={{ display: `${show ? 'flex' : 'none'}` }} className={classes['colors-wrapper']}>
            {colors}
        </div>
    );
}
export default ColorDropDown;