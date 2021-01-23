import React, {useEffect} from "react";
import "./Finance.css"
import {Route, useHistory} from "react-router-dom";
import {routes} from "../../routes";
import {FiMinusCircle} from "react-icons/all";
import {useDrag} from "react-use-gesture";
import {animated, useSpring} from "react-spring";

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
                    <animated.li style={swipe} {...touch()}>
                        <span>
                            Разходы на пасуду
                        </span>
                        <span className="spending">
                            100
                        <FiMinusCircle/>
                        </span>
                    </animated.li>
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