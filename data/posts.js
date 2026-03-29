let posts = [];
let id = 1;

export const getAllPosts = () => posts;

export const addPost = (title, content) => {
  const newPost = { id: id++, title, content };
  posts.push(newPost);
  return newPost;
};

export const updatePostById = (postId, title, content) => {
  const post = posts.find((p) => p.id == postId);

  if (!post) return null;

  post.title = title;
  post.content = content;
  return post;
};

export const deletePostById = (postId) => {
  const exists = posts.some((p) => p.id == postId);
  posts = posts.filter((p) => p.id != postId);
  return exists;
};