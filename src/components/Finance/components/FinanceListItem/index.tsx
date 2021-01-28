import React, {FC, LiHTMLAttributes, useRef, useState} from "react";
import './style.css'
import {FiEdit, FiMinusCircle, FiPlusCircle, FiTrash} from "react-icons/all";
import {UIKit} from "../../../UIKit";
import {useDrag} from "react-use-gesture";
import {animated, useSpring} from "react-spring";
import {IFinance} from "../../../../api";

const {Button} = UIKit;

interface AppComponentListItem extends LiHTMLAttributes<HTMLLIElement> {
    finance_id: number

    onEditItem(e: React.MouseEvent<HTMLButtonElement>): void

    onDeleteItem(e: React.MouseEvent<HTMLButtonElement>): void
}

export const FinanceListItem: FC<AppComponentListItem & IFinance> = (props) => {

    const {
        name,
        amount,
        finance_id,
        create_date,
        description,
        finance_type,
        onDeleteItem,
        onEditItem
    } = props

    const controllerRef = useRef<HTMLDivElement | null>(null);
    const [controllerWidth, setControllerWidth] = useState<number>(116);
    const [more, setMore] = useState<boolean>(false);

    const [propsController, setController] = useSpring(() => ({
        transform: `translateX(${controllerWidth}px)`
    }))
    const [propsContainer, setContainer] = useSpring(() => ({
        transform: 'translateX(0px)'
    }))

    const touch = useDrag(({movement: [mx]}) => {

        const x: number = Math.floor(mx);

        if (x >= -controllerWidth && x <= 0) {
            setController({transform: `translateX(${x + controllerWidth}px)`})
            setContainer({transform: `translateX(${x}px)`})
        }
    })

    const financeTypeIcon: { [key: string]: React.ReactNode } = {
        "income": <FiPlusCircle/>,
        "spending": <FiMinusCircle/>
    }
    const financeTypeColor: { [key: string]: string } = {
        "income": 'rgb(var(--color-success)',
        "spending": 'rgb(var(--color-danger)'
    }

    return (
        <li className="finance-list__item" {...touch()}>
            <animated.div className="finance-list__item__container" style={propsContainer}>
                <aside onClick={() => setMore(prevState => !prevState)}>
                    <span className="name">{name}</span>
                    <span className="date">{create_date}</span>
                </aside>
                <aside style={{color: financeTypeColor[finance_type]}}>
                    <span className="amount">{amount} руб.</span>
                    <span className="status">{financeTypeIcon[finance_type]}</span>
                </aside>
            </animated.div>
            {more && (
                <div className="finance-list__item__more">
                    <header>Описание</header>
                    <p>{Boolean(description)
                        ? description
                        : "Нет описания"
                    }</p>
                </div>
            )}
            <animated.div
                ref={controllerRef}
                style={propsController}
                className="finance-list__item__controller"
            >
                <Button
                    variant="glass"
                    onClick={onEditItem}
                    id={String(finance_id)}
                >
                    <FiEdit/>
                </Button>
                <Button
                    color="danger"
                    variant="glass"
                    onClick={onDeleteItem}
                    id={String(finance_id)}
                >
                    <FiTrash/>
                </Button>
            </animated.div>
        </li>
    )
}
