// pages/index.tsx — Global Funded Traders landing + auth-ready starter

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="text-center py-10 border-b border-gray-800">
        <h1 className="text-4xl font-bold">🐾 Global Funded Traders</h1>
        <p className="text-gray-400 mt-2">Start. Pass. Get Funded.</p>
        <nav className="mt-4 space-x-4">
          <Link href="/dashboard" className="text-cyan-400">User Dashboard</Link>
          <Link href="/admin" className="text-cyan-400">Admin</Link>
          <Link href="/pricing" className="text-cyan-400">Plans</Link>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl">
          Амжилттай трейдерүүдэд <span className="text-cyan-400">$100K</span> хүртэл санхүүжилт
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl">
          Манай шалгуурыг давснаар та бодит арилжааны данс хүлээн авах боломжтой. Бид таны арын санхүү.
        </p>
        <Link href="/signup" className="bg-cyan-400 text-black px-8 py-3 rounded-full text-lg font-semibold">
          Start Challenge
        </Link>
      </section>

      <footer className="text-sm text-gray-600 text-center py-6 border-t border-gray-800">
        &copy; 2025 Global Funded Traders | info@globalfundedtraders.com
      </footer>
    </main>
  );
}
