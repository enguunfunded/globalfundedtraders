import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Global Funded Traders</title>
        <meta name="description" content="Prop Firm - Trade with capital and become a funded trader." />
      </Head>

      <main className="bg-[#0b0f1a] text-white min-h-screen font-sans">
        {/* Hero Section */}
        <section className="text-center py-24 px-4 bg-gradient-to-b from-[#0b0f1a] to-[#111827]">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get Funded. Keep up to 90% Profit.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pass our challenge. Prove your skills. Trade our capital.
          </p>
          <div className="mt-10">
            <Link href="/challenge">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-md">
                Start Challenge
              </button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[#111827] px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard title="2 Phase Challenge" description="Realistic objectives. No time pressure. Trade smart, not fast." />
            <FeatureCard title="Up to $200,000 Funding" description="Choose your plan. Scale up to $2M with consistency." />
            <FeatureCard title="Fast Payouts" description="Get paid bi-weekly. Withdraw your profits via crypto or bank." />
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#0b0f1a] py-20 text-center px-4">
          <h2 className="text-4xl font-bold mb-10">What Traders Say</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Testimonial
              name="Michael T."
              text="The best prop firm I've used. Fast payouts and great support!"
            />
            <Testimonial
              name="Ariuna B."
              text="Passed the challenge in 2 weeks and got funded. Love the dashboard!"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-indigo-600 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Funded?
          </h2>
          <Link href="/get-started">
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl">
              Get Started Now
            </button>
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-[#0b0f1a] py-10 text-center text-gray-500 text-sm">
          &copy; 2025 Global Funded Traders. All rights reserved.
        </footer>
      </main>
    </>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#1f2937] p-6 rounded-2xl shadow-lg hover:shadow-indigo-500 transition">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <div className="bg-[#1f2937] p-6 rounded-xl shadow-lg">
      <p className="italic text-gray-300 mb-3">"{text}"</p>
      <p className="text-gray-400 font-semibold">– {name}</p>
    </div>
  );
}
