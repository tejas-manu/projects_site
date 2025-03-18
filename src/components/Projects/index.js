import React, { useState, useEffect } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './Projects_style'
import ProjectCard from './ProjectCard'
import { getAllProjects } from '../../utils/mdUtils'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Load projects from markdown files (via the generated JSON)
    const projectData = getAllProjects();
    console.log("Loaded projects:", projectData); // Debug log
    setProjects(projectData);
  }, []);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of my notable projects that showcase my skills and expertise.
        </Desc>
        <CardContainer>
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p>No projects found. Please make sure your markdown files are properly set up.</p>
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
