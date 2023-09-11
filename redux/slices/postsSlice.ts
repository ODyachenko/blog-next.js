import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface PostsState {
  sortingRule: number;
}

const initialState: PostsState = {
  sortingRule: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSortingRule: (state: RootState, action: PayloadAction<number>) => {
      state.sortingRule = action.payload;
    },
  },
});

export const { setSortingRule } = postsSlice.actions;
export default postsSlice.reducer;
