import {createSlice, createSelector, PayloadAction} from "@reduxjs/toolkit";
import {financeThunk} from "./thunk";
import {StateType} from "../../index";
import {FinanceType, IFinance} from "../../../api";

export interface IFinanceItem extends IFinance {
    id: number
}

type InitialStateType = {
    filter: FinanceType | "all"
    finance: IFinanceItem[]
}

const initialState: InitialStateType = {
    filter: "all",
    finance: []
}

export const financeReducer = createSlice({
    name: '@financeReducer',
    initialState,
    reducers: {
        setFinance(state, {payload}: PayloadAction<{ finance: any[] }>) {
            state.finance = payload.finance
        },
        setFilter(state, {payload}: PayloadAction<FinanceType | "all" | any>) {
            state.filter = payload
        }
    },
});


export const financeReducerActions = financeReducer.actions;
export const financeReducerThunk = financeThunk;
export const financeReducerSelectors = {
    getState: (state: StateType) => state.financeReducer,
    getFilter: (state: StateType) => state.financeReducer.filter,
    getFinance: (state: StateType) => state.financeReducer.finance,

    /* @Reselect */
    getFinanceOne: (finance_id: number) => createSelector(
        (state: StateType) => state.financeReducer.finance,
        (finance) => finance.find(({id}) => id === finance_id)
    ),
    getFinanceFilter: (filter: any) => createSelector(
        (state: StateType) => state.financeReducer.finance,
        (finance) => finance.filter(({finance_type}) => {
            if (filter === "all") {
                return true
            }
            return finance_type === filter
        })
    ),
};