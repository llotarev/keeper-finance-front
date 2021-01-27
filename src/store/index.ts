import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {financeReducer} from "./reducer/finance";
import {uiReducer} from "./reducer/ui";

const rootReducer = combineReducers({
    financeReducer: financeReducer.reducer,
    uiReducer: uiReducer.reducer
})

export type StateType = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer
})