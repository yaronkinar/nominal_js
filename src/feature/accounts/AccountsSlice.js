import {createSlice, current} from '@reduxjs/toolkit'

import {convertToObject, generateChildNodes, generateNodes,result} from '../../mockApi.js'

let parentsToChildren = {};
const initialState ={accounts:result,parentsToChildren:parentsToChildren}

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        expand: (state,action) => {


            //console.log(action.payload)

           // console.log(current(action.payload))


           // const updateAccount = {...state.accounts[action.payload], accounts: generateNodes()}
           // let spreadElements = {...generateChildNodes(action.payload)};
            let accounts = generateChildNodes(action.payload);

            state.parentsToChildren[action.payload] = accounts
          //  console.log(current(accounts))
          //  state.accounts = [...state.accounts, ...accounts ]

         //   console.log(current(state.accounts))

            // state.accounts = {...state.accounts, updateAccount}

           // state.accounts = convertToObject(state.accounts)
           // state.accounts[action.payload] = generateNodes1
         /*   state.value.forEach(item => {
                if (item.id === action.payload) {







                    item["accounts"] = generateChildNodes();
                    item["has_children"] = true


                }
            });*/
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
