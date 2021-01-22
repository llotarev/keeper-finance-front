import React, {ButtonHTMLAttributes, FC} from "react";
import './style.css'
import cn from "../styles/classNames";

export interface UIKitButtonElement extends ButtonHTMLAttributes<HTMLButtonElement> {
    dark?: boolean,
    variant?: string | "link" | "outline"
}

export const Button: FC<UIKitButtonElement> = (props) => {

    const {className, variant, ...other} = props

    return (
        <button className={cn({
            [String(className)]: true,
            "ui-kit": true,
            "button": true,
            ["button--" + variant]: Boolean(variant),
        })}{...other}/>
    )
}