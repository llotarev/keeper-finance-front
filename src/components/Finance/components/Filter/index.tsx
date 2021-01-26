import React from "react";
import './style.css'
import {UIKit} from "../../../UIKit";

const {Button} = UIKit

export function Filter() {
    return (
        <div className="finance-filter">
            <Button variant="link">all</Button>
            <Button variant="glass">spending</Button>
            <Button variant="link">income</Button>
        </div>
    )
}
