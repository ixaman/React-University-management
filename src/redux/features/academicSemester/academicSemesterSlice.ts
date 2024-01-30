import { baseApi } from '../../api/baseAPi';

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: '/semesters',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery } = academicSemesterApi;
