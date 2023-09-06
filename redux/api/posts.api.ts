import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444',
  }),
  endpoints: (builder: any) => ({
    getPosts: builder.query({
      query: () => `/posts`,
      providesTags: ['posts'],
    }),

    // addToCollection: builder.mutation({
    //   query: (body: IAddCollectionAlbum) => ({
    //     url: `/collection`,
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: ['collection'],
    // }),
    deletePost: builder.mutation({
      query: (id: string) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['posts'],
    }),
  }),
});

export const { useGetPostsQuery, useDeletePostMutation } = postsApi;
