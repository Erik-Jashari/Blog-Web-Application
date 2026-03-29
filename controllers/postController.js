import {
  getAllPosts,
  addPost,
  updatePostById,
  deletePostById
} from "../data/posts.js";

export const getPosts = (req, res) => {
  res.json(getAllPosts());
};

export const createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).send("Title and content required");
  }

  const post = addPost(title, content);
  res.status(201).json(post);
};

export const updatePost = (req, res) => {
  const { title, content } = req.body;

  const updated = updatePostById(req.params.id, title, content);

  if (!updated) {
    return res.status(404).send("Post not found");
  }

  res.json(updated);
};

export const deletePost = (req, res) => {
  const deleted = deletePostById(req.params.id);

  if (!deleted) {
    return res.status(404).send("Post not found");
  }

  res.send("Post deleted");
};