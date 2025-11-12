import { axiosInstance } from "@/lib/utils";


export const getCategoryById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/category/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movie by ID:", error);
  }
};
