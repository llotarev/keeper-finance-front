import React, {useEffect} from "react";
import "./style.css"
import {Route, useHistory} from "react-router-dom";
import {routes} from "../../routes";
import {useSelector} from "react-redux";
import {uiReducerSelectors} from "../../store/reducer/ui";
import {UIKit} from "../UIKit";
import {Filter} from "./components/Filter";
import {List} from "./List";

const {Alerts} = UIKit

export function Finance() {

    const history = useHistory();
    const messages = useSelector(uiReducerSelectors.getMessages);

    useEffect(() => {
        history.push(routes.finance.root);
    }, [])


    return (
        <div className="finance">
            <Route path={routes.finance.root}>
                <Filter/>
                {Boolean(messages.text) && (
                    <Alerts>{messages.text}</Alerts>
                )}
            </Route>
            <Route exact path={routes.finance.root}>
                <List/>
            </Route>
        </div>
    )
}
