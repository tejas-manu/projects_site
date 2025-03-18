import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 0;
`;

export const DateText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin: 20px 0;
`;

export const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
`;

export const DetailTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

export const DetailText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
`;

export const Tag = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 4px 12px;
  border-radius: 8px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.bg_secondary};
  }
`;

export const MarkdownContent = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.7;
  margin-top: 20px;
  
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text_primary};
    margin: 30px 0 16px 0;
  }
  
  h1 {
    font-size: 32px;
  }
  
  h2 {
    font-size: 28px;
  }
  
  h3 {
    font-size: 24px;
  }
  
  p {
    margin: 16px 0;
    color: ${({ theme }) => theme.text_secondary};
  }
  
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  ul, ol {
    margin: 16px 0;
    padding-left: 24px;
    color: ${({ theme }) => theme.text_secondary};
  }
  
  li {
    margin: 8px 0;
  }
  
  blockquote {
    border-left: 4px solid ${({ theme }) => theme.primary};
    padding-left: 16px;
    margin: 16px 0;
    color: ${({ theme }) => theme.text_secondary};
  }
  
  code {
    font-family: monospace;
    background-color: ${({ theme }) => theme.bg_secondary};
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 14px;
  }
  
  pre {
    background-color: ${({ theme }) => theme.bg_secondary};
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 16px 0;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
  
  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 16px 0;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    
    th, td {
      border: 1px solid ${({ theme }) => theme.text_secondary + 30};
      padding: 8px 12px;
    }
    
    th {
      background-color: ${({ theme }) => theme.bg_secondary};
    }
  }
`;