import { apiSlice } from "./apiSlice";

export const exerciseSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExerciseByMuscleGroups: builder.query({
      query: (id) => ({
        url: `/exercise/muscleGroup/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetExerciseByMuscleGroupsQuery } = exerciseSlice;
