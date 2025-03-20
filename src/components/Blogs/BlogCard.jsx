import React from 'react';
import { Card, Image, Tags, Tag, Details, CardTitle, Description, DateText } from './Blogs_style';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Card onClick={handleClick}>
      <Image src={blog.image} />
      <Details>
        <div>
          <DateText>{formatDate(blog.date)}</DateText>
          <CardTitle>{blog.title}</CardTitle>
          <Description>{blog.description}</Description>
        </div>
        <Tags>
          {blog.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      </Details>
    </Card>
  )
}

export default BlogCard;
