import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const Card = styled.div`
  width: 330px;
  height: 390px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 14px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  border: 0.1px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(0, 120, 255, 0.15) 0px 4px 24px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  object-fit: cover;
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

export const DateText = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin-bottom: 8px;
`;

export const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  font-size: 16px;
`;
