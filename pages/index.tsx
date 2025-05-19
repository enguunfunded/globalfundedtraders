// pages/index.tsx — Pro-level Global Funded Traders UI (GlobalForexCapital.com inspired)

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans">
      <header className="text-center py-10 border-b border-gray-800">
        <h1 className="text-4xl font-extrabold tracking-tight">Global Funded Traders</h1>
        <p className="text-zinc-400 mt-2 text-lg">Start. Pass. Get Funded. Scale.</p>
        <nav className="mt-6 flex justify-center gap-4">
          <Link href="/challenges"><Button variant="ghost">Start Challenge</Button></Link>
          <Link href="/funding"><Button variant="ghost">Get Funded</Button></Link>
          <Link href="/faq"><Button variant="ghost">FAQ</Button></Link>
          <Link href="/dashboard"><Button variant="ghost">Login</Button></Link>
        </nav>
      </header>

      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            2 шатат шалгуураар <span className="text-cyan-400">$100,000</span> хүртэл санхүүжилтэд хүр
          </h2>
          <p className="text-zinc-400">
            FTMO загвартай төстэй, манай проп фирм трейдерүүдийг мэргэжлийн өсөлт рүү хөтөлдөг. Real account, real growth.
          </p>
          <Link href="/signup">
            <Button className="text-lg px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600">Take The Challenge</Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["chart-1953616_1280.jpg", "bitcoin-4476563_1280.jpg", "cat-1285634_1280.jpg", "dog-1209954_1280.jpg"].map((img, i) => (
            <Card key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={`https://cdn.pixabay.com/photo/${img}`}
                  alt={`preview ${i}`}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-xl"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-zinc-900 border-t border-gray-800 py-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Why Choose GFT?</h3>
        <div className="flex flex-wrap justify-center gap-6 text-zinc-400">
          <div>✔ 1:100 leverage</div>
          <div>✔ Low spreads</div>
          <div>✔ Fast payouts</div>
          <div>✔ Transparent rules</div>
        </div>
      </section>

      <footer className="text-sm text-zinc-500 text-center py-6 border-t border-gray-800">
        &copy; 2025 Global Funded Traders — Built for Traders, by Traders
      </footer>
    </main>
  );
}
