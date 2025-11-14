
import { axiosInstance } from "../utils";

export const getOrder = async () => {
  try {
    const response = await axiosInstance.get("/foodOrder");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
