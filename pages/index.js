export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-2">🐾 Global Funded Traders</h1>
      <p className="mb-6 text-lg text-gray-300">Prop firm хөтөлбөр — Start. Pass. Get Funded.</p>

      <div className="flex flex-wrap justify-center gap-6">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/27/18/04/cat-1285634_1280.jpg"
          alt="Kitten"
          className="w-40 h-auto rounded-2xl shadow-lg"
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/02/19/10/00/dog-1209954_1280.jpg"
          alt="Puppy"
          className="w-40 h-auto rounded-2xl shadow-lg"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Бэлтгэгдсэн трейдерүүдийг хөрөнгөөр хангая!</h2>
      <button className="bg-cyan-400 text-black px-6 py-2 rounded-full hover:bg-cyan-300 transition">
        Take The Challenge
      </button>

      <section className="mt-10 text-center">
        <h3 className="text-xl font-semibold mb-2">📜 Сертификат & Санхүүжилт</h3>
        <p className="text-gray-400">Манай шалгуурыг давсан хүмүүст $100,000 хүртэл бодит данс санал болгодог.</p>
      </section>

      <footer className="mt-16 text-sm text-gray-500 text-center">
        📧 info@globalfundedtraders.com | Telegram: @GFTSupport<br />
        &copy; 2025 Global Funded Traders
      </footer>
    </main>
  );
}

