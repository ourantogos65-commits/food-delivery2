import { axiosInstance } from "../utils";

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/Categories");
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching categories:",
      error.response?.data || error.message
    );
    throw error; // rethrow so you can catch it upstream if needed
  }
};
