import React, {useEffect} from "react";
import "./style.css"
import {Route, useHistory} from "react-router-dom";
import {routes} from "../../routes";
import {Filter} from "./components/Filter";
import {FinanceList} from "./components/FinanceList";
import {FinanceListItem} from "./components/FinanceListItem";


export function Finance() {

    const history = useHistory();
    useEffect(() => {
        history.push(routes.finance.root)
    }, [])

    return (
        <div className="finance">
            <Route path={routes.finance.root}>
                <Filter/>
            </Route>
            <Route exact path={routes.finance.root}>
                <FinanceList>
                    <FinanceListItem/>
                    <FinanceListItem/>
                </FinanceList>
            </Route>
        </div>
    )
}
