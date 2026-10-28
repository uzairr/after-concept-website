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
  landdesign: {
    industry: "Real Estate Tech · Data Intelligence",
    title: "Automated contract data collection across six US jurisdictions",
    heroSub:
      "We automated contract data collection across six US jurisdictions, transforming awarded contract information into structured Excel sheets and a web dashboard for real estate business intelligence.",
    hstat1Num: "6",
    hstat1Label: "US jurisdictions automated",
    hstat2Num: "100%",
    hstat2Label: "structured data accuracy",
    hstat3Num: "Real-Time",
    hstat3Label: "business intelligence dashboard",
    bannerText: "LandDesign — Contract Intelligence & Web Dashboard",
    engagement: "Automated Data Pipeline & Web Dashboard",
    stack: "Next.js, Python, PostgreSQL, Automated Ingestion, Excel Reporting",
    client: "LandDesign",
    quote:
      "Turning fragmented municipal contract awards into clean, structured intelligence transformed how we identify opportunities across every jurisdiction.",
    quoteAuthor: "Director of Business Development, LandDesign",
    challengeSub:
      "Awarded contract records across multiple municipal jurisdictions were published inconsistently in varied formats, requiring hundreds of manual hours to find, parse, and verify.",
    challengePoints: [
      "Scattered procurement portals across six distinct US jurisdictions with disparate data structures.",
      "Manual data extraction resulting in delays, human entry errors, and missed bid intelligence.",
      "Lack of centralized historical records for competitive real estate analysis.",
      "Need for both immediate Excel report export for analysts and a real-time web dashboard for executives.",
    ],
    solutionSub:
      "After Concept engineered an automated data collection and validation pipeline paired with custom spreadsheet generation and an interactive BI dashboard.",
    solutionPoints: [
      "Resilient multi-jurisdiction data collection agents handling dynamic government portal layouts.",
      "Automated data normalizer and deduplication engine ensuring 100% schema consistency.",
      "Direct-to-Excel export pipeline formatted with real estate intelligence metrics.",
      "Executive web dashboard with filtering, search, and trend visualization.",
    ],
    capabilities: [
      "Multi-jurisdiction automated contract ingestion.",
      "Instant formatted Excel report distribution.",
      "Real-time analytics and award trend dashboards.",
      "Automated jurisdiction change alerts and status tracking.",
    ],
    resultsSub:
      "LandDesign eliminated manual contract extraction entirely, unlocking instant cross-jurisdiction market visibility and actionable real estate intelligence.",
    fstat1Num: "6",
    fstat1Label: "jurisdictions continuously synced",
    fstat2Num: "100%",
    fstat2Label: "automated data pipeline",
    fstat3Num: "Zero",
    fstat3Label: "manual extraction overhead",
  },
  "land-design": {
    industry: "Real Estate Tech · Data Intelligence",
    title: "Automated contract data collection across six US jurisdictions",
    heroSub:
      "We automated contract data collection across six US jurisdictions, transforming awarded contract information into structured Excel sheets and a web dashboard for real estate business intelligence.",
    hstat1Num: "6",
    hstat1Label: "US jurisdictions automated",
    hstat2Num: "100%",
    hstat2Label: "structured data accuracy",
    hstat3Num: "Real-Time",
    hstat3Label: "business intelligence dashboard",
    bannerText: "LandDesign — Contract Intelligence & Web Dashboard",
    engagement: "Automated Data Pipeline & Web Dashboard",
    stack: "Next.js, Python, PostgreSQL, Automated Ingestion, Excel Reporting",
    client: "LandDesign",
    quote:
      "Turning fragmented municipal contract awards into clean, structured intelligence transformed how we identify opportunities across every jurisdiction.",
    quoteAuthor: "Director of Business Development, LandDesign",
    challengeSub:
      "Awarded contract records across multiple municipal jurisdictions were published inconsistently in varied formats, requiring hundreds of manual hours to find, parse, and verify.",
    challengePoints: [
      "Scattered procurement portals across six distinct US jurisdictions with disparate data structures.",
      "Manual data extraction resulting in delays, human entry errors, and missed bid intelligence.",
      "Lack of centralized historical records for competitive real estate analysis.",
      "Need for both immediate Excel report export for analysts and a real-time web dashboard for executives.",
    ],
    solutionSub:
      "After Concept engineered an automated data collection and validation pipeline paired with custom spreadsheet generation and an interactive BI dashboard.",
    solutionPoints: [
      "Resilient multi-jurisdiction data collection agents handling dynamic government portal layouts.",
      "Automated data normalizer and deduplication engine ensuring 100% schema consistency.",
      "Direct-to-Excel export pipeline formatted with real estate intelligence metrics.",
      "Executive web dashboard with filtering, search, and trend visualization.",
    ],
    capabilities: [
      "Multi-jurisdiction automated contract ingestion.",
      "Instant formatted Excel report distribution.",
      "Real-time analytics and award trend dashboards.",
      "Automated jurisdiction change alerts and status tracking.",
    ],
    resultsSub:
      "LandDesign eliminated manual contract extraction entirely, unlocking instant cross-jurisdiction market visibility and actionable real estate intelligence.",
    fstat1Num: "6",
    fstat1Label: "jurisdictions continuously synced",
    fstat2Num: "100%",
    fstat2Label: "automated data pipeline",
    fstat3Num: "Zero",
    fstat3Label: "manual extraction overhead",
  },
  alfred: {
    industry: "Consumer Tech · FinTech",
    title: "Unifying four regulated industries into a single membership platform",
    heroSub:
      "We built the Alfred app and backend from the ground up, from broadband and mobile to energy and insurance, unified under one checkout, one credit check, and one support experience.",
    hstat1Num: "31",
    hstat1Label: "product combinations in unified checkout",
    hstat2Num: "10+",
    hstat2Label: "regulated vendors behind one seamless UX",
    hstat3Num: "<60s",
    hstat3Label: "time to isolate production issues",
    bannerText: "Alfred — Multi-Vertical Household Utilities Platform",
    engagement: "Full-Lifecycle Architecture & Engineering",
    stack: "React Native, FastAPI (Python), PostgreSQL, AWS, GoCardless, Equifax",
    client: "Alfred",
    quote:
      "What used to require four disconnected systems and fragmented vendor logins now runs seamlessly as one unified experience for our members.",
    quoteAuthor: "Head of Product & Delivery, Alfred",
    challengeSub:
      "Alfred set out to reinvent household utilities across broadband, mobile, energy, and insurance. The market is defined by murky pricing and fragmented vendor siloes. Alfred required a unified platform operating across 4 distinct regulatory frameworks without compromising user simplicity.",
    challengePoints: [
      "Operating across 4 regulated verticals (Energy, Telecom, Mobile eSIM, Insurance) each with legacy APIs and strict compliance rules.",
      "Basket checkout supporting 31 valid combinations with cross-cutting KYC and credit thresholds.",
      "Complex third-party vendor orchestration (Seaglass, Fibre Cafe, TOTSco, VMO2) hidden completely from the member.",
      "Fragmented data silos risking broken customer support and reconciliation nightmares.",
    ],
    solutionSub:
      "After Concept engineered an end-to-end mobile and cloud ecosystem with a centralized state control plane and unified checkout engine.",
    solutionPoints: [
      "Cross-platform member app in React Native paired with a high-concurrency FastAPI Python microservices engine.",
      "Single-page multi-product checkout with automated background credit verification via Equifax and Direct Debit integration via GoCardless.",
      "Canonical data layer unifying customer lifecycle, billing, and event-driven notifications across all service providers.",
      "AI-first automated member support (Alfred Care) integrated directly into the app for instant issue triage.",
    ],
    capabilities: [
      "Dynamic multi-service checkout with real-time deposit calculations.",
      "Zero-touch eSIM and fibre broadband provisioning.",
      "Automated regulatory compliance audit trails and consent tracking.",
      "Centralized billing engine with automated exception reconciliation.",
    ],
    resultsSub:
      "Alfred launched on schedule with 100% regulatory compliance, sub-minute observability, and zero checkout friction across 31 product combinations.",
    fstat1Num: "31",
    fstat1Label: "valid product combinations checked out seamlessly",
    fstat2Num: "10+",
    fstat2Label: "vendor integrations unified behind one app",
    fstat3Num: "0",
    fstat3Label: "checkout drop-offs from complex KYC rules",
  },
  "internal-angular-project": {
    industry: "Software Development · Web Applications",
    title: "Dedicated Angular Development Support for Scalable Web Applications",
    heroSub:
      "This case study documents a dedicated Angular Development engagement carried out for a single project. The primary objective was to provide focused technical support that ensured the project's requirements were met without compromise.",
    hstat1Num: "1",
    hstat1Label: "Single Engagement Focus",
    hstat2Num: "100%",
    hstat2Label: "Requirement Alignment",
    hstat3Num: "Angular",
    hstat3Label: "Best Practices Followed",
    bannerText: "Internal Angular Project — Scalable Web Applications",
    engagement: "Dedicated Angular Development Support · Single Engagement Focus",
    stack: "Angular Framework, TypeScript, HTML/CSS, Project Analytics Tools",
    client: "Internal Angular Project",
    quote:
      "The dedicated single-project focus eliminated context switching and allowed us to build with true architectural precision.",
    quoteAuthor: "Lead Architect, Internal Angular Project",
    challengeSub:
      "Every project comes with its unique set of hurdles. For this Angular engagement, the challenges included:",
    challengePoints: [
      "Single Engagement Focus: Ensuring that all resources and attention were dedicated to one project, without splitting efforts across multiple tasks.",
      "Requirement Alignment: Meeting specific project requirements within Angular's ecosystem while maintaining flexibility for future scalability.",
      "Consistency & Maintainability: Building a solution that was not only functional but also easy to maintain and extend.",
      "Dedicated Support Model: Providing continuous support throughout the lifecycle of the project, from planning to delivery.",
    ],
    solutionSub:
      "To overcome these challenges, a structured modular approach was adopted:",
    solutionPoints: [
      "Requirement Analysis: Conducted a detailed review of the project's objectives and technical needs.",
      "Dedicated Support Model: Assigned a developer solely focused on this engagement.",
      "Angular Best Practices: Implemented modular architecture, TypeScript type safety, and structured analytics.",
      "Continuous Collaboration: Maintained open communication channels with stakeholders for seamless alignment.",
    ],
    capabilities: [
      "Modular Architecture with scalable Angular feature modules.",
      "Strict TypeScript type safety and compile-time verification.",
      "Responsive UI built with clean semantic HTML and modern CSS.",
      "Comprehensive analytics and progress reporting.",
    ],
    resultsSub:
      "The project delivered an Angular application completed with full alignment to requirements, improved development speed, and smooth future scalability.",
    fstat1Num: "1",
    fstat1Label: "single engagement focus",
    fstat2Num: "100%",
    fstat2Label: "requirement alignment achieved",
    fstat3Num: "Zero",
    fstat3Label: "compromise on technical standards",
  },
  "healthcare-saas-project": {
    industry: "Healthcare Technology · SaaS Platforms",
    title:
      "Healthcare SaaS Platform with AI Consulting & Full-Stack Engineering",
    heroSub:
      "Dedicated technical support combining AI consulting with React + Node.js full-stack engineering to build a secure, compliant, and highly scalable healthcare SaaS solution.",
    hstat1Num: "100%",
    hstat1Label: "HIPAA compliance alignment",
    hstat2Num: "3.5×",
    hstat2Label: "faster clinical data queries",
    hstat3Num: "99.9%",
    hstat3Label: "high availability SLA",
    bannerText: "Healthcare SaaS Project — AI & Full-Stack Engineering",
    engagement: "AI Consulting & Full-Stack Engineering",
    stack: "React, Node.js, TypeScript, AI Models, HIPAA Cloud",
    client: "Healthcare SaaS Project",
    quote:
      "Integrating AI assistance into our clinical workflows while modernizing our React and Node.js infrastructure gave our providers instantaneous data access and peace of mind.",
    quoteAuthor: "Lead Technical Architect, Healthcare SaaS Project",
    challengeSub:
      "Healthcare applications require strict data compliance, zero-latency clinical intelligence, and rock-solid system stability under peak practitioner workloads.",
    challengePoints: [
      "Rigorous HIPAA and data security compliance for sensitive patient health records.",
      "Legacy performance bottlenecks slowing down real-time clinical dashboards.",
      "Complex integration of generative AI models into existing healthcare practitioner workflows.",
      "Need for seamless scalability across hospitals, outpatient clinics, and private practices.",
      "High availability and fault tolerance ensuring uninterrupted patient care systems.",
    ],
    solutionSub:
      "After Concept provided dedicated full-stack engineering and AI consulting to build an intelligent, high-performance healthcare platform.",
    solutionPoints: [
      "Modern React architecture for responsive, intuitive clinical dashboards and telemetry.",
      "High-throughput Node.js backend microservices with robust schema validation.",
      "Fine-tuned AI consulting models for secure, automated clinical document summarization.",
      "End-to-end audit logging, tokenized access controls, and HIPAA-compliant data pipelines.",
    ],
    capabilities: [
      "Secure clinical data workflows.",
      "AI-driven diagnostic and reporting assistance.",
      "Real-time practitioner telemetry.",
      "Scalable multi-tenant healthcare cloud.",
    ],
    resultsSub:
      "The modernized healthcare SaaS platform achieved seamless HIPAA compliance, reduced query latency by over 70%, and accelerated practitioner adoption.",
    fstat1Num: "100%",
    fstat1Label: "regulatory compliance achieved",
    fstat2Num: "70%",
    fstat2Label: "reduction in query latency",
    fstat3Num: "Zero",
    fstat3Label: "unplanned clinical downtime",
  },
  "angular-project-new-features": {
    industry: "Angular Project — New Features",
    title: "Dedicated New Features support for the Angular Project",
    heroSub:
      "A New Features engagement providing dedicated support for a single project, focused on delivering new features and maintaining clean, reusable code.",
    hstat1Num: "01",
    hstat1Label: "Single Engagement Focus",
    hstat2Num: "100%",
    hstat2Label: "Codebase Alignment",
    hstat3Num: "Angular",
    hstat3Label: "New Features Delivered",
    bannerText: "Angular Project — New Features",
    engagement: "Dedicated New Features Support · Single Engagement Focus",
    stack: "Angular Framework, TypeScript, Clean Code, Reusable Components",
    client: "Angular Project",
    quote:
      "The dedicated New Features support delivered maintainable, well-structured code with prompt communication throughout the engagement.",
    quoteAuthor: "Lead Architect, Angular Project",
    challengeSub:
      "The objective was to provide dedicated New Features support for the engagement, with a focus on implementing requested features in line with the existing Angular codebase.",
    challengePoints: [
      "Dedicated support for the engagement.",
      "Focused implementation of new features.",
      "Alignment with the existing Angular codebase.",
      "Single-engagement project focus.",
    ],
    solutionSub:
      "A structured 4-step process was adopted to implement new features with clean, maintainable, and reusable code:",
    solutionPoints: [
      "01 — Understand: Reviewed the existing Angular codebase and the requested features to ensure new code would fit naturally into the existing project structure.",
      "02 — Plan: Identified the project requirements and determined an appropriate implementation approach consistent with the existing architecture.",
      "03 — Build: Implemented new features following the project's structure, with clean, maintainable, and reusable code.",
      "04 — Support: Provided dedicated support for the engagement, with a focus on the project's new features and requirements.",
    ],
    capabilities: [
      "01 — Clean: Maintainable, well-structured code.",
      "02 — Clear: Regular updates and prompt communication.",
      "03 — Role: Angular Project.",
      "04 — Focus: New Features.",
    ],
    resultsSub:
      "Dedicated New Features support for the project, with a focus on its requirements and implementation.",
    fstat1Num: "100%",
    fstat1Label: "requirements met",
    fstat2Num: "Clean",
    fstat2Label: "reusable code",
    fstat3Num: "Prompt",
    fstat3Label: "communication",
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
  "connecting-apps-third-party-services-rest": {
    industry: "Third-Party Services",
    title: "Connecting Apps to Third-Party Services via REST",
    heroSub:
      "A Third-Party Services engagement providing dedicated support for connecting existing applications to external services through RESTful APIs, troubleshooting integration issues, and improving system communication.",
    hstat1Num: "REST",
    hstat1Label: "API Integration",
    hstat2Num: "100%",
    hstat2Label: "Reliable Connectivity",
    hstat3Num: "Direct",
    hstat3Label: "Systems Integration",
    bannerText: "Connecting Apps to Third-Party Services via REST",
    engagement: "Dedicated Third-Party Services Support · Single Engagement Focus",
    stack: "RESTful APIs, API Integration, Systems Integration, Process Optimization",
    client: "Connecting Apps",
    quote:
      "Reliable API integration and responsive troubleshooting ensured our application connected smoothly with all required external services.",
    quoteAuthor: "Lead Systems Architect",
    challengeSub:
      "Every new connection between systems introduces complexity, including differing data formats, authentication requirements, error handling, and performance considerations. The client needed integrations that exchanged data seamlessly, alongside support for diagnosing issues and improving existing integration processes.",
    challengePoints: [
      "Connecting existing applications to third-party services through REST APIs.",
      "Differing data formats and authentication requirements across external endpoints.",
      "Diagnosing integration errors and optimizing data exchange performance.",
      "Working with the development team to diagnose and resolve integration issues.",
    ],
    solutionSub:
      "Provide dedicated Third-Party Services support for the engagement, with an emphasis on reliable API integration and improving communication between connected systems.",
    solutionPoints: [
      "1. RESTful Integration: Connecting existing applications to third-party services through REST APIs.",
      "2. Troubleshooting: Working with the development team to diagnose and resolve integration issues.",
      "3. Reliable Connections: Ensuring stable, secure communication between existing applications and external services.",
      "4. Process Optimization: Supporting process improvements and robust error-handling workflows.",
    ],
    capabilities: [
      "01 — Role: API Integration",
      "02 — Focus: Third-Party Services",
      "03 — Objective: Dedicated support for the project",
      "04 — Scope: Third-Party Services",
    ],
    resultsSub:
      "A Third-Party Services engagement focused on API integration and its project objectives, delivering seamless communication and responsive integration support.",
    fstat1Num: "REST",
    fstat1Label: "APIs connected",
    fstat2Num: "100%",
    fstat2Label: "reliable communication",
    fstat3Num: "Direct",
    fstat3Label: "troubleshooting support",
  },
  "data-download-transformation-stacking-bigquery": {
    industry: "Data Engineering",
    title: "Data Download Transformation Stacking for BigQuery Upload",
    heroSub:
      "A Data Engineering engagement providing dedicated support for downloading source data, transforming individual files into a consistent structure, and stacking datasets into a unified table prepared for BigQuery upload.",
    hstat1Num: "Pipeline",
    hstat1Label: "Data Engineering",
    hstat2Num: "100%",
    hstat2Label: "Schema Consistency",
    hstat3Num: "BigQuery",
    hstat3Label: "Unified Dataset",
    bannerText: "Data Download Transformation Stacking for BigQuery Upload",
    engagement: "Dedicated Data Engineering Support · Single Engagement Focus",
    stack: "BigQuery Pipeline, Data Transformation, Dataset Stacking, Schema Consistency",
    client: "BigQuery Data Pipeline",
    quote:
      "Consistent data structures prevented upload errors and created a solid foundation for querying across all transformed files.",
    quoteAuthor: "Data Engineering Lead",
    challengeSub:
      "Consistent data structures help prevent upload errors and reduce unnecessary rework. Stacking transformed datasets into one unified table creates a consistent foundation for querying, while clear communication keeps the client informed throughout the engagement.",
    challengePoints: [
      "Downloading source data reliably from client-defined endpoints.",
      "Cleaning and reshaping heterogeneous files into a unified schema.",
      "Stacking transformed datasets into a single consolidated table.",
      "Preparing clean, validated data ready for direct BigQuery ingestion.",
    ],
    solutionSub:
      "Provide dedicated Data Engineering support for a single engagement, focusing on data downloading, transformation, dataset stacking, and preparation for BigQuery upload.",
    solutionPoints: [
      "01 — Download: Collect source data reliably from the client-defined sources.",
      "02 — Transform: Clean and reshape each file into a consistent structure.",
      "03 — Stack: Combine the transformed datasets into one unified dataset.",
      "04 — Dedicated Support: Provide dedicated Data Engineering support throughout the engagement.",
    ],
    capabilities: [
      "01 — Role: BigQuery Data Pipeline",
      "02 — Focus: Data Engineering",
      "03 — Objective: Dedicated support for the project",
      "04 — Scope: Data Engineering",
    ],
    resultsSub:
      "A Data Engineering engagement focused on building a consistent, BigQuery-ready dataset through a structured data preparation process.",
    fstat1Num: "100%",
    fstat1Label: "schema alignment",
    fstat2Num: "Single",
    fstat2Label: "stacked dataset",
    fstat3Num: "BigQuery",
    fstat3Label: "ready for upload",
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
