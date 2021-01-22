import React, {FC} from "react";
import cn from "../styles/classNames";
import './Input.css';

export interface UIKitInputElement extends React.InputHTMLAttributes<HTMLInputElement> {
    block?: boolean,
    content?: "left" | "right"
}

export const Input: FC<UIKitInputElement> = (props) => {

    const {
        className,
        /* modify */
        block,
        content
    } = props;

    return (
        <input className={cn({
            [String(className)]: true,
            "input": true,
            "input--block": block,
            ["input--content-" + content]: Boolean(content),
        })} {...props}/>
    )
}