import React, {ButtonHTMLAttributes, FC} from "react";
import './style.css'
import cn from "../styles/classNames";
import {UIKitColorsType} from "../UIKitTypes";

export interface UIKitButtonElement extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: UIKitColorsType
    variant?: "link" | "outline" | "glass"
}

export const Button: FC<UIKitButtonElement> = (props) => {

    const {className, variant, color, ...other} = props

    return (
        <button className={cn({
            [String(className)]: true,
            "button": true,
            ["button--" + variant]: Boolean(variant),
            ["button-color--" + color]: Boolean(color),
        })}{...other}/>
    )
}