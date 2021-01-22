import {Dispatch} from "react";
import {StateType} from "../../index";
import {Finance, IFinance, IFinanceUpdate} from "../../../api";
import {financeReducerActions} from "./index";

export function financeThunk() {

    function get() {
        return async function (dispatch: Dispatch<any>, getState: () => StateType) {

            const response = await Finance.get();

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
        }
    }

    function create(props: IFinance) {
        return async function (dispatch: Dispatch<any>, getState: () => StateType) {

            const {finance} = getState().financeReducer;
            const response = await Finance.create(props);

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
        }
    }


    function del(finance_id: number) {
        return async function (dispatch: Dispatch<any>, getState: () => StateType) {

            const {finance} = getState().financeReducer;
            const response = await Finance.del(finance_id);

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
        }
    }

    function update(props: IFinanceUpdate) {
        return async function (dispatch: Dispatch<any>, getState: () => StateType) {

            const {finance} = getState().financeReducer;
            const response = await Finance.update(props);

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
        }
    }

    return {
        get,
        del,
        update,
        create
    }
}

