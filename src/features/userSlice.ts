import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/interfaces";

// Define a type for the slice state
interface UserState {
    user: IUser
    loading: boolean
    error: string
}

// Define the initial state using that type
const initialState: UserState = {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    user: <IUser>{},
    loading: true,
    error: ''
}

export const getUser = createAsyncThunk(
    'user/getUser', async(searchTerm:string) => {
        return fetch( `https://api.github.com/users/${searchTerm}`)
        .then(res=>res.json())
    }
)

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers(builder: any) {
        builder.addCase(getUser.pending, (state: UserState) => {
            state.loading = true;
          })
          builder.addCase(getUser.fulfilled, (state: UserState, action:PayloadAction<IUser>) => {
            state.loading = false;
            state.user = action.payload
          })
          builder.addCase(getUser.rejected, (state: UserState) => {
            state.loading = false;
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            state.user = <IUser>{};
            state.error = 'User Not Found'
          })
    },
})

// export const { } = userSlice.actions

export default userSlice.reducer