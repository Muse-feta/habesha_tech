import { client } from "./client";
import {
  fetchBlogPosts,
  fetchRecentPosts,
  fetchPostsByCategory,
  fetchCategories,
  fetchSingleBlog,
  fetchPostsByCategorySlug,
} from "./queries";

// Fetch blog posts
export const getBlogPosts = async () => {
  return await client.fetch(fetchBlogPosts);
};

// Fetch single blog post
export const getSingleBlog = async (slug: string) => {
  return await client.fetch(fetchSingleBlog, { slug });
};

// Fetch recent posts
export const getRecentPosts = async () => {
  return await client.fetch(fetchRecentPosts);
};

// Fetch posts by category (pass category title as argument)
export const getPostsByCategory = async (category: string) => {
  return await client.fetch(fetchPostsByCategory, { category });
};

// Fetch all categories
export const getCategories = async () => {
  return await client.fetch(fetchCategories);
};

// Fetch Blogs in a Single Category (by Category Slug)
export const getBlogsByCategory = async (slug: string) => {
  return await client.fetch(fetchPostsByCategorySlug, { slug });
};
