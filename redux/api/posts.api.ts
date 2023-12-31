import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
  }),
  endpoints: (builder: any) => ({
    getPosts: builder.query({
      query: (params: any) =>
        `/posts?sortBy=${params.sortingRule}${
          params.filterRules.length ? `&&filter=${params.filterRules}` : ''
        }`,
      providesTags: ['posts'],
    }),
    getPost: builder.query({
      query: (id: string) => `/posts/${id}`,
      providesTags: ['posts'],
    }),

    createPost: builder.mutation({
      query: (body: any) => ({
        url: `/posts`,
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body,
      }),
      invalidatesTags: ['posts'],
    }),
    editPost: builder.mutation({
      query: ({ id, ...post }: any) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body: post,
      }),
      invalidatesTags: ['posts'],
    }),
    deletePost: builder.mutation({
      query: (id: string) => ({
        url: `/posts/${id}`,
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['posts'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useEditPostMutation,
} = postsApi;
