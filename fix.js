const fs = require('fs');
let code = fs.readFileSync('HeroComponent.jsx', 'utf8');

// Replace \` with `
code = code.replace(/\\`/g, '`');

// Replace \${ with ${
code = code.replace(/\\\${/g, '${');

fs.writeFileSync('HeroComponent.jsx', code);
console.log('Fixed syntax errors in HeroComponent.jsx');
