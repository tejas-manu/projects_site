import React, { useState, useEffect } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './Blogs_style';
import BlogCard from './BlogCard';
import { getAllBlogs } from '../../utils/blogUtils';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    // Load blogs from markdown files (via the generated JSON)
    const blogData = getAllBlogs();
    console.log("Loaded blogs:", blogData); // Debug log
    setBlogs(blogData);
  }, []);

  return (
    <Container id="blogs">
      <Wrapper>
        <Title>Blog Posts</Title>
        <Desc>
          Thoughts, tutorials, and insights on technology and development.
        </Desc>
        <CardContainer>
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          ) : (
            <p>No blog posts found. Please make sure your markdown files are properly set up.</p>
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Blogs;