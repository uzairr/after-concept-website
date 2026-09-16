const fs = require('fs'); const code = fs.readFileSync('HeroComponent.jsx', 'utf8'); const lines = code.split('\n'); lines.forEach((line, i) => { if(line.includes('\\') || line.includes('\\);
