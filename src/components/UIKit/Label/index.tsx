import React, {FC, LabelHTMLAttributes} from "react";
import './style.css'
import cn from "../styles/classNames";

export interface UIKitLabelElement extends LabelHTMLAttributes<HTMLLabelElement> {
    variant?: null
}

export const Label: FC<UIKitLabelElement> = (props) => {

    const {className, variant, ...other} = props

    return (
        <label className={cn({
            [String(className)]: true,
            "label": true,
            ["label--" + variant]: Boolean(variant)
        })}{...other}/>
    )
}