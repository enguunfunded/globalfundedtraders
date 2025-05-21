// pages/index.tsx эсвэл app/page.tsx
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-gray-900 relative">
      {/* Background chart image */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1400&q=80"
          alt="background chart"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
      </div>

      {/* NAVBAR */}
      <header className="w-full px-6 py-4 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-white tracking-widest">GLOBAL FUNDED TRADERS</span>
        </div>
        <nav className="flex gap-8 text-gray-300 font-medium">
          <a href="#challenge" className="hover:text-white transition">Challenge</a>
          <a href="#funded" className="hover:text-white transition">Funded</a>
          <a href="#dashboard" className="hover:text-white transition">Dashboard</a>
          <a href="#conditions" className="hover:text-white transition">Conditions</a>
          <a href="#withdrawal" className="hover:text-white transition">Withdrawals</a>
        </nav>
        <div>
          <a href="#get-started" className="px-6 py-2 bg-indigo-600 rounded-2xl text-white font-bold shadow hover:bg-indigo-500 transition">Get Challenge</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto py-24 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Trade Our Capital.<br />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Keep up to 90% Profits.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Access institutional-grade capital. Pass our challenge, become a funded trader, and withdraw your profits.  
        </p>
        <a href="#get-started" className="px-8 py-4 rounded-2xl bg-indigo-700 text-white font-bold text-xl shadow-lg hover:bg-indigo-600 transition">
          Get Started
        </a>
        <div className="mt-12 flex flex-wrap gap-8 justify-center">
          <FeatureCard
            title="Fast Payouts"
            description="Withdraw your profits within 24 hours."
          />
          <FeatureCard
            title="Simple Rules"
            description="No hidden restrictions. Transparent, fair conditions."
          />
          <FeatureCard
            title="Global Traders"
            description="Traders from 100+ countries. MT5 & MT4 support."
          />
        </div>
      </section>

      {/* CHALLENGE SECTION */}
      <section id="challenge" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Choose Your Challenge
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PlanCard
            title="Starter"
            description="Try trading with a $10,000 account."
            price="€99"
            features={["8% Profit Target", "5% Daily Drawdown", "MT5/MT4", "Free Retry"]}
          />
          <PlanCard
            title="Pro"
            description="Get funded up to $50,000 and scale your profits."
            price="€299"
            features={["8% Profit Target", "5% Daily Drawdown", "Weekly Payout", "Scaling Plan"]}
            highlight
          />
          <PlanCard
            title="Elite"
            description="Trade a $100,000+ account for maximum returns."
            price="€499"
            features={["8% Profit Target", "5% Daily Drawdown", "Up to 90% Profit Split", "Priority Support"]}
          />
        </div>
      </section>

      {/* FUNDED SECTION */}
      <section id="funded" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Become a Funded Trader
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 text-gray-200">
            <ul className="space-y-6">
              <li>
                <span className="font-bold text-indigo-400">1.</span> Register & Choose Challenge
              </li>
              <li>
                <span className="font-bold text-indigo-400">2.</span> Pass the trading evaluation
              </li>
              <li>
                <span className="font-bold text-indigo-400">3.</span> Get access to our capital & trade with freedom
              </li>
              <li>
                <span className="font-bold text-indigo-400">4.</span> Withdraw profits anytime
              </li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="funded trader"
              className="rounded-2xl shadow-xl w-80 h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* TRADING CONDITIONS SECTION */}
      <section id="conditions" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Trading Conditions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
          <ConditionItem title="Leverage" value="1:100" />
          <ConditionItem title="Platforms" value="MT4 / MT5" />
          <ConditionItem title="Instruments" value="Forex, Indices, Gold, Crypto" />
          <ConditionItem title="Profit Split" value="Up to 90%" />
          <ConditionItem title="Payouts" value="Weekly" />
          <ConditionItem title="No Restrictions" value="All Strategies Allowed" />
        </div>
      </section>

      {/* WITHDRAWAL SECTION */}
      <section id="withdrawal" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Withdrawals</h2>
        <p className="text-center text-gray-300 mb-8">
          Profits are paid out within 24 hours by Crypto (USDT, BTC), Skrill, or Bank Transfer.  
          Enjoy the fastest payout in the industry.
        </p>
        <div className="flex justify-center gap-6">
          <img src="https://cryptologos.cc/logos/tether-usdt-logo.png" alt="USDT" className="w-12 h-12 rounded-lg" />
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="BTC" className="w-12 h-12 rounded-lg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Skrill_logo.svg" alt="Skrill" className="w-20 h-12 bg-white rounded-lg object-contain p-1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/International_Bank_Account.svg/512px-International_Bank_Account.svg.png" alt="Bank" className="w-12 h-12 rounded-lg" />
        </div>
      </section>

      {/* DASHBOARD CTA */}
      <section id="dashboard" className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">All-in-one Dashboard</h2>
        <p className="text-gray-300 mb-8">
          Track your challenges, manage accounts, request payouts, and get real-time updates — all from one secure dashboard.
        </p>
        <a
          href="#get-started"
          className="inline-block px-10 py-4 rounded-2xl bg-indigo-700 text-white font-bold text-xl shadow-lg hover:bg-indigo-600 transition"
        >
          Enter Dashboard
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-gray-800 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} GLOBAL FUNDED TRADERS — All rights reserved.<br />
        <span className="text-xs mt-1 inline-block">For inquiries: support@globalfundedtraders.com</span>
      </footer>
    </main>
  );
}

// Feature card component
function FeatureCard({ title, description }) {
  return (
    <div className="bg-zinc-900 bg-opacity-60 rounded-2xl p-6 w-72 shadow-lg border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

// Plan card component
function PlanCard({ title, description, price, features, highlight }) {
  return (
    <div className={`rounded-2xl p-8 shadow-xl border-2 ${highlight ? "border-indigo-500 bg-indigo-900/60" : "border-zinc-700 bg-zinc-900/70"} flex flex-col items-center`}>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="text-3xl font-extrabold text-indigo-400 mb-6">{price}</div>
      <ul className="text-gray-200 mb-6 space-y-1">
        {features.map((f, i) => <li key={i} className="before:content-['•'] before:text-indigo-400 before:mr-2">{f}</li>)}
      </ul>
      <a href="#get-started" className="px-6 py-2 bg-indigo-700 rounded-xl text-white font-bold shadow hover:bg-indigo-600 transition">Get Challenge</a>
    </div>
  );
}

// Trading condition item
function ConditionItem({ title, value }) {
  return (
    <div className="flex flex-col items-center p-6 bg-zinc-900/70 rounded-2xl border border-zinc-800 shadow">
      <div className="text-lg font-bold text-white mb-1">{title}</div>
      <div className="text-indigo-400 text-xl font-extrabold">{value}</div>
    </div>
  );
}
