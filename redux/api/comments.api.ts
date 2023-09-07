import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  tagTypes: ['comments'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
  }),
  endpoints: (builder: any) => ({
    getComments: builder.query({
      query: () => `/comments`,
      providesTags: ['comments'],
    }),
    createComment: builder.mutation({
      query: (body: any) => ({
        url: `/comments`,
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body,
      }),
      invalidatesTags: ['comments'],
    }),
  }),
});

export const { useGetCommentsQuery, useCreateCommentMutation } = commentsApi;
