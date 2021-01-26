import React, {FC, LiHTMLAttributes} from "react";
import './style.css'

interface AppComponentList extends LiHTMLAttributes<HTMLUListElement> {

}

export const FinanceList: FC<AppComponentList> = (props) => {

    const {children, ...other} = props;

    return (
        <ul className="finance-list" {...other}>
            {children}
        </ul>
    )
}
