import axios from "axios";

const ACCESS_KEY = "W6HczhHDyYJ-vhLtF4ezxvF5jSeAqy1SP7ykf5F-q8A";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 1, perPage = 12) => {
  if (!query) {
    throw new Error("Search query is empty!");
  }

  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
