import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StateType} from "../../index";
import {UIKitColorsType} from "../../../components/UIKit/UIKitTypes";

type MessagesType = UIKitColorsType;

type InitialStateType = {
    messages: {
        type: MessagesType | null,
        text: string | null
    }
}

const initialState: InitialStateType = {
    messages: {
        type: null,
        text: null
    }
}

export const uiReducer = createSlice({
    name: '@uiReducer',
    initialState,
    reducers: {
        setMessages(state, {payload}: PayloadAction<{ type: MessagesType, text: string }>) {
            state.messages = payload
        },
        clearMessages(state) {
            const mock = {
                type: null,
                text: null
            }
            state.messages = mock
        }
    },
});


export const uiReducerActions = uiReducer.actions;
export const uiReducerSelectors = {
    getState: (state: StateType) => state.uiReducer,
    getMessages: (state: StateType) => state.uiReducer.messages,
};