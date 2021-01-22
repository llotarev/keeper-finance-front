import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {financeReducer} from "./reducer/finance";

const rootReducer = combineReducers({
    financeReducer: financeReducer.reducer
})

export type StateType = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer
})