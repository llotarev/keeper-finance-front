import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {financeThunk} from "./thunk";
import {StateType} from "../../index";
import {IFinance} from "../../../api";

export interface IFinanceItem extends IFinance {
    id: number
}

type InitialStateType = {
    finance: IFinanceItem[]
}

const initialState: InitialStateType = {
    finance: []
}

export const financeReducer = createSlice({
    name: '@financeReducer',
    initialState,
    reducers: {
        setFinance(state, {payload}: PayloadAction<{ finance: any[] }>) {
            state.finance = payload.finance
        }
    },
});


export const financeReducerActions = financeReducer.actions;
export const financeReducerThunk = financeThunk;
export const financeReducerSelectors = {
    getState: (state: StateType) => state.financeReducer,
    getFinance: (state: StateType) => state.financeReducer.finance
};