import React, {FC} from "react";
import cn from "../styles/classNames";
import './Button.css';

export interface UIKitButtonElement extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    block?: boolean,
    content?: "left" | "right"
}

export const Button: FC<UIKitButtonElement> = (props) => {

    const {
        className,
        /* modify */
        block,
        content
    } = props;

    return (
        <button className={cn({
            [String(className)]: true,
            "button": true,
            "button--block": block,
            ["button--content-" + content]: Boolean(content),
        })} {...props}/>
    )
}