import React, {FC, HTMLAttributes, ReactNode} from "react";
import './style.css'
import cn from "../styles/classNames";

export interface UIKitAlertsElement extends HTMLAttributes<HTMLDivElement> {
    controller?: ReactNode;
}

export const Alerts: FC<UIKitAlertsElement> = (props) => {

    const {children, controller, ...other} = props

    return (
        <div className={cn({
            "ui-kit": true,
            "alerts": true
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