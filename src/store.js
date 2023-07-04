import { configureStore } from '@reduxjs/toolkit'
import AccountsReducer from "./feature/accounts/AccountsSlice.js";
import { enableMapSet } from 'immer';
enableMapSet();

export const store = configureStore({
    reducer: {
        accounts: AccountsReducer

    },
})
