import { apiSlice } from "./apiSlice";

export const historySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: () => ({
        url: "/histories/1",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetHistoryQuery } = historySlice;
