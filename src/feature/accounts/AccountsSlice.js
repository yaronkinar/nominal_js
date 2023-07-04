import {createSlice} from '@reduxjs/toolkit'

import {generateChildNodes, result} from '../../mockApi.js'

const initialState ={value:result}

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        expand: (state,action) => {


            console.log(action.payload)

            state.value.forEach(item => {
                if (item.id === action.payload) {







                    item["accounts"] = generateChildNodes();
                    item["has_children"] = true


                }
            });
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
