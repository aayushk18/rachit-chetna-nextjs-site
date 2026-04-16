// src/pages/_app.js
import Head from "next/head";
import "../styles/styles.css"; // Your global CSS
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;900&display=swap" rel="stylesheet" />
        <style>{`
          .ticker-anim { animation: ticker 0.4s ease; }
          @keyframes ticker { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
          .glow-teal { box-shadow: 0 0 20px rgba(20,184,166,0.25); }
          .card-hover { transition: all 0.2s ease; }
          .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(20,184,166,0.12); }
          .pulse-dot { animation: pulse 1.5s infinite; }
          @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
          ::-webkit-scrollbar { width: 4px; }
          ::-webkit-scrollbar-track { background: #e2e8f0; }
          ::-webkit-scrollbar-thumb { background: #14b8a6; border-radius: 2px; }
          .news-ticker-wrap { overflow: hidden; white-space: nowrap; }
        `}</style>
      </head>
    </Head>
    <Navbar />
      <main className="flex-1 w-full bg-white">
            <Component {...pageProps} />
      </main>
    <Footer />
  </>
}