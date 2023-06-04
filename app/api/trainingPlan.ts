import { apiSlice } from "./apiSlice";

export const trainingPlanSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrainingPlans: builder.query({
      query: () => ({
        url: "/trainingPlan",
        method: "GET",
      }),
    }),
    getTrainingPlanById: builder.query({
      query: (id) => ({
        url: `/trainingPlan/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTrainingPlansQuery, useGetTrainingPlanByIdQuery } =
  trainingPlanSlice;
