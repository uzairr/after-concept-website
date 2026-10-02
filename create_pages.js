const fs = require('fs');
const path = require('path');

const routes = [
  '/about',
  '/services',
  '/solutions',
  '/industries',
  '/products',
  '/engagement-models',
  '/contact',
  '/about/leadership',
  '/about/partners',
  '/about/awards-certificates',
  '/about/venture-studio',
  '/about/open-source',
  '/about/testimonials',
  '/about/platform-expertise',
  '/about/careers'
];

const template = (title) => `"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#060f1c] pt-40 px-8 lg:px-[50px] text-white flex flex-col items-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">${title}</h1>
        <p className="text-lg text-gray-400 text-center max-w-2xl">
          This is a placeholder page for ${title}. Content will be added here soon.
        </p>
      </main>
      <Footer />
    </>
  );
}
`;

const baseDir = path.join(__dirname, 'app');

routes.forEach(route => {
  const dirPath = path.join(baseDir, route);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const filePath = path.join(dirPath, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    const title = route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    fs.writeFileSync(filePath, template(title));
    console.log("Created " + filePath);
  }
});
