import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind CSS import
import { Navbar, Footer } from "flowbite-react";

const App: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar fluid rounded>
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-600">PropFirm</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#features">Features</Navbar.Link>
          <Navbar.Link href="#plans">Plans</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* Hero */}
      <section className="bg-gray-50 text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Trade with Our Capital</h1>
        <p className="text-lg text-gray-600 mb-6">Join a trusted prop firm and get funded up to $200,000</p>
        <a
          href="#plans"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Get Funded
        </a>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Low Fees</h3>
            <p className="text-gray-600">Competitive pricing to keep your profits.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Instant Funding</h3>
            <p className="text-gray-600">Skip challenges and trade right away.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Payouts in Crypto</h3>
            <p className="text-gray-600">Get paid in USDT, BTC or your choice.</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            { title: "Starter", amount: "$10,000", price: "$99" },
            { title: "Pro", amount: "$50,000", price: "$249" },
            { title: "Elite", amount: "$200,000", price: "$799" },
          ].map((plan) => (
            <div key={plan.title} className="bg-white shadow rounded p-6">
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-2">{plan.amount} Account</p>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4 px-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <Footer container className="text-center">
        <Footer.Copyright href="#" by="PropFirm" year={2025} />
      </Footer>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
