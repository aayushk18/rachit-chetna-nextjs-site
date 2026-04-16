"use client";

import { useState, useEffect } from "react";
import StateNavigation from "@/components/StateNavigation";
import AdBanner160x600 from "@/components/AdBanner160x600";
import AdBanner300x250 from "@/components/AdBanner300x250";
import AdBanner300x600 from "@/components/AdBanner300x600";
import AdBanner450x90 from "@/components/AdBanner450x90";
import AdBanner728x90 from "@/components/AdBanner728x90";
import Link from "next/link";

// Import all static data from a single file
import {
  BREAKING_NEWS,
  STATES,
  CATEGORIES,
  VIDEOS,
  SHORTS,
  LATEST_NEWS,
  CAT_NEWS,
  STATE_NEWS_ITEMS
} from "@/datas/data";




export default function RachitChetna() {
  // const [data, setData] = useState(null);

  const [tickerIdx, setTickerIdx] = useState(0);
  const [activeState, setActiveState] = useState("दिल्ली");
  const [activeCategory, setActiveCategory] = useState("राजनीति");
  const [mainVideo, setMainVideo] = useState(VIDEOS[0]);
  const [shortsPage, setShortsPage] = useState(0);
  const [playingShort, setPlayingShort] = useState(null);

  const platforms = [
    {
      label: "Facebook",
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
    },
    {
      label: "Twitter/X",
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
    },
    {
      label: "Instagram",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    },
    {
      label: "YouTube",
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
    }
  ];



  useEffect(() => {
    const t = setInterval(() => setTickerIdx(i => (i + 1) % BREAKING_NEWS.length), 4000);
    return () => clearInterval(t);
  }, []);

  if (!mainVideo) {
    return (
      <div className="w-full h-[70vh] flex items-center justify-center bg-white flex-col gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-teal-200 border-t-teal-600 animate-spin" />
        <p className="text-teal-700 font-bold mx-auto">लोड हो रहा है...</p>
      </div>
    );
  }

  // const { BREAKING_NEWS, STATES, CATEGORIES, VIDEOS, SHORTS, LATEST_NEWS, CAT_NEWS, STATE_NEWS_ITEMS } = data;

  return (
    <>
      {/* ===== BREAKING NEWS TICKER ===== */}
      <div className="border-b border-teal-100 flex items-stretch bg-white shadow-sm px-4">

        {/* Left label */}
        <div className="bg-teal-600 px-4 py-2 flex items-center gap-2 shrink-0 shadow-sm">
          <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-white" />
          <span className="text-white font-black text-sm uppercase">
            ब्रेकिंग
          </span>
        </div>

        {/* News */}
        <div className="flex-1 overflow-hidden flex items-center px-4 py-2">
          <div className="ticker-anim text-slate-700 text-sm sm:text-base font-semibold">
            {BREAKING_NEWS[tickerIdx]}
          </div>
        </div>

        {/* Arrow */}
        <div className="px-3 flex items-center text-teal-600">
          ▶
        </div>
      </div>

      {/* ===== TOP AD BANNER ===== */}
      <div className="p-4 w-full">
        <AdBanner450x90 />
      </div>

      {/* ===== MAIN CONTENT GRID ===== */}
      <div className="flex flex-col lg:flex-row gap-4 px-4 md:px-16 pb-8">

        <aside className="w-full lg:w-52 shrink-0 space-y-4 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto no-scrollbar">


          <AdBanner160x600 />

          <StateNavigation states={STATES} activeState={activeState} setActiveState={setActiveState} />


          <div className="w-full   overflow-hidden rounded-2xl border border-teal-100 bg-white p-5 shadow-[0_8px_30px_rgb(20,184,166,0.05)] transition-all hover:shadow-[0_8px_30px_rgb(20,184,166,0.12)]">
            {/* Header with Teal Accents */}
            <div className="mb-6 flex items-center justify-between border-b border-teal-50 pb-3">
              <h3 className="text-xs font-black tracking-widest text-teal-800 uppercase">फ़ॉलो करें</h3>
              <div className="flex gap-1">
                <span className="h-1 w-1 rounded-full bg-teal-200"></span>
                <span className="h-1 w-3 rounded-full bg-teal-500"></span>
              </div>
            </div>

            <div className="space-y-3">
              {platforms.map((platform) => (
                <a
                  key={platform.label}
                  href="#"
                  className="group relative flex w-full items-center justify-between rounded-xl bg-teal-50/30 p-3 transition-all duration-300 hover:bg-teal-600 active:scale-95"
                >
                  <div className="flex items-center gap-3">
                    {/* Icon Container */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-teal-600 shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:text-teal-700">
                      {platform.icon}
                    </div>

                    {/* Text */}
                    <span className="text-sm font-bold text-teal-900 transition-colors group-hover:text-white">
                      {platform.label}
                    </span>
                  </div>

                  {/* Floating Arrow Icon */}
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/0 text-teal-400 transition-all group-hover:bg-white/20 group-hover:text-white group-hover:rotate-[-45deg]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5">
                      <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 blur-sm transition-opacity group-hover:opacity-20" />
                </a>
              ))}
            </div>


          </div>






        </aside>

        <main className="flex-1 min-w-0 space-y-6">

          <section id="live-now" className="space-y-3">
            <div className="relative rounded-xl overflow-hidden border border-teal-200 shadow-sm" style={{ aspectRatio: "16/9" }}>
              <iframe
                key={mainVideo.id}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${mainVideo.id}?autoplay=1&mute=1&loop=1&playlist=${mainVideo.id}&rel=0`}
                title={mainVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                autoPlay
                muted
                loop
                playlist={mainVideo.id}
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-teal-600 text-white text-xs font-black px-2 py-1 rounded flex items-center gap-1">
                  <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-white" /> LIVE
                </span>
                <span className="bg-white/90 text-teal-700 text-xs px-2 py-1 rounded">{mainVideo.cat}</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 border border-teal-100 shadow-sm">
              <h2 className="text-slate-800 font-bold text-xl leading-snug">{mainVideo.title}</h2>
              <div className="flex items-center gap-3 mt-2 text-slate-500 text-xs">
                <span>{mainVideo.views} views</span>
                <span>Today</span>
                <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded">{mainVideo.cat}</span>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-slate-800 font-black text-lg flex items-center gap-2">
                <span className="w-1 h-6 bg-teal-600 rounded-full inline-block" />
                ताज़े वीडियो & LIVE
              </h2>
              <button className="text-teal-600 text-xs hover:text-teal-500">सभी देखें →</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {VIDEOS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setMainVideo(v)}
                  className={`card-hover rounded-xl overflow-hidden border text-left ${mainVideo.id === v.id ? "border-teal-500" : "border-teal-100"
                    } bg-white shadow-sm`}
                >
                  <div className="relative bg-slate-100" style={{ aspectRatio: "16/9" }}>
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                      alt={v.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-teal-600/90 flex items-center justify-center">
                        <span className="text-white text-lg">▶</span>
                      </div>
                    </div>
                    <span className="absolute top-1.5 left-1.5 bg-teal-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      {v.cat}
                    </span>
                    <span className="absolute bottom-1.5 right-1.5 bg-white/90 text-slate-700 text-[9px] px-1.5 py-0.5 rounded">
                      {v.views}
                    </span>
                  </div>
                  <div className="p-2">
                    <p className="text-slate-800 text-xs font-semibold leading-snug line-clamp-2">{v.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <AdBanner728x90 />

          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-6 bg-cyan-500 rounded-full inline-block" />
              <h2 className="text-slate-800 font-black text-lg">मुख्य समाचार</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { emoji: "", headline: "केंद्र सरकार का बड़ा फैसला: 10 लाख नौकरियों का ऐलान, युवाओं में उत्साह", tag: "राजनीति", hot: true },
                { emoji: "", headline: "Budget 2025 में मिडिल क्लास को राहत: इनकम टैक्स में बड़ी छूट", tag: "व्यापार", hot: true },
                { emoji: "", headline: "भारत ने ऑस्ट्रेलिया को 8 विकेट से रौंदा – Kohli का शतक", tag: "खेल", hot: false },
                { emoji: "", headline: "उत्तर भारत में आंधी-तूफान की चेतावनी – IMD अलर्ट", tag: "मौसम", hot: false },
                { emoji: "", headline: "मुंबई: पुलिस ने 500 करोड़ के ड्रग रैकेट का किया भंडाफोड़", tag: "अपराध", hot: true },
                { emoji: "", headline: "NEET 2025 की तारीख घोषित – छात्रों की मांग पूरी", tag: "शिक्षा", hot: false },
              ].map((item, i) => (
                <div key={i} className="card-hover bg-white border border-teal-100 rounded-xl p-4 cursor-pointer shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{item.emoji}</span>
                    <div>
                      {item.hot && (
                        <span className="bg-teal-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded mr-1">
                          🔥 HOT
                        </span>
                      )}
                      <span className="bg-teal-50 text-teal-700 text-[9px] px-1.5 py-0.5 rounded">{item.tag}</span>
                      <p className="text-slate-800 text-sm font-semibold mt-1.5 leading-snug">{item.headline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-1 h-6 bg-teal-600 rounded-full inline-block" />
                <h2 className="text-slate-800 font-black text-lg">Shorts – 60 सेकंड न्यूज़</h2>
              </div>
              <Link href="/shorts" className="text-teal-600 text-xs hover:text-teal-500">सभी Shorts →</Link>
            </div>

            <div className="relative group/slider px-2 overflow-hidden sm:overflow-visible">
              {/* Added overflow-hidden for mobile to kill the horizontal scroll, but visible for sm+ to show buttons */}

              {shortsPage > 0 && (
                <button
                  onClick={() => setShortsPage(p => p - 1)}
                  className="hidden sm:flex absolute -left-5 top-[40%] text-2xl font-bold -translate-y-1/2 z-30 bg-white border border-teal-200 text-teal-600 w-10 h-10 rounded-full items-center justify-center shadow-md hover:bg-teal-50 hover:text-teal-700 transition-all"
                >
                  ‹
                </button>
              )}

              <div className="w-full py-2">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${shortsPage * 100}%)` }}
                >
                  {SHORTS.slice(0, 30).map((s, i) => (
                    /* Changed w-1/6 to be responsive: 2 items on mobile, 3 on tablet, 6 on desktop */
                    <div key={i} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 shrink-0 px-2 cursor-pointer group block">
                      <div className="card-hover h-full">
                        <div
                          className="rounded-xl bg-gradient-to-b from-teal-50 to-cyan-50 border border-teal-100 overflow-hidden relative"
                          style={{ aspectRatio: "9/16" }}
                        >
                          {playingShort === i ? (
                            <iframe
                              className="w-full h-full absolute inset-0 z-20"
                              src={`https://www.youtube.com/embed/${s.url.split('/shorts/')[1]}?autoplay=1`}
                              title={s.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <div
                              className="w-full h-full relative z-10 overflow-hidden bg-black"
                              onClick={() => setPlayingShort(i)}
                            >
                              <img
                                src={`https://img.youtube.com/vi/${s.url.split('/shorts/')[1]}/hqdefault.jpg`}
                                alt={s.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-teal-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                  <span className="text-white text-xl translate-x-0.5">▶</span>
                                </div>
                              </div>

                              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                {s.duration}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-slate-800 text-xs font-semibold mt-2 leading-snug text-center line-clamp-2">{s.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Only show next button if there's more to slide based on screen size */}
              {(shortsPage + 1) * (typeof window !== 'undefined' && window.innerWidth < 640 ? 2 : 6) < Math.min(SHORTS.length, 30) && (
                <button
                  onClick={() => setShortsPage(p => p + 1)}
                  className="hidden sm:flex absolute -right-5 top-[40%] text-2xl font-bold -translate-y-1/2 z-30 bg-white border border-teal-200 text-teal-600 w-10 h-10 rounded-full items-center justify-center shadow-md hover:bg-teal-50 hover:text-teal-700 transition-all"
                >
                  ›
                </button>
              )}
            </div>


          </section>

          <AdBanner728x90 bg="from-cyan-100 to-teal-100" />

          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block" />
              <h2 className="text-slate-800 font-black text-lg">श्रेणीवार खबरें</h2>
            </div>
            <div className="flex gap-2 mb-4 flex-wrap">
              {CATEGORIES.map((catObj) => {
                const cat = catObj.name;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeCategory === cat
                      ? "bg-teal-600 text-white"
                      : "bg-teal-50 text-slate-600 hover:bg-teal-100"
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            <div className="space-y-2">
              {(() => {
                const currentCatNews = CAT_NEWS[activeCategory];
                const hasNews = currentCatNews && currentCatNews.length > 0;
                const displayNews = hasNews
                  ? currentCatNews
                  : [
                    { title: `${activeCategory} से जुड़ी ताज़ा खबरें जल्द ही अपडेट की जाएंगी।` },
                    { title: `इस श्रेणी में नई खबरें पढ़ने के लिए कृपया थोड़ी देर बाद दोबारा जांचें।` },
                    { title: `हमारी टीम ${activeCategory} से संबंधित सटीक जानकारी जुटा रही है।` },
                  ];

                return displayNews.map((item, i) => (
                  <div key={i} className="card-hover flex items-center gap-3 bg-white border border-teal-100 rounded-xl p-3 cursor-pointer shadow-sm">
                    <span className="text-teal-600 font-black text-lg">{String(i + 1).padStart(2, "0")}</span>
                    <div className="w-px h-8 bg-teal-200" />
                    <p className="text-slate-800 text-sm font-semibold">{item.title}</p>
                    <span className="ml-auto text-slate-400 text-xs">›</span>
                  </div>
                ));
              })()}
            </div>
          </section>

          <section className="bg-white border border-teal-100 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-6 bg-cyan-500 rounded-full inline-block" />
              <h2 className="text-slate-800 font-black text-base">{activeState} की खबरें</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STATE_NEWS_ITEMS.map((item, i) => (
                <div key={i} className="card-hover rounded-lg overflow-hidden cursor-pointer group">
                  <div className="relative w-full h-24 bg-slate-100 mb-2 overflow-hidden rounded-lg">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-1.5 left-1.5 bg-teal-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-slate-800 text-xs font-semibold leading-snug line-clamp-2">
                    <span className="text-teal-700 font-bold">{activeState} में </span>
                    {item.title}
                  </p>
                  <div className="text-slate-500 text-[10px] mt-1">{item.time}</div>
                </div>
              ))}
            </div>
          </section>

          <AdBanner728x90 />

          <section
            id="app"
            className="rounded-xl overflow-hidden bg-linear-to-r from-cyan-600 to-teal-600 border border-teal-300 p-6 flex items-center justify-between"
          >
            <div>
              <h3 className="text-white font-black text-xl mb-1">रचित चेतना App डाउनलोड करें</h3>
              <p className="text-teal-50 text-sm">सबसे पहले ब्रेकिंग न्यूज़ पाएं, LIVE देखें, कहीं भी कभी भी</p>
              <div className="flex gap-3 mt-3">
                <button className="bg-white text-teal-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow hover:shadow-lg transition-transform hover:-translate-y-0.5">
                  App Store
                </button>
                <button className="bg-white text-teal-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow hover:shadow-lg transition-transform hover:-translate-y-0.5">
                  Google Play
                </button>
              </div>
            </div>
            <div className="text-8xl opacity-20 text-white">📱</div>
          </section>
        </main>

        <aside className="w-full lg:w-60 shrink-0 space-y-4 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto no-scrollbar">
          <AdBanner300x250 />

          <div className="bg-white border border-teal-100 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-teal-600  px-3 py-2 flex items-center gap-2">
              <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-white" />
              <h3 className="text-white font-bold text-base">ताज़ा खबरें</h3>
            </div>
            <div className="divide-y divide-teal-50 max-h-96 overflow-y-auto">
              {LATEST_NEWS.map((item, i) => (
                <div key={i} className="px-3 py-2.5 cursor-pointer hover:bg-teal-50 transition-all">
                  <p className="text-slate-800 text-xs font-semibold leading-snug">{item.headline}</p>
                  <p className="text-slate-500 text-[10px] mt-1">{item.time}</p>
                </div>
              ))}
            </div>
          </div>

          <AdBanner300x250 bg="from-cyan-100 to-teal-50" />

          <div className="bg-white border border-teal-100 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-teal-600 px-3 py-2">
              <h3 className="text-white font-bold text-base">ट्रेंडिंग</h3>
            </div>
            <div className="p-3 space-y-2">
              {["#Budget2025", "#IPL2025", "#ChunaaviRang", "#BharatJodo", "#SensexCrash", "#DelhiPollution"].map((tag, i) => (
                <div key={tag} className="flex items-center gap-2 cursor-pointer hover:text-teal-600 transition-all">
                  <span className="text-teal-600 font-black text-sm">#{i + 1}</span>
                  <span className="text-slate-600 text-xs font-semibold">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-teal-100 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-teal-600 px-3 py-2">
              <h3 className="text-white font-bold text-base">पाठक सर्वे</h3>
            </div>
            <div className="p-3">
              <p className="text-slate-800 text-xs font-semibold mb-3">क्या बजट 2025 मध्यम वर्ग के लिए अच्छा है?</p>
              {[["हाँ, बहुत अच्छा", 68], ["नहीं, निराशाजनक", 22], ["तटस्थ", 10]].map(([opt, pct]) => (
                <div key={opt} className="mb-2">
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>{opt}</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-teal-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-teal-500 to-cyan-500 rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
              <button className="w-full mt-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold py-1.5 rounded-lg transition-all">
                वोट करें
              </button>
            </div>
          </div>

          <AdBanner300x600 />
        </aside>
      </div>
    </>
  );
}