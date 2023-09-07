import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './slices/postsSlice';
import userSlice from './slices/userSlice';
import { postsApi } from './api/posts.api';
import { userApi } from './api/user.api';
import { commentsApi } from './api/comments.api';
import { uploadsApi } from './api/uploads.api';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    user: userSlice,
    [postsApi.reducerPath]: postsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [uploadsApi.reducerPath]: uploadsApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(userApi.middleware)
      .concat(commentsApi.middleware)
      .concat(uploadsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
