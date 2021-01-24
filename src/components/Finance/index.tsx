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
                            <span>Разходы на пасуду</span>
                            <span className="spending">100<FiMinusCircle/></span>
                        </animated.div>
                        <div className="finance-list__controller">
                            <Button variant="link"><FiEdit/></Button>
                            <Button variant="link" color="secondary"><FiTrash/></Button>
                        </div>
                    </li>
                    <li>
                        <span>
                            Доход на пасуду
                        </span>
                        <span className="income">
                            100
                        <FiMinusCircle/>
                        </span>
                    </li>
                </ul>

                {/*<AddItem/>*/}
            </Route>
        </div>
    )
}