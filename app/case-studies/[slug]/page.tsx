import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const caseStudiesData: Record<
  string,
  {
    industry: string;
    title: string;
    heroSub: string;
    hstat1Num: string;
    hstat1Label: string;
    hstat2Num: string;
    hstat2Label: string;
    hstat3Num: string;
    hstat3Label: string;
    bannerText: string;
    engagement: string;
    stack: string;
    client: string;
    quote?: string;
    quoteAuthor?: string;
    challengeSub: string;
    challengePoints: string[];
    solutionSub: string;
    solutionPoints: string[];
    capabilities: string[];
    resultsSub: string;
    fstat1Num: string;
    fstat1Label: string;
    fstat2Num: string;
    fstat2Label: string;
    fstat3Num: string;
    fstat3Label: string;
  }
> = {
  swiftcart: {
    industry: "Retail tech",
    title:
      "Real-time inventory sync across 12 warehouses, without a single spreadsheet",
    heroSub:
      "SwiftCart was overselling on marketplaces and understocking in-store, because three teams were reconciling the same inventory by hand, in three different spreadsheets.",
    hstat1Num: "4×",
    hstat1Label: "order throughput after go-live",
    hstat2Num: "0",
    hstat2Label: "overselling incidents since launch",
    hstat3Num: "9wks",
    hstat3Label: "from kickoff to production",
    bannerText: "SwiftCart — inventory sync dashboard",
    engagement: "Full build, 9 weeks",
    stack: "React, Node, Postgres, Shopify + WMS APIs",
    client: "SwiftCart",
    quote:
      "We wasn’t losing money on bad products. We were losing it on bad arithmetic.",
    quoteAuthor: "Priya Anand, COO, SwiftCart",
    challengeSub:
      "SwiftCart sells the same catalogue across its own storefront, two marketplaces, and 12 regional warehouses. Every sales channel needed an accurate, current stock count.",
    challengePoints: [
      "No single source of truth — each warehouse tracked stock locally.",
      "Manual reconciliation at scale across multiple channels.",
      "Order cancellations eroding customer trust.",
      "Growth made the manual process unsustainable.",
    ],
    solutionSub:
      "After Concept built an event-driven inventory service that every channel reads from and writes to in real time.",
    solutionPoints: [
      "Event-driven sync engine operating in near real-time.",
      "Automatic conflict resolution rules engine.",
      "Scanner-friendly interface for warehouse staff.",
      "Live ops dashboard with real-time stock alerts.",
    ],
    capabilities: [
      "Real-time multi-warehouse synchronization.",
      "Channel-aware inventory allocation.",
      "Automatic low-stock alert triggers.",
      "Complete audit trail for stock movements.",
    ],
    resultsSub:
      "Reconciliation overhead was eliminated, overselling dropped to zero, and order throughput quadrupled.",
    fstat1Num: "4×",
    fstat1Label: "order throughput, same team size",
    fstat2Num: "0",
    fstat2Label: "overselling incidents since launch",
    fstat3Num: "~6hrs/day",
    fstat3Label: "reconciliation time eliminated",
  },
  "northbridge-clinic": {
    industry: "Healthcare",
    title: "Patient scheduling automated end to end across three clinics",
    heroSub:
      "Northbridge Clinic faced severe booking bottlenecks and lost admin time managing appointments manually.",
    hstat1Num: "27hrs",
    hstat1Label: "admin time saved weekly",
    hstat2Num: "0",
    hstat2Label: "double-booking errors",
    hstat3Num: "4wks",
    hstat3Label: "from kickoff to deployment",
    bannerText: "Northbridge Clinic — automated scheduling suite",
    engagement: "Full workflow automation, 4 weeks",
    stack: "Next.js, Tailwind, n8n, Stripe, Google Calendar API",
    client: "Northbridge Clinic",
    challengeSub:
      "Managing patient visits manually across three clinics created administrative backlogs and scheduling friction.",
    challengePoints: [
      "No central coordination between branches.",
      "Manual phone confirmation calls consuming staff time.",
      "Frequent scheduling conflicts and missed appointments.",
    ],
    solutionSub:
      "We created an integrated end-to-end appointment automation engine with real-time sync.",
    solutionPoints: [
      "Automated patient calendar synchronization.",
      "SMS and email reminder workflows.",
      "Integrated payment and confirmation pipelines.",
    ],
    capabilities: [
      "Multi-branch dynamic scheduling.",
      "Instant patient check-in & verification.",
      "Automated cancellation & waitlist filling.",
    ],
    resultsSub:
      "Admin staff reclaimed 27 hours weekly while completely eliminating double bookings.",
    fstat1Num: "27hrs",
    fstat1Label: "weekly time saved",
    fstat2Num: "100%",
    fstat2Label: "automated confirmations",
    fstat3Num: "0",
    fstat3Label: "overlapping appointments",
  },
  ledgerly: {
    industry: "FinTech · SaaS",
    title:
      "Automated reconciliation dashboard replaces a 3-day month-end close",
    heroSub:
      "Ledgerly needed an efficient way to automate month-end financial reconciliation across multiple banking partners.",
    hstat1Num: "3d→2h",
    hstat1Label: "month-end close time",
    hstat2Num: "100%",
    hstat2Label: "reconciliation accuracy",
    hstat3Num: "6wks",
    hstat3Label: "time to production",
    bannerText: "Ledgerly — reconciliation engine",
    engagement: "FinTech core integration, 6 weeks",
    stack: "React, Next.js, Node.js, Postgres",
    client: "Ledgerly",
    challengeSub:
      "Month-end financial closing took days due to manual CSV exports and cross-table matching.",
    challengePoints: [
      "Slow manual matching across bank feeds.",
      "High risk of human error during reconciliation.",
      "Delayed financial reporting for stakeholders.",
    ],
    solutionSub:
      "Built an automated transaction matching platform with exception reporting.",
    solutionPoints: [
      "Automated multi-bank statement ingestion.",
      "Rule-based transaction matching engine.",
      "Instant discrepancy reporting.",
    ],
    capabilities: [
      "Real-time transaction matching.",
      "Automated ledger entries.",
      "Custom exception workflows.",
    ],
    resultsSub:
      "Reduced month-end closing timelines from 3 full days down to just 2 hours.",
    fstat1Num: "3d→2h",
    fstat1Label: "close time reduction",
    fstat2Num: "100%",
    fstat2Label: "audit accuracy",
    fstat3Num: "0",
    fstat3Label: "manual spreadsheet matches",
  },
  fieldwise: {
    industry: "Construction",
    title: "A dispatch app that routes crews without a single phone call",
    heroSub:
      "Fieldwise modernized dispatch logistics and crew dispatching without reliant manual communication.",
    hstat1Num: "2×",
    hstat1Label: "jobs completed per crew, per day",
    hstat2Num: "50%",
    hstat2Label: "reduction in dispatch call volume",
    hstat3Num: "5wks",
    hstat3Label: "build & deployment timeline",
    bannerText: "Fieldwise — crew dispatch app",
    engagement: "Custom Web & Mobile Workflow, 5 weeks",
    stack: "React, WebSockets, Node.js, Mapbox",
    client: "Fieldwise",
    challengeSub:
      "Dispatcher teams spent hours on phone calls coordinating site visits and routes.",
    challengePoints: [
      "Constant phone interruptions for field crews.",
      "Inflexible route adjustments during site delays.",
      "Lack of real-time crew status visibility.",
    ],
    solutionSub:
      "Deployed a live dispatch board with automatic field updates and route guidance.",
    solutionPoints: [
      "Real-time job status tracking via mobile web app.",
      "Automated crew route optimization.",
      "One-tap task completion logs.",
    ],
    capabilities: [
      "Live map dispatch view.",
      "Automated client notifications.",
      "Instant job site photo & sign-off updates.",
    ],
    resultsSub:
      "Field crews doubled their completed daily assignments while dispatch call volume halved.",
    fstat1Num: "2×",
    fstat1Label: "daily job completion rate",
    fstat2Num: "50%",
    fstat2Label: "fewer dispatch phone calls",
    fstat3Num: "100%",
    fstat3Label: "real-time site tracking",
  },
  "loop-logistics": {
    industry: "Logistics",
    title: "Route optimization that cut fuel spend without new hires",
    heroSub:
      "Loop Logistics optimized real-time delivery routing to directly reduce operational fuel overheads.",
    hstat1Num: "18%",
    hstat1Label: "reduction in fuel cost",
    hstat2Num: "12%",
    hstat2Label: "faster delivery completion",
    hstat3Num: "8wks",
    hstat3Label: "kickoff to rollout",
    bannerText: "Loop Logistics — route optimizer",
    engagement: "Logistics Engine, 8 weeks",
    stack: "Next.js, Tailwind, Python Route API",
    client: "Loop Logistics",
    challengeSub:
      "Rising fuel prices and inefficient static routes impacted operational margins.",
    challengePoints: [
      "Static daily routing ignored real-time traffic.",
      "Inefficient stop sequencing increased fuel usage.",
      "High driver stress and delivery delays.",
    ],
    solutionSub:
      "Engineered dynamic routing algorithms tailored for urban delivery routes.",
    solutionPoints: [
      "Dynamic stop sequencing.",
      "Real-time traffic adaptation engine.",
      "Fleet fuel consumption analytics.",
    ],
    capabilities: [
      "Automated route generation.",
      "Live ETA updates for customers.",
      "Fuel cost tracking dashboard.",
    ],
    resultsSub:
      "Achieved an immediate 18% reduction in total fuel expenditures across the fleet.",
    fstat1Num: "18%",
    fstat1Label: "fuel expenditure saved",
    fstat2Num: "12%",
    fstat2Label: "faster turnaround time",
    fstat3Num: "0",
    fstat3Label: "extra hires needed",
  },
  "tandem-legal": {
    industry: "Legal",
    title: "Contract review copilot cuts first-pass review time for associates",
    heroSub:
      "Tandem Legal built an AI-driven contract assistant to streamline contract audits for legal associates.",
    hstat1Num: "65%",
    hstat1Label: "faster first-pass review",
    hstat2Num: "99%",
    hstat2Label: "flag accuracy rate",
    hstat3Num: "3wks",
    hstat3Label: "kickoff to launch",
    bannerText: "Tandem Legal — AI copilot interface",
    engagement: "AI Workflow Integration, 3 weeks",
    stack: "React, Next.js, OpenAI API",
    client: "Tandem Legal",
    challengeSub:
      "Law associates were drowning in repetitive first-pass document checks.",
    challengePoints: [
      "Time-consuming manual clause extraction.",
      "Inconsistent risk flagging across team members.",
      "Delayed client turnaround for contract drafts.",
    ],
    solutionSub:
      "Built a specialized contract analysis workspace with instant risk detection.",
    solutionPoints: [
      "Automated clause detection and risk tagging.",
      "Side-by-side comparative review workspace.",
      "Custom risk taxonomy enforcement.",
    ],
    capabilities: [
      "Instant contract risk analysis.",
      "Standardized clause suggestions.",
      "Audit log for internal review compliance.",
    ],
    resultsSub:
      "Review speed increased by 65% while keeping standard accuracy consistent.",
    fstat1Num: "65%",
    fstat1Label: "faster review time",
    fstat2Num: "99%",
    fstat2Label: "clause tagging accuracy",
    fstat3Num: "3wks",
    fstat3Label: "implementation timeline",
  },
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudiesData[slug];
  if (!item) return {};

  return {
    title: `${item.client} — Case Study | After Concept`,
    description: item.heroSub,
  };
}

