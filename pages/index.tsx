export default function Home() {
  return (
    <main style={{
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#121212',
      color: '#f0f0f0',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <header style={{ paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem' }}>🐾 Global Funded Traders</h1>
        <p style={{ color: '#aaa' }}>Prop firm хөтөлбөр — Start. Pass. Get Funded.</p>
        <nav style={{ marginTop: '1rem' }}>
          <a href="#" style={{ margin: '0 1rem', color: '#00d9ff', textDecoration: 'none' }}>Start Challenge</a>
          <a href="#" style={{ margin: '0 1rem', color: '#00d9ff', textDecoration: 'none' }}>Get Funded</a>
          <a href="#" style={{ margin: '0 1rem', color: '#00d9ff', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      <section style={{ marginTop: '3rem' }}>
        <img
          src="https://cdn.pixabay.com/photo/2016/03/27/18/04/cat-1285634_1280.jpg"
          alt="Kitten"
          width={180}
          style={{ borderRadius: '1rem', margin: '1rem' }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/02/19/10/00/dog-1209954_1280.jpg"
          alt="Puppy"
          width={180}
          style={{ borderRadius: '1rem', margin: '1rem' }}
        />
        <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem' }}>Бэлтгэгдсэн трейдерүүдийг хөрөнгөөр хангая!</h2>
        <button style={{
          backgroundColor: '#00d9ff',
          color: '#000',
          padding: '0.8rem 1.5rem',
          border: 'none',
          borderRadius: '2rem',
          fontSize: '1rem',
          cursor: 'pointer',
        }}>
          Take The Challenge
        </button>
      </section>

      <section style={{ marginTop: '3rem', backgroundColor: '#222', padding: '2rem', borderRadius: '1rem' }}>
        <h3>📜 Сертификат & Санхүүжилт</h3>
        <p>Манай шалгуурыг давсан хүмүүст $100,000 хүртэл бодит данс санал болгодог.</p>
      </section>

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
        📧 Email: info@globalfundedtraders.com | Telegram: @GFTSupport<br />
        &copy; 2025 Global Funded Traders
      </footer>
    </main>
  );
}
