import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface UserState {

}

// Define the initial state using that type
const initialState: UserState = {

}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    }
})

// export const { } = userSlice.actions

export default userSlice.reducer