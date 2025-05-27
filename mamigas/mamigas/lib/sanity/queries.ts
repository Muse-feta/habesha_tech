import { defineQuery } from "next-sanity";

// GROQ Query for Blog Listing Page
const fetchBlogPosts =
  defineQuery(`*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "categories": categories[]->title
}
`);

// Query for Recent Posts (limit 3)
const fetchRecentPosts =
  defineQuery(`*[_type == "post"] | order(publishedAt desc)[0...3] {
  title,
  slug,
  mainImage,
  publishedAt
}
`);

// Query for Posts by Category
 const fetchPostsByCategory = defineQuery(`
    *[_type == "post" && references(*[_type == "category" && title == $category]._id)] {
      title,
      slug,
      mainImage,
      publishedAt
    }
  `);

// GROQ Query to Fetch All Categories
const fetchCategories = defineQuery(`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug
}
`);

export { fetchBlogPosts, fetchRecentPosts,fetchPostsByCategory, fetchCategories };
