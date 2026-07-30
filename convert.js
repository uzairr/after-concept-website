const fs = require('fs');

const html = fs.readFileSync('index(3).html', 'utf-8');

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
const styles = styleMatch ? styleMatch[1] : '';

const globalsCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

${styles}`;

fs.writeFileSync('app/globals.css', globalsCss);

let bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
let body = bodyMatch ? bodyMatch[1] : '';

// Convert to JSX
let jsx = body;
jsx = jsx.replace(/class=/g, 'className=');

jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    let styles = p1.split(';').filter(s => s.trim()).map(s => {
        let [key, val] = s.split(':').map(str => str.trim());
        if (!key || !val) return '';
        key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${key}: "${val}"`;
    }).join(', ');
    return `style={{ ${styles} }}`;
});

jsx = jsx.replace(/<br>/g, '<br/>').replace(/<hr>/g, '<hr/>');

const pageTsx = `import Link from 'next/link';

export default function Home() {
  return (
    <>
${jsx}
    </>
  );
}
`;

fs.writeFileSync('app/page.tsx', pageTsx);
console.log('Conversion complete.');
