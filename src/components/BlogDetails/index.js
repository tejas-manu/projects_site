import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogById } from '../../utils/blogUtils';
import { 
  Container, 
  Wrapper, 
  Title, 
  Image, 
  DetailSection, 
  DetailTitle, 
  DetailText, 
  TagContainer, 
  Tag, 
  BackButton,
  MarkdownContent,
  DateText
} from './BlogDetails_style';
import { FaArrowLeft } from 'react-icons/fa';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = getBlogById(id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Container>
      <Wrapper>
        <BackButton onClick={() => navigate('/blogs')}>
          <FaArrowLeft /> Back to Blogs
        </BackButton>
        
        <Title>{blog.title}</Title>
        <DateText>{formatDate(blog.date)}</DateText>
        
        <Image src={blog.image} alt={blog.title} />
        
        <DetailSection>
          <DetailText>{blog.description}</DetailText>
          <TagContainer>
            {blog.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagContainer>
        </DetailSection>
        
        <MarkdownContent>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </MarkdownContent>
      </Wrapper>
    </Container>
  );
};

export default BlogDetails;