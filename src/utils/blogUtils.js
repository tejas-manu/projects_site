// Import the pre-built JSON file
import blogsData from '../data/blogs.json';

export function getAllBlogs() {
  console.log('Loading blogs from JSON:', blogsData);
  return blogsData || [];
}

export function getBlogById(id) {
  const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
  return blogsData.find(blog => blog.id === numericId);
}