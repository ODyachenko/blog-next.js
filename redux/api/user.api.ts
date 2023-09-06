import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { iUserReg, iUserLog } from '@/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['user'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
  }),
  endpoints: (builder: any) => ({
    // getPosts: builder.query({
    //   query: () => `/auth/registration`,
    //   providesTags: ['user'],
    // }),
    createUser: builder.mutation({
      query: (body: iUserReg) => ({
        url: `/auth/registration`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    loginUser: builder.mutation({
      query: (body: iUserLog) => ({
        url: `/auth/login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = userApi;
