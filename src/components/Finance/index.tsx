import React, {useEffect} from "react";
import "./Finance.css"
import {Route, useHistory} from "react-router-dom";
import {routes} from "../../routes";
import {FiEdit, FiMinusCircle, FiTrash} from "react-icons/all";
import {useDrag} from "react-use-gesture";
import {animated, useSpring} from "react-spring";
import {Button} from "../UIKit/Button";

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
                <ul className="finance-list">
                    <li>
                        <animated.div style={swipe} {...touch()} className="finance-list__item">
                            <span>example</span>
                            <span className="spending">100<FiMinusCircle/></span>
                        </animated.div>
                        <div className="finance-list__controller">
                            <Button variant="glass"><FiEdit/></Button>
                            <Button variant="glass" color="danger"><FiTrash/></Button>
                        </div>
                    </li>
                </ul>

                {/*<AddItem/>*/}
            </Route>
        </div>
    )
}