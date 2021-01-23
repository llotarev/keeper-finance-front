import React, {FC, HTMLAttributes} from "react";
import './style.css'
import cn from "../styles/classNames";

export interface UIKitButtonGroupElement extends HTMLAttributes<HTMLDivElement> {
}

export const ButtonGroup: FC<UIKitButtonGroupElement> = (props) => {

    const {className, ...other} = props

    return (
        <div className={cn({
            [String(className)]: true,
            "button-group": true,
        })}{...other}/>
    )
}