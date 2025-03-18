import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 40px 0px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  padding: 20px 30px;
  gap: 12px;
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 20px 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 32px;
    margin: 12px 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const DetailSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
  &:last-child {
    border-bottom: none;
  }
`;

export const DetailTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const DetailText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
`;

export const Tag = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 4px 12px;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
`;

export const BackButton = styled.button`
  align-self: flex-start;
  padding: 8px 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 15};
  }
`;

export const MarkdownContent = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.text_primary};
  
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 20px 0 10px 0;
    color: ${({ theme }) => theme.primary};
  }
  
  p {
    margin: 10px 0;
    line-height: 1.5;
  }
  
  ul {
    margin-left: 20px;
  }
  
  li {
    margin: 5px 0;
  }
`;
