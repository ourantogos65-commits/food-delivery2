import { axiosInstance } from "../utils";

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching categories:",
      error.response?.data || error.message
    );
    throw error; 
  }
};
