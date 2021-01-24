import React, {useEffect} from "react";
import "./Finance.css"
import {Route, useHistory} from "react-router-dom";
import {routes} from "../../routes";
import {useDrag} from "react-use-gesture";
import {useSpring} from "react-spring";
import {FiMinusCircle} from "react-icons/all";
import {AddItem} from "./components/AddItem";
import {FinanceList} from "./components/FinanceList";


export function Finance() {

    const history = useHistory();
    useEffect(() => {
        history.push(routes.finance.root)
    }, [])

    const [swipe, setSwipe] = useSpring(() => ({transform: 'translateX(0px)'}))
    const touch = useDrag(({down, movement: [mx]}) => {
        if (mx <= 0 && down) {
            setSwipe({transform: `translateX(${mx}px)`});
        }
    })

    return (
        <div className="finance">
            <Route path={routes.finance.root}>
                <FinanceList/>
                {/*<AddItem/>*/}
            </Route>
        </div>
    )
}