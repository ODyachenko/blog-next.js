import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const uploadsApi = createApi({
  reducerPath: 'uploadsApi',
  tagTypes: ['uploads'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444/uploads',
  }),
  endpoints: (builder: any) => ({
    // getPosts: builder.query({
    //   query: () => `/posts`,
    //   providesTags: ['posts'],
    // }),

    uploadImage: builder.mutation({
      query: (body: any) => ({
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body,
      }),
      invalidatesTags: ['uploads'],
    }),
    // deletePost: builder.mutation({
    //   query: (id: string) => ({
    //     url: `/posts/${id}`,
    //     headers: {
    //       Authorization: localStorage.getItem('token'),
    //     },
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['posts'],
    // }),
  }),
});

export const { useUploadImageMutation } = uploadsApi;
