import React, {useEffect} from "react";
import "./Finance.css"
import {AddItem} from "./components/AddItem";
import {Route, useHistory} from "react-router-dom";
import {routes} from "../../routes";

export function Finance() {

    const history = useHistory();
    useEffect(() => {
        history.push(routes.finance.root)
    }, [])


    return (
        <div className="finance">
            <Route path={routes.finance.root}>
                <AddItem/>
            </Route>
        </div>
    )
}