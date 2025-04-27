import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Config from "react-native-config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl:  Config.BASE_URL,
    prepareHeaders: async (headers) => {
        const token = Config.API_KEY;
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
      },
   }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query<any,void>({
      query: () => "/discover/movie", 
    }),
    
  }),
});

export const { useGetTrendingMoviesQuery } = apiSlice;
