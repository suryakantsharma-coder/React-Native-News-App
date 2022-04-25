import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
    name : 'bookmark list',
    initialState : {
        data : []
    },
    reducers : {
        setItem : (state, actions) => {
            state.data = actions.payload
        }
    }
})

export const {setItem} = bookmarkSlice.actions
export default bookmarkSlice.reducer