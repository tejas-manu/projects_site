const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Path to markdown files
const BLOGS_PATH = path.join(process.cwd(), 'src/data/markdown/blogs');
// Output path for JSON file
const OUTPUT_PATH = path.join(process.cwd(), 'src/data/blogs.json');

// Create blogs directory if it doesn't exist
if (!fs.existsSync(BLOGS_PATH)) {
  fs.mkdirSync(BLOGS_PATH, { recursive: true });
}

// Process all markdown files
function processMarkdownFiles() {
  // Get all markdown files
  const files = fs.readdirSync(BLOGS_PATH).filter(file => file.endsWith('.md'));
  
  // Process each file
  const blogs = files.map(file => {
    const filePath = path.join(BLOGS_PATH, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse frontmatter and content
    const { data, content } = matter(fileContent);
    
    // Return blog data with content
    return {
      ...data,
      content
    };
  });
  
  // Sort blogs by date (newest first)
  blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Write to JSON file
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(blogs, null, 2));
  
  console.log(`✅ Successfully processed ${blogs.length} blog posts`);
}

// Run the function
processMarkdownFiles();