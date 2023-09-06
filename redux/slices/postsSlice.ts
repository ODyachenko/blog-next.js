import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { iPost } from '@/types';

// // Define a type for the slice state
// interface PostsState {
//   id: string;
//   cover
// }

// Define the initial state using that type
const initialState: iPost = {
  id: '',
  cover: '',
  avatar: '',
  author: '',
  date: '',
  title: '',
  text: '',
  tags: [],
  views: 0,
  commentsCount: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state: RootState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default postsSlice.reducer;
