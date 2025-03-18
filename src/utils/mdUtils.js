// Import the pre-built JSON file
import projectsData from '../data/projects.json';

export function getAllProjects() {
  console.log('Loading projects from JSON:', projectsData);
  return projectsData || [];
}

export function getProjectById(id) {
  const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
  return projectsData.find(project => project.id === numericId);
}




