import axios from "axios";

function getToken() {
  return localStorage.getItem("token");
}

const postLogin = async (emailOrUsername, password) => {
  const response = await axios({
    method: "POST",
    url: "http://localhost:80/login",
    data: { emailOrUsername, password },
  });

  return response;
};

const postRegister = async (email, username, password) => {
  const response = await axios({
    method: "POST",
    url: "http://localhost:80/register",
    data: { email, username, password },
  });

  return response;
};

const postGoogleAuth = async (googleToken) => {
  const response = await axios({
    method: "POST",
    url: "http://localhost:80/login/google",
    data: { googleToken },
  });

  return response;
};

const getUser = async () => {
  const response = await axios({
    method: "GET",
    url: "http://localhost:80/user",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response;
};

const getAllPosts = async (currentPage, filter) => {
  try {
    let option = ``;

    if (currentPage) option += `page=${currentPage}`;
    if (filter) option += `&filter[UserId]=${filter}`;
    const response = await axios({
      method: "GET",
      url: `http://localhost:80/posts?${option}`,
    });
    return response;
  } catch (error) {
    console.error("Failed to fetch posts", error);
    throw error;
  }
};

const getPostDetail = async (postId) => {
  const response = await axios({
    method: "GET",
    url: `http://localhost:80/posts/detail/${postId}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response;
};

const createPost = async (formData) => {
  const response = await axios({
    method: "POST",
    url: "http://localhost:80/posts",
    data: formData,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response;
};

const postLike = async (postId) => {
  const response = await axios({
    method: "POST",
    url: `http://localhost:80/posts/${postId}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response;
};

const postComment = async (commentText, PostId) => {
  const response = await axios({
    method: "POST",
    url: "http://localhost:80/comment/post",
    data: { commentText, PostId },
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response;
};

const updateProfile = async (formData) => {
  const response = await axios({
    method: "PUT",
    url: "http://localhost:80/profile/edit",
    data: formData,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response;
};

const getAiResponse = async () => {
  const response = await axios({
    method: "GET",
    url: "http://localhost:80/ai",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response;
};

export {
  updateProfile,
  getAiResponse,
  postLogin,
  postRegister,
  postGoogleAuth,
  getUser,
  getAllPosts,
  createPost,
  postLike,
  getPostDetail,
  postComment,
};