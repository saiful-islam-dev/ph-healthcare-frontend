import { baseApi } from "./baseApi";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),

    getAllSpecialties: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      // providesTags: [tagTypes.specialties],
    }),

    deleteSpecialties: build.mutation({
      query: (id) => ({
        url: `/specialties/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateSpecialtyMutation,
  useGetAllSpecialtiesQuery,
  useDeleteSpecialtiesMutation,
} = specialtiesApi;