import axios from "axios";

export const getUser = async userId => {
  const data = await axios.get(`/api/users/profile/${userId}`);
  return data;
};

export const getQueryResults = async queryArr => {
  const userProfiles = await axios.post("api/auth/lenderQuery", queryArr);
  return userProfiles;
};

export const adminGetUserById = async id => {
  try {
    const user = await axios.get(`/api/admin/id/${id}`);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const getAllUsersQuery = async () => {
  try {
    const users = await axios.get("/api/auth/allLenderQuery");
    return users;
  } catch (err) {
    console.log(err);
  }
};

export const sendEmailObj = async emailObj => {
  try {
    await axios.post("/api/users/email", emailObj);
    return "message sent";
  } catch (err) {
    console.log(err);
  }
};

export const setSolicitationDate = async emailArr => {
  try {
    await axios.post("/api/users/email", emailObj);
  } catch (err) {
    await axios.post("/api/users/findBySolicitation", emailArr);
  }
};

// export const followUser = async followId => {
//   const { data } = await axios.put("/api/users/follow", { followId });
//   return data;
// };

// export const unfollowUser = async followId => {
//   const { data } = await axios.put("/api/users/unfollow", { followId });
//   return data;
// };

// export const deleteUser = async authUserId => {
//   const { data } = await axios.delete(`/api/users/${authUserId}`);
//   return data;
// };

// export const getAuthUser = async authUserId => {
//   const { data } = await axios.get(`/api/users/${authUserId}`);
//   return data;
// };

// export const updateUser = async (authUserId, userData) => {
//   const { data } = await axios.put(`/api/users/${authUserId}`, userData);
//   return data;
// };

// export const getUserFeed = async authUserId => {
//   const { data } = await axios.get(`/api/users/feed/${authUserId}`);
//   return data;
// };

// export const addPost = async (authUserId, post) => {
//   const { data } = await axios.post(`/api/posts/new/${authUserId}`, post);
//   return data;
// };

// export const getPostFeed = async authUserId => {
//   const { data } = await axios.get(`/api/posts/feed/${authUserId}`);
//   return data;
// };

// export const deletePost = async postId => {
//   const { data } = await axios.delete(`/api/posts/${postId}`);
//   return data;
// };

// export const likePost = async postId => {
//   const { data } = await axios.put(`/api/posts/like`, { postId });
//   return data;
// };

// export const unlikePost = async postId => {
//   const { data } = await axios.put(`/api/posts/unlike`, { postId });
//   return data;
// };

// export const addComment = async (postId, comment) => {
//   const { data } = await axios.put("/api/posts/comment", { postId, comment });
//   return data;
// };

// export const deleteComment = async (postId, comment) => {
//   const { data } = await axios.put("/api/posts/uncomment", { postId, comment });
//   return data;
// };

// export const getPostsByUser = async userId => {
//   const { data } = await axios.get(`/api/posts/by/${userId}`);
//   return data;
// };
