import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.1.106:8080",
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
