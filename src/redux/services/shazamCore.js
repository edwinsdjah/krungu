import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '77f49422c3msh98244890cca3f54p10b679jsn16962017ba1e',
    'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
  },
};

fetch(
  'https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=IN',
  options
)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: () => {
      headers.set(
        'x-rapidapi-key',
        '77f49422c3msh98244890cca3f54p10b679jsn16962017ba1e'
      );
    },
  }),
});
