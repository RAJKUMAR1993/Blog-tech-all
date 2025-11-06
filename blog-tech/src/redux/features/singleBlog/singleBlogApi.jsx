import publicAxios from "../../../components/publicAxios.jsx";

export const getSingleBlog = async (id) => {
  try {
    const response = await publicAxios.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};
