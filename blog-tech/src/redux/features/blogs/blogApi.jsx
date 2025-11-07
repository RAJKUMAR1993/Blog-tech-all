import publicAxios from "../../../components/publicAxios.jsx";

export const getBlog = async (tags, search) => {
  let queryString = tags.length ? `tags_like=${tags.join(",")}` : "";

  if (search !== "") {
    queryString += `${queryString ? "&" : ""}q=${search}`;
  }

  try {
    const response = await publicAxios.get(`/blogs/?${queryString}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};
