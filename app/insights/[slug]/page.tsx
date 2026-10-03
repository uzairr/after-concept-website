import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

// Reuse the exact same insight data (normally this would be fetched from a DB or CMS)
const insights = [
  {
    id: "1",
    slug: "article-1",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    tagType: "Whitepaper",
    title: "Intelligence Flow in Healthcare: Mapping the Next Wave",
    description:
      "Healthcare organizations must focus on Intelligence Flow: the seamless and governed movement of data, insight, and decisions across the entire healthcare spectrum. By connecting disparate data sources, organizations can unlock predictive insights that improve patient outcomes and operational efficiency.",
    tags: ["Data & AI", "Leadership & Governance", "Healthcare"],
    content: `
      <p class="mb-4">The healthcare industry generates a massive amount of data every day, from electronic health records to wearable device metrics. However, much of this data remains siloed, preventing organizations from realizing its full potential.</p>
      <p class="mb-4">Intelligence flow is the concept of breaking down these silos to create a continuous, governed pipeline of information. When data flows freely but securely, AI algorithms can identify patterns that humans might miss, enabling proactive interventions and personalized treatment plans.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">The Impact of Intelligence Flow</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2"><strong>Improved Patient Outcomes:</strong> Predictive models can flag at-risk patients earlier.</li>
        <li class="mb-2"><strong>Operational Efficiency:</strong> Streamlined workflows reduce administrative burden on staff.</li>
        <li class="mb-2"><strong>Cost Reduction:</strong> Optimized resource allocation minimizes waste.</li>
      </ul>
      <p>To implement this successfully, organizations need strong leadership and a robust governance framework to ensure data privacy, security, and compliance with regulations like HIPAA.</p>
    `,
  },
  {
    id: "2",
    slug: "article-2",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    tagType: "Executive Brief",
    title: "Modernizing Legacy Systems Is Not a Technology Decision: It's a Business One",
    description:
      "This brief reframes modernization as a business portfolio decision: where to sequence investment, how to avoid the patterns that stall well-funded programs, and how to align technical upgrades with strategic objectives.",
    tags: ["Leadership & Governance", "Travel"],
    content: `
      <p class="mb-4">For too long, legacy modernization has been treated purely as an IT initiative. The reality is that outdated systems are a business risk, hindering agility, innovation, and customer experience.</p>
      <p class="mb-4">When modernization is framed as a technology decision, it often struggles to secure funding and buy-in from the C-suite. However, when it's positioned as a strategic enabler—a way to enter new markets, launch new products faster, or improve margins—the conversation changes.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">Key Steps for Business-Led Modernization</h2>
      <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2"><strong>Align with Business Goals:</strong> Identify which legacy systems are the biggest bottlenecks to strategic objectives.</li>
        <li class="mb-2"><strong>Prioritize by Value:</strong> Don't try to modernize everything at once. Focus on the areas that will deliver the fastest ROI.</li>
        <li class="mb-2"><strong>Build Cross-Functional Teams:</strong> Ensure IT and business units collaborate closely throughout the process.</li>
      </ol>
      <p>By shifting the perspective, organizations can turn modernization from a costly technical upgrade into a powerful engine for business growth.</p>
    `,
  },
  {
    id: "3",
    slug: "article-3",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    tagType: "Executive Brief",
    title: "Critical Developments and Obstacles Technology Leaders Need to Tackle in 2026",
    description:
      "The challenges facing technology leaders in 2026 are not new, and that is precisely the problem. The question is no longer what to tackle, but why capable, well-funded organizations still struggle with these foundational issues.",
    tags: ["Leadership & Governance", "Data & AI", "Cybersecurity", "E-commerce", "Technology"],
    content: `
      <p class="mb-4">As we look toward 2026, technology leaders are grappling with a familiar set of challenges: cybersecurity threats, data integration complexities, and the need for scalable e-commerce platforms. Despite significant investments, many organizations still find themselves reacting to issues rather than proactively managing them.</p>
      <p class="mb-4">The core issue often lies not in the technology itself, but in the execution and governance surrounding it. A lack of clear strategy, siloed teams, and insufficient talent can derail even the most well-funded initiatives.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">Overcoming the Obstacles</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2"><strong>Strengthen Cybersecurity:</strong> Move from a reactive posture to a proactive, intelligence-driven approach.</li>
        <li class="mb-2"><strong>Master Data Integration:</strong> Treat data as a strategic asset, ensuring it flows seamlessly across the enterprise.</li>
        <li class="mb-2"><strong>Optimize E-commerce:</strong> Build flexible, resilient platforms that can adapt to rapidly changing consumer expectations.</li>
      </ul>
      <p>To succeed in 2026 and beyond, technology leaders must focus on building resilient, agile organizations capable of turning these persistent obstacles into competitive advantages.</p>
    `,
  },
];

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = insights.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center text-[#0a76db] font-medium hover:text-[#085ab3] transition-colors mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block text-xs font-bold px-3 py-1.5 bg-[#e2e8f0] text-[#0f172a] rounded-sm uppercase tracking-wider">
                {article.tagType}
              </span>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-sm text-gray-500 bg-white border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              {article.description}
            </p>
          </header>

          {/* Featured Image */}
          <div className="w-full h-64 md:h-[400px] mb-12 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
