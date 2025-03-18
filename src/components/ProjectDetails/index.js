import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getProjectById } from '../../utils/mdUtils';
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
  ButtonContainer, 
  Button, 
  BackButton,
  MarkdownContent 
} from './ProjectDetails_style';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  if (!project) {
    return (
      <Container>
        <Wrapper>
          <Title>Project not found</Title>
          <BackButton onClick={() => navigate('/')}>
            <FaArrowLeft /> Back to Projects
          </BackButton>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        <BackButton onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to Projects
        </BackButton>
        
        <Title>{project.title}</Title>
        
        <Image src={project.image} alt={project.title} />
        
        <DetailSection>
          <DetailText>{project.description}</DetailText>
          <TagContainer>
            {project.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagContainer>
          
          <ButtonContainer>
            {project.github && (
              <Button onClick={() => window.open(project.github, '_blank')}>
                <FaGithub /> GitHub
              </Button>
            )}
            {project.webapp && (
              <Button onClick={() => window.open(project.webapp, '_blank')}>
                <FaExternalLinkAlt /> Live Demo
              </Button>
            )}
          </ButtonContainer>
        </DetailSection>
        
        <DetailSection>
          <MarkdownContent>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {project.content}
            </ReactMarkdown>
          </MarkdownContent>
        </DetailSection>
      </Wrapper>
    </Container>
  );
};

export default ProjectDetails
