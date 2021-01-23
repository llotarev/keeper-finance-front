import React, {FC, HTMLAttributes, ReactNode} from "react";
import './style.css'
import cn from "../styles/classNames";

export interface UIKitAlertsElement extends HTMLAttributes<HTMLDivElement> {
    variant?: "dark",
    controller?: ReactNode;
}

export const Alerts: FC<UIKitAlertsElement> = (props) => {

    const {className, children, controller, variant, ...other} = props;

    return (
        <div className={cn({
            [String(className)]: true,
            "alerts": true,
            ["alerts--" + variant]: Boolean(variant),
        })}{...other}>
            <div className="alerts__content">
                {children}
            </div>
            <div className="alerts__controller">
                {controller}
            </div>
        </div>
    )
}