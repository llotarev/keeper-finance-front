import React, {FC, TextareaHTMLAttributes} from "react";
import './style.css'
import cn from "../styles/classNames";

export interface UIKitTextareaElement extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: null
    resizeable?: boolean
}

export const Textarea: FC<UIKitTextareaElement> = (props) => {

    const {className, variant, resizeable, ...other} = props

    return (
        <textarea className={cn({
            [String(className)]: true,
            "textarea": true,
            "textarea--resizeable": resizeable,
            ["textarea--" + variant]: Boolean(variant)
        })}{...other}/>
    )
}