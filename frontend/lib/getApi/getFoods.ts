import { axiosInstance } from "../utils";

export const getFoods = async () => {
  try {
    const response = await axiosInstance.get(`/food`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
