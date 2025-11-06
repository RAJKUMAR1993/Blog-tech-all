import publicAxios from "../../../components/publicAxios.jsx";

export const getBlog = async () => {
  try {
    const response = await publicAxios.get(`/blogs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};
