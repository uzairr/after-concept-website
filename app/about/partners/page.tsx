"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#060f1c] pt-40 px-8 lg:px-[50px] text-white flex flex-col items-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Partners</h1>
        <p className="text-lg text-gray-400 text-center max-w-2xl">
          This is a placeholder page for Partners. Content will be added here soon.
        </p>
      </main>
      <Footer />
    </>
  );
}
