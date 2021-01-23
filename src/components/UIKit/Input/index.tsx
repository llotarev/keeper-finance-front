import React, {FC, InputHTMLAttributes} from "react";
import './style.css'
import cn from "../styles/classNames";

export interface UIKitInputElement extends InputHTMLAttributes<HTMLInputElement> {
    variant?: null
}

export const Input: FC<UIKitInputElement> = (props) => {

    const {className, variant, ...other} = props

    return (
        <input className={cn({
            [String(className)]: true,
            "input": true,
            ["input--" + variant]: Boolean(variant)
        })}{...other}/>
    )
}