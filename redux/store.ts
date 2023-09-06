import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './slices/postsSlice';
import { postsApi } from './api/posts.api';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
