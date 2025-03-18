const fs = require('fs');
const path = require('path');

const projectsDirectory = path.join(process.cwd(), 'src/data/markdown');
const outputFile = path.join(process.cwd(), 'src/data/projects.json');

console.log('Checking markdown files...');
console.log('Project directory path:', projectsDirectory);
console.log('Output file path:', outputFile);

// Check if directory exists
if (!fs.existsSync(projectsDirectory)) {
  console.log(`Directory ${projectsDirectory} does not exist.`);
  console.log('Creating directory...');
  fs.mkdirSync(projectsDirectory, { recursive: true });
  console.log('Directory created.');
} else {
  console.log(`Directory ${projectsDirectory} exists.`);
  
  // List files in directory
  const files = fs.readdirSync(projectsDirectory);
  console.log(`Found ${files.length} files in directory:`);
  files.forEach(file => {
    console.log(`- ${file}`);
    
    // Check if file is readable
    const filePath = path.join(projectsDirectory, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      console.log(`  File is readable. Size: ${content.length} bytes`);
    } catch (error) {
      console.log(`  Error reading file: ${error.message}`);
    }
  });
}

// Check if output file exists
if (fs.existsSync(outputFile)) {
  console.log(`Output file ${outputFile} exists.`);
  try {
    const content = fs.readFileSync(outputFile, 'utf8');
    console.log(`Output file content: ${content}`);
    try {
      const json = JSON.parse(content);
      console.log(`Parsed JSON. Found ${json.length} projects.`);
    } catch (error) {
      console.log(`Error parsing JSON: ${error.message}`);
    }
  } catch (error) {
    console.log(`Error reading output file: ${error.message}`);
  }
} else {
  console.log(`Output file ${outputFile} does not exist.`);
}

console.log('Check complete.');