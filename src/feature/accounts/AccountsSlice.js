import {createSlice} from '@reduxjs/toolkit'

import { generateNodes,result} from '../../mockApi.js'

let parentsToChildren = {};
const initialState ={accounts:result,parentsToChildren:parentsToChildren}

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        expand: (state,action) => {





            let accounts = generateNodes();

            state.parentsToChildren[action.payload] = accounts

            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes

        },

    },
})

// Action creators are generated for each case reducer function
export const { expand} = accountsSlice.actions

export default accountsSlice.reducer
