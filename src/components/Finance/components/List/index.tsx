import React, {useEffect} from "react";
import {FinanceList} from "../FinanceList";
import {FinanceListItem} from "../FinanceListItem";
import {useDispatch, useSelector} from "react-redux";
import {financeReducerSelectors, financeReducerThunk} from "../../../../store/reducer/finance";
import {UIKit} from "../../../UIKit";
import {FiPlusCircle} from "react-icons/all";
import {useHistory} from "react-router-dom";
import {routes} from "../../../../routes";

const {Button} = UIKit

export function List() {

    const {get, del} = financeReducerThunk();

    const history = useHistory();
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
        history.push(`${routes.finance.edit}/${e.currentTarget.id}`)
    }

    function handleAddItem(e: React.MouseEvent<HTMLButtonElement>) {
        history.push(routes.finance.create)
    }


    return (
        <>
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
            <Button
                color="secondary"
                style={{
                    fontSize: "24px",
                    position: "fixed",
                    bottom: "40px",
                    right: "40px",
                }}
                onClick={handleAddItem}
            >
                <FiPlusCircle/>
            </Button>
        </>

    )
}