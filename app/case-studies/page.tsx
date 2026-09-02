"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Data matching dynamic slugs in [slug]/page.tsx
const cases = [
  {
    slug: "swiftcart",
    href: "/case-studies/swiftcart",
    thumb: "SwiftCart",
    industry: "RETAIL & JEWELRY",
    title: "SwiftCart E-Commerce",
    desc: "A scalable e-commerce store with seamless checkout, real-time inventory updates, and multi-currency support.",
    readLabel: "Read the case study →",
  },
  {
    slug: "northbridge-clinic",
    href: "/case-studies/northbridge-clinic",
    thumb: "Northbridge",
    industry: "HEALTHCARE & LIFE SCIENCES",
    title: "Northbridge Clinic",
    desc: "A modern patient portal enabling online appointment booking, medical records access, and telehealth consultations.",
    readLabel: "View Project →",
  },
  {
    slug: "ledgerly",
    href: "/case-studies/ledgerly",
    thumb: "Ledgerly",
    industry: "SAAS & SOFTWARE",
    title: "Ledgerly Finance SaaS",
    desc: "An intuitive bookkeeping dashboard with automated invoicing, expense categorization, and financial reporting.",
    readLabel: "View Project →",
  },
  {
    slug: "fieldwise",
    href: "/case-studies/fieldwise",
    thumb: "Fieldwise",
    industry: "CONSTRUCTION & REAL ESTATE",
    title: "Fieldwise Construction Platform",
    desc: "A mobile-first field management tool for real-time site logging, worker dispatch, and safety compliance tracking.",
    readLabel: "View Project →",
  },
  {
    slug: "loop-logistics",
    href: "/case-studies/loop-logistics",
    thumb: "Loop Logistics",
    industry: "LOGISTICS & SUPPLY CHAIN",
    title: "Loop Logistics Tracker",
    desc: "An end-to-end supply chain visibility dashboard with shipment tracking, route optimization, and delay alerts.",
    readLabel: "View Project →",
  },
  {
    slug: "tandem-legal",
    href: "/case-studies/tandem-legal",
    thumb: "Tandem Legal",
    industry: "LEGAL",
    title: "Tandem Legal Portal",
    desc: "A secure client portal for document sharing, e-signatures, case status updates, and encrypted messaging.",
    readLabel: "View Project →",
  },
];

const filterCategories = [
  "ALL",
  "HEALTHCARE & LIFE SCIENCES",
  "RETAIL & JEWELRY",
  "SAAS & SOFTWARE",
  "CONSTRUCTION & REAL ESTATE",
  "LOGISTICS & SUPPLY CHAIN",
  "LEGAL",
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Filtering Logic
  const filteredCases =
    activeFilter === "ALL"
      ? cases
      : cases.filter((c) => c.industry === activeFilter);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#111111",
        minHeight: "100vh",
      }}
    >
      <Header />

      {/* Hero Header Section */}
      <section
        style={{
          backgroundColor: "#111111",
          color: "#ffffff",
          padding: "100px 24px 60px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span
            style={{
              color: "#e53935",
              fontWeight: "bold",
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            CASE STUDIES
          </span>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "800",
              marginTop: "8px",
              color: "#ffffff",
            }}
          >
            Results That Speak
          </h1>
        </div>
      </section>

      {/* Filter Pills Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            borderBottom: "1px solid #eee",
            paddingBottom: "24px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: activeFilter === cat ? "#e53935" : "#f4f4f5",
                  color: activeFilter === cat ? "#ffffff" : "#52525b",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <span
            style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600" }}
          >
            {filteredCases.length} CASE STUDIES
          </span>
        </div>
      </section>

      {/* Custom Cards Grid */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {filteredCases.map((c) => (
            <Link
              key={c.slug}
              href={c.href}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                border: "1px solid #e4e4e7",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
              }}
            >
              {/* Light Gradient Top Box */}
              <div
                style={{
                  height: "160px",
                  background:
                    "linear-gradient(180deg, #f5f0f7 0%, #fcfaff 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid #f4f4f5",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#6b5894",
                  }}
                >
                  {c.thumb}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div
                style={{
                  padding: "28px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "800",
                      color: "#e55b38",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    {c.industry}
                  </span>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "#18181b",
                      margin: "0 0 12px 0",
                      lineHeight: "1.3",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#52525b",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {c.desc}
                  </p>
                </div>

                <div style={{ marginTop: "24px" }}>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#3b3c98",
                    }}
                  >
                    {c.readLabel}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
