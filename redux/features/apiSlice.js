import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/' }),
  endpoints: builder => ({
    getTopAnime: builder.query({ //wait for 3 secs before sending the req
      query: () => 'top/anime'
    }),
    getAnime: builder.query({ //wait until getTopAnime is done 
      query: id => `anime/${id}`
    })
  })
})

export const { useGetTopAnimeQuery, useGetAnimeQuery } = apiSlice