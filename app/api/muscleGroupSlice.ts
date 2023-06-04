import { apiSlice } from "./apiSlice";

export const muscleGroupSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMuscleGroups: builder.query({
      query: () => ({
        url: "/muscleGroup",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMuscleGroupsQuery } = muscleGroupSlice;
