
import { axiosInstance } from "../utils";

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/foodcategory");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
