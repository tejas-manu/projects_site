const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const projectsDirectory = path.join(process.cwd(), 'src/data/markdown');
const outputFile = path.join(process.cwd(), 'src/data/projects.json');

// Add more logging
console.log('Project directory path:', projectsDirectory);
console.log('Output file path:', outputFile);

function buildProjects() {
  console.log('Building projects from markdown files...');
  
  // Create directory if it doesn't exist
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Create markdown directory if it doesn't exist
  if (!fs.existsSync(projectsDirectory)) {
    console.log(`Creating directory ${projectsDirectory}`);
    fs.mkdirSync(projectsDirectory, { recursive: true });
  }
  
  // Get file names under /markdown
  if (!fs.existsSync(projectsDirectory)) {
    console.log(`Warning: Directory ${projectsDirectory} does not exist. Creating empty projects.json.`);
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    return;
  }
  
  const fileNames = fs.readdirSync(projectsDirectory);
  console.log(`Found ${fileNames.length} markdown files in ${projectsDirectory}`);
  
  const allProjectsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Parse tags if they're a string
      const tags = typeof matterResult.data.tags === 'string' 
        ? matterResult.data.tags.split(',').map(tag => tag.trim())
        : matterResult.data.tags;

      // Parse content into sections
      const sections = matterResult.content.split('##').filter(Boolean);
      const details = {};
      
      sections.forEach(section => {
        const lines = section.trim().split('\n');
        const title = lines[0].trim().toLowerCase();
        const content = lines.slice(1).join('\n').trim();
        
        if (title === 'overview') {
          details.overview = content;
        } else if (title === 'features') {
          details.features = content.split('-').filter(Boolean).map(f => f.trim());
        } else if (title === 'technologies') {
          details.technologies = content.split(',').map(t => t.trim());
        } else if (title === 'challenges') {
          details.challenges = content;
        } else if (title === 'outcome') {
          details.outcome = content;
        }
      });

      // Combine the data with the id and content
      return {
        id: matterResult.data.id || parseInt(id.replace('project', '')),
        ...matterResult.data,
        tags,
        content: matterResult.content,
        details
      };
    });

  // Sort projects by id
  const sortedProjects = allProjectsData.sort((a, b) => a.id - b.id);
  
  // Write to JSON file
  fs.writeFileSync(outputFile, JSON.stringify(sortedProjects, null, 2));
  
  console.log(`Successfully built ${sortedProjects.length} projects to ${outputFile}`);
}

buildProjects();



