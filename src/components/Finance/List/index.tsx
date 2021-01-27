import React, {useEffect} from "react";
import {FinanceList} from "../components/FinanceList";
import {FinanceListItem} from "../components/FinanceListItem";
import {useDispatch, useSelector} from "react-redux";
import {financeReducerSelectors, financeReducerThunk} from "../../../store/reducer/finance";

export function List() {

    const {get, del, create, update} = financeReducerThunk();

    const dispatch = useDispatch();
    const finance = useSelector(financeReducerSelectors.getFinance);

    /* @Effects */
    useEffect(() => {
        dispatch(get())
    }, [])


    /* @Methods */
    function handleDeleteItem(e: React.MouseEvent<HTMLButtonElement>) {
        dispatch(del(Number(e.currentTarget.id)))
    }

    function handleEditItem(e: React.MouseEvent<HTMLButtonElement>) {

    }


    return (
        <FinanceList>
            {finance.map(({id, ...other}) => (
                <FinanceListItem
                    key={id}
                    onDeleteItem={handleDeleteItem}
                    onEditItem={handleEditItem}
                    finance_id={id}
                    {...other}
                />
            ))}
        </FinanceList>
    )
}