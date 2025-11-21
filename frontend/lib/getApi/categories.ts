import { axiosInstance } from "../utils";

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error) {
   console.error(error)
  }
};
export const getCategoryById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movie by ID:", error);
  }
};
