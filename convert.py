import re
import os

with open('index(3).html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract styles
style_match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
styles = style_match.group(1) if style_match else ''

globals_css = """@tailwind base;
@tailwind components;
@tailwind utilities;

""" + styles

with open('app/globals.css', 'w', encoding='utf-8') as f:
    f.write(globals_css)

# Extract body
body_match = re.search(r'<body>(.*?)</body>', html, re.DOTALL)
body = body_match.group(1) if body_match else ''

# Clean up body to JSX
jsx = body
jsx = jsx.replace('class=', 'className=')
jsx = jsx.replace('style="', 'style={{')
# Fix specific styles
jsx = re.sub(r'style=\{\{(.*?)\}\}', lambda m: 'style={{' + m.group(1).replace('background:#fff;', 'background:"#fff"').replace('border-top:1px solid var(--line);', 'borderTop:"1px solid var(--line)"').replace('border-bottom:1px solid var(--line);', 'borderBottom:"1px solid var(--line)"').replace('height:40%', 'height:"40%"').replace('height:55%', 'height:"55%"').replace('height:70%', 'height:"70%"').replace('height:50%', 'height:"50%"').replace('height:85%', 'height:"85%"').replace('height:65%', 'height:"65%"').replace('height:95%', 'height:"95%"').replace('text-align:center;', 'textAlign:"center"').replace('margin-top:44px;', 'marginTop:"44px"') + '}}', jsx)

# Remove any other non-JSX compliant parts like self-closing tags without slash if any, though HTML5 img usually requires it.
jsx = jsx.replace('<br>', '<br/>').replace('<hr>', '<hr/>')

page_tsx = f"""import Link from 'next/link';

export default function Home() {{
  return (
    <>
{jsx}
    </>
  );
}}
"""

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_tsx)
