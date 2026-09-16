const fs = require('fs');
let f = fs.readFileSync('app/page.tsx', 'utf8');
f = f.replace(/href="case-studies\.html"/g, 'href="/case-studies"');
f = f.replace(/href="case-study-bultra-bank\.html"/g, 'href="/case-studies"');
f = f.replace(/href="case-study-swiftcart\.html"/g, 'href="/case-studies/swiftcart"');
fs.writeFileSync('app/page.tsx', f);
console.log('done');
