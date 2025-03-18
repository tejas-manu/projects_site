import React from 'react'
import { Card, Image, Tags, Tag, Details, CardTitle, Description } from './Projects_style'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <Card onClick={handleClick}>
      <Image src={project.image} />
      <Tags>
        {project.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <CardTitle>{project.title}</CardTitle>
        <Description>{project.description}</Description>
      </Details>
    </Card>
  )
}

export default ProjectCard
