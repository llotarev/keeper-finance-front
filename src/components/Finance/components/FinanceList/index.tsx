import React, {FC, LiHTMLAttributes, useState} from "react";
import './FinanceList.css'
import {FiEdit, FiMinusCircle, FiPlusCircle, FiTrash} from "react-icons/all";
import {UIKit} from "../../../UIKit";
import {useDrag} from "react-use-gesture";
import {useSpring, animated} from "react-spring";

const {Button} = UIKit;

interface AppComponentList extends LiHTMLAttributes<HTMLUListElement> {
    // children: any[]
}

export const FinanceList: FC<AppComponentList> = (props) => {

    const {children} = props;

    const [more, setMore] = useState<boolean>(false);

    const [propsController, setController] = useSpring(() => ({transform: 'translateX(80px)'}))
    const [propsContainer, setContainer] = useSpring(() => ({transform: 'translateX(0px)'}))

    const touch = useDrag(({down, movement: [mx]}) => {

        if (down && mx > 80) {
            console.log(mx)
            // setController({transform: `translateX(${mx}px)`})
            // setContainer({transform: `translateX(${mx}px)`})
        }


    })

    return (
        <ul className="list">
            {/*{children.map((item) => (*/}
            <li className="list__item">
                <animated.div className="list__item__container" {...touch()} style={propsContainer}>
                    <aside onClick={() => setMore(prevState => !prevState)}>
                        <span className="name">Header</span>
                        <span className="date">01.01.2020</span>
                    </aside>
                    <aside style={{color: 'rgb(var(--color-danger)'}}>
                        <span className="amount">100</span>
                        <span className="status">
                            {false
                                ? <FiPlusCircle/>
                                : <FiMinusCircle/>
                            }
                        </span>
                    </aside>
                </animated.div>
                {more && (
                    <div className="list__item__more">
                        <header>Header</header>
                        <p>lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
                    </div>
                )}
                <animated.div className="list__item__controller" style={propsController}>
                    <Button variant="glass"><FiEdit/></Button>
                    <Button variant="glass" color="danger"><FiTrash/></Button>
                </animated.div>
            </li>
            {/*))}*/}
        </ul>
    )
}