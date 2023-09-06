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
    getPost: builder.query({
      query: (id: string) => `/posts/${id}`,
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
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['posts'],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useDeletePostMutation } =
  postsApi;
