import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const coinsApi = createApi({
  reducerPath: "coins/api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getCoinsById: build.query<any, string>({
      query: (coins: string) =>
        `coins/markets?vs_currency=usd&ids=${coins}&order=market_cap_desc&per_page=100&page=1&sparkline=fals`,
    }),
  }),
});

export const { useGetCoinsByIdQuery } = coinsApi;
