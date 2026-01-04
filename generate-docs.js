const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const docsDir = path.join(__dirname, 'docs');

console.log('Starting documentation generation...');

// 1. Ensure docs directory exists (clean it first)
if (fs.existsSync(docsDir)) {
    fs.rmSync(docsDir, { recursive: true, force: true });
    console.log('Cleaned docs directory.');
}
fs.mkdirSync(docsDir);
console.log('Created docs directory.');

// 2. Generate client API docs using JSDoc
console.log('Generating client API docs...');
try {
    execSync('npx jsdoc -c jsdoc.json', { stdio: 'inherit' });
    console.log('Client API docs generated successfully.');
} catch (error) {
    console.error('Error generating client API docs:', error);
    process.exit(1);
}

console.log('Documentation generation complete! Open docs/index.html to view.');
