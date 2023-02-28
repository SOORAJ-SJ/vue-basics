import api from "./api";

//get all posts
export const getPosts = (limit, skip) => api.get(`/posts?limit=${limit}&skip=${skip * 10}`);