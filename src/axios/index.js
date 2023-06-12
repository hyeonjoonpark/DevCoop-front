import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.129.57.252:6002",
});

export const getStudentinfo = async () => {
  try {
    const response = await axiosInstance.get("/api/studentinfo");
    return response.data;
  } catch (error) {
    throw error;
  }
};
