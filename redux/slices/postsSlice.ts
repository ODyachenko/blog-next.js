import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Slice } from '@/node_modules/@reduxjs/toolkit/dist/createSlice';

interface PostsState {
  sortingRule: number;
  filterRules: string[];
}

const initialState: PostsState = {
  sortingRule: 0,
  filterRules: [],
};

export const postsSlice: Slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSortingRule: (state: any, action: PayloadAction<number>) => {
      state.sortingRule = action.payload;
    },
    setFilterRules: (state: any, action: PayloadAction<string>) => {
      state.filterRules.includes(action.payload)
        ? (state.filterRules = state.filterRules.filter(
            (item: string) => item !== action.payload
          ))
        : (state.filterRules = [...state.filterRules, action.payload]);
    },
  },
});

export const { setSortingRule, setFilterRules } = postsSlice.actions;
export default postsSlice.reducer;
