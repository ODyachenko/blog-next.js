import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// // Define a type for the slice state
interface iUser {
  isAuth: boolean;
}

// Define the initial state using that type
const initialState: iUser = {
  isAuth: false,
};

export const userSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state: RootState, action: PayloadAction<number>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = userSlice.actions;
export default userSlice.reducer;
