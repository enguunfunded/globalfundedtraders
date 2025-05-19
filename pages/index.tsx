// pages/index.tsx — Global Funded Traders landing with upgraded UI

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white font-sans">
      <header className="text-center py-10 border-b border-gray-800">
        <h1 className="text-4xl font-extrabold tracking-tight">🐾 Global Funded Traders</h1>
        <p className="text-gray-400 mt-2 text-lg">Start. Pass. Get Funded.</p>
        <nav className="mt-4 space-x-6">
          <Link href="/dashboard" className="hover:underline text-cyan-400">User Dashboard</Link>
          <Link href="/admin" className="hover:underline text-cyan-400">Admin</Link>
          <Link href="/pricing" className="hover:underline text-cyan-400">Plans</Link>
        </nav>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-24 px-6 text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Амжилттай трейдерүүдэд <span className="text-cyan-400">$100K</span> хүртэл санхүүжилт
          </h2>
          <p className="text-gray-300 mb-8">
            Манай шалгуурыг амжилттай давсан хүмүүст бодит арилжааны данс санал болгодог. Бид таны арын санхүү.
          </p>
          <Link href="/signup" className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-cyan-300 transition">
            Start Challenge
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <Image
            src="https://cdn.pixabay.com/photo/2016/03/27/18/04/cat-1285634_1280.jpg"
            alt="Kitten"
            width={200}
            height={200}
            className="rounded-2xl shadow-md"
          />
          <Image
            src="https://cdn.pixabay.com/photo/2016/02/19/10/00/dog-1209954_1280.jpg"
            alt="Puppy"
            width={200}
            height={200}
            className="rounded-2xl shadow-md"
          />
          <Image
            src="https://cdn.pixabay.com/photo/2017/01/06/19/15/chart-1953616_1280.jpg"
            alt="Trading Chart"
            width={200}
            height={200}
            className="rounded-2xl shadow-md"
          />
          <Image
            src="https://cdn.pixabay.com/photo/2019/09/14/10/38/bitcoin-4476563_1280.jpg"
            alt="Crypto"
            width={200}
            height={200}
            className="rounded-2xl shadow-md"
          />
        </div>
      </section>

      <footer className="text-sm text-gray-600 text-center py-6 border-t border-gray-800">
        &copy; 2025 Global Funded Traders | info@globalfundedtraders.com
      </footer>
    </main>
  );
}
