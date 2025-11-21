import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:5000", // URL of the Python backend
  headers: {
    "Content-Type": "application/json",
  },
});

export const predictSign = async (imageBase64: string) => {
  try {
    const response = await apiClient.post("/predict", { image: imageBase64 });
    return response.data;
  } catch (error) {
    console.error("Error predicting sign:", error);
    throw error;
  }
};