export default async function DynamicCaseStudy({ params }: Props) {
  const { slug } = await params;
  const item = caseStudiesData[slug];

  if (!item) {
    notFound();
  }

  return (
    <main
      style={{
        backgroundColor: "#FAFAFA",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <Header />

      {/* Back Link */}
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "32px 20px 16px",
        }}
      >
        <Link
          href="/case-studies"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#6B7280",
            fontSize: "14px",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          ← Back to case studies
        </Link>
      </div>

      {/* Hero Section */}
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "16px 20px 56px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                backgroundColor: "#EEF2FF",
                color: "#4F46E5",
                padding: "4px 10px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              {item.industry}
            </span>
          </div>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {item.title}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#475569",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            {item.heroSub}
          </p>
        </div>

        {/* Highlight Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "24px 16px",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "#4F46E5",
                letterSpacing: "-0.02em",
              }}
            >
              {item.hstat1Num}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#64748B",
                marginTop: "6px",
                lineHeight: "1.3",
                fontWeight: 500,
              }}
            >
              {item.hstat1Label}
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "24px 16px",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "#0F172A",
                letterSpacing: "-0.02em",
              }}
            >
              {item.hstat2Num}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#64748B",
                marginTop: "6px",
                lineHeight: "1.3",
                fontWeight: 500,
              }}
            >
              {item.hstat2Label}
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "24px 16px",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "#0F172A",
                letterSpacing: "-0.02em",
              }}
            >
              {item.hstat3Num}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#64748B",
                marginTop: "6px",
                lineHeight: "1.3",
                fontWeight: 500,
              }}
            >
              {item.hstat3Label}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Banner */}
      <div
        style={{
          width: "100%",
          background: "linear-gradient(90deg, #0F172A 0%, #1E293B 100%)",
          color: "#FFFFFF",
          padding: "36px 20px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: 600,
          letterSpacing: "-0.01em",
        }}
      >
        {item.bannerText}
      </div>

      {/* Metadata Bar */}
      <div
        style={{
          borderBottom: "1px solid #E2E8F0",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "24px 20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#94A3B8",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              Industry
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#0F172A",
                marginTop: "4px",
              }}
            >
              {item.industry}
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#94A3B8",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              Built by
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#0F172A",
                marginTop: "4px",
              }}
            >
              After Concept
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#94A3B8",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              Engagement
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#0F172A",
                marginTop: "4px",
              }}
            >
              {item.engagement}
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#94A3B8",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              Stack
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#0F172A",
                marginTop: "4px",
              }}
            >
              {item.stack}
            </div>
          </div>
        </div>
      </div>

      {/* Case Content */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "64px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "56px",
        }}
      >
        {/* Challenge Section */}
        <article
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <span
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              color: "#4F46E5",
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            01 / Challenge
          </span>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Operational Gaps & Core Bottlenecks
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#334155",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            {item.challengeSub}
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              margin: "8px 0 0",
              color: "#475569",
              lineHeight: "1.9",
              fontSize: "16px",
            }}
          >
            {item.challengePoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          {item.quote && item.quoteAuthor && (
            <blockquote
              style={{
                margin: "24px 0 0",
                padding: "20px 24px",
                backgroundColor: "#FFFFFF",
                borderLeft: "4px solid #4F46E5",
                borderRadius: "0 12px 12px 0",
                fontStyle: "italic",
                color: "#1E293B",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              &ldquo;{item.quote}&rdquo; —{" "}
              <strong style={{ fontStyle: "normal", color: "#0F172A" }}>
                {item.quoteAuthor}
              </strong>
            </blockquote>
          )}
        </article>

        {/* Solution Section */}
        <article
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              color: "#4F46E5",
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            02 / Solution
          </span>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            System Architecture & Workflow Design
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#334155",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            {item.solutionSub}
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              margin: "8px 0 0",
              color: "#475569",
              lineHeight: "1.9",
              fontSize: "16px",
            }}
          >
            {item.solutionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </article>

        {/* Capabilities Section */}
        <article
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <span
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              color: "#4F46E5",
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            03 / Capabilities
          </span>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            What the system does.
          </h2>
          <ul
            style={{
              paddingLeft: "24px",
              margin: "8px 0 0",
              color: "#475569",
              lineHeight: "1.9",
              fontSize: "16px",
            }}
          >
            {item.capabilities.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </article>

        {/* Results Section */}
        <article
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              color: "#4F46E5",
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            04 / Results
          </span>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Measurable Outcomes & Production Value
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#334155",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            {item.resultsSub}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              margin: "16px 0",
            }}
          >
            <div
              style={{
                backgroundColor: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div
                style={{ fontSize: "28px", fontWeight: 800, color: "#0F172A" }}
              >
                {item.fstat1Num}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#64748B",
                  marginTop: "4px",
                  fontWeight: 500,
                }}
              >
                {item.fstat1Label}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div
                style={{ fontSize: "28px", fontWeight: 800, color: "#0F172A" }}
              >
                {item.fstat2Num}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#64748B",
                  marginTop: "4px",
                  fontWeight: 500,
                }}
              >
                {item.fstat2Label}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div
                style={{ fontSize: "28px", fontWeight: 800, color: "#0F172A" }}
              >
                {item.fstat3Num}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#64748B",
                  marginTop: "4px",
                  fontWeight: 500,
                }}
              >
                {item.fstat3Label}
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: "15px",
              color: "#64748B",
              margin: 0,
              lineHeight: "1.6",
            }}
          >
            This is what After Concept builds: not a dashboard bolted onto a
            broken process, but the underlying system rebuilt so the dashboard
            has something true to show.
          </p>
        </article>
      </div>

      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #0F172A 0%, #020617 100%)",
          color: "#FFFFFF",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Have a similar problem?
        </h2>
        <p
          style={{
            color: "#94A3B8",
            marginTop: "12px",
            fontSize: "18px",
            maxWidth: "600px",
            marginInline: "auto",
          }}
        >
          Tell us where your team is stuck reconciling things by hand.
          We&apos;ll show you what we&apos;d build.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            marginTop: "32px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/#contact"
            style={{
              backgroundColor: "#4F46E5",
              color: "#FFFFFF",
              padding: "14px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
              boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.3)",
            }}
          >
            Book a free scoping call
          </Link>
          <Link
            href="/case-studies"
            style={{
              border: "1px solid #334155",
              color: "#FFFFFF",
              padding: "14px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            See more case studies
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
