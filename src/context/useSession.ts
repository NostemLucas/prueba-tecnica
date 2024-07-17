import axios from "axios";

export const fetchImages = async (query: string, perPage: number = 20) => {
  const auth = "Client-ID vGj0Ajmw-yf-2esp6cKS9pFfYN2wq5cPJ-ewit6SM1U";
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, per_page: perPage },
      headers: { Authorization: auth },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
