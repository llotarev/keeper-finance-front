import {Dispatch} from "react";
import {StateType} from "../../index";
import {Finance, IFinance, IFinanceUpdate} from "../../../api";
import {financeReducerActions} from "./index";
import {uiReducerActions} from "../ui";

export function financeThunk() {

    function get() {
        return async function (dispatch: Dispatch<any>, getState: () => StateType) {

            const response = await Finance.get();

            try {
                switch (response.status) {
                    case 200:
                        dispatch(financeReducerActions.setFinance({
                            finance: response.data
                        }))
                        break;
                    case 201:
                        break;
                    case 204:
                        break;
                    case 400:
                        break;
                    case 401:
                        break;
                    case 404:
                        break
                    case 500:
                        break
                    default:
                        break;
                }
            } catch (e) {
                dispatch(uiReducerActions.setMessages({
                    type: "danger",
                    text: String(e)
                }))
            }
        }
    }

    function create(props: IFinance) {
        return async function (dispatch: Dispatch<any>, getState: () => StateType) {

            const {finance} = getState().financeReducer;
            const response = await Finance.create(props);

            try {
                switch (response.status) {
                    case 200:
                        dispatch(financeReducerActions.setFinance({
                            finance: [...response.data, ...finance]
                        }))
                        break;
                    case 201:
                        break;
                    case 204:
                        break;
                    case 400:
                        break;
                    case 401:
                        break;
                    case 404:
                        break
                    case 500:
                        break
                    default:
                        break;
                }
            } catch (e) {
                dispatch(uiReducerActions.setMessages({
                    type: "danger",
                    text: JSON.stringify(e)
                }))
            }
        }
    }


    function del(finance_id: number) {
        return async function (dispatch: Dispatch<any>, getState: () => StateType) {

            const {finance} = getState().financeReducer;
            const response = await Finance.del(finance_id);

            try {
                switch (response.status) {
                    case 200:
                        dispatch(financeReducerActions.setFinance({
                            finance: finance.filter((item) => (
                                item.id !== response.data[0].id
                            ))
                        }))
                        break;
                    case 201:
                        break;
                    case 204:
                        break;
                    case 400:
                        break;
                    case 401:
                        break;
                    case 404:
                        break
                    case 500:
                        break
                    default:
                        break;
                }
            } catch (e) {
                dispatch(uiReducerActions.setMessages({
                    type: "danger",
                    text: JSON.stringify(e)
                }))
            }
        }
    }

    function update(props: IFinanceUpdate) {
        return async function (dispatch: Dispatch<any>, getState: () => StateType) {

            const {finance} = getState().financeReducer;
            const response = await Finance.update(props);

            try {
                switch (response.status) {
                    case 200:
                        dispatch(financeReducerActions.setFinance({
                            finance: [
                                finance.filter((item) => item.id !== props.finance_id),
                                ...response.data
                            ]
                        }))
                        break;
                    case 201:
                        break;
                    case 204:
                        break;
                    case 400:
                        break;
                    case 401:
                        break;
                    case 404:
                        break
                    case 500:
                        break
                    default:
                        break;
                }
            } catch (e) {
                dispatch(uiReducerActions.setMessages({
                    type: "danger",
                    text: JSON.stringify(e)
                }))
            }
        }
    }

    return {
        get,
        del,
        update,
        create
    }
}

