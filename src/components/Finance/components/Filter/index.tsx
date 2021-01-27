import React from "react";
import './style.css'
import {UIKit} from "../../../UIKit";
import {useDispatch, useSelector} from "react-redux";
import {financeReducerActions, financeReducerSelectors} from "../../../../store/reducer/finance";

const {Button} = UIKit

export function Filter() {

    const dispatch = useDispatch();
    const filter = useSelector(financeReducerSelectors.getFilter)

    function handleChangeFilter(e: React.MouseEvent<HTMLButtonElement>) {
        dispatch(financeReducerActions.setFilter(e.currentTarget.id))
    }

    return (
        <div className="finance-filter">
            <Button
                id="all"
                variant={filter === "all" ? "glass" : "link"}
                onClick={handleChangeFilter}
            >
                Все
            </Button>
            <Button
                id="spending"
                variant={filter === "spending" ? "glass" : "link"}
                onClick={handleChangeFilter}
            >
                Разходы
            </Button>
            <Button
                id="income"
                variant={filter === "income" ? "glass" : "link"}
                onClick={handleChangeFilter}
            >
                Доходы
            </Button>
        </div>
    )
}
