import api from "../api/client";

export const getDashboard = async () => {
  const response = await api.get("/dashboard");
  return response.data;
};
