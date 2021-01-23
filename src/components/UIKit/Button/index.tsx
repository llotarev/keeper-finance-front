import React, {ButtonHTMLAttributes, FC} from "react";
import './style.css'
import cn from "../styles/classNames";

export interface UIKitButtonElement extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "danger" | "success" | "secondary"
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