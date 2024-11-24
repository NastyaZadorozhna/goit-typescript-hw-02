import axios from "axios";
import { FetchImagesResponse } from "../types";

const ACCESS_KEY = "W6HczhHDyYJ-vhLtF4ezxvF5jSeAqy1SP7ykf5F-q8A";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(BASE_URL, {
    params: { query, page, per_page: perPage, client_id: ACCESS_KEY },
  });
  return response.data;
};
