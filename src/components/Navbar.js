"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ for active route
import TemperatureMeter from "./TemperatureMeter";
import Image from "next/image";

// import { CATEGORIES } from "@/datas/data";

export default function Navbar() {
  const pathname = usePathname(); // ✅ current route

  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {

    const updateTime = () => {
      const currentDate = new Date();

      setTimeStr(
        currentDate.toLocaleTimeString("hi-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

      setDateStr(
        currentDate.toLocaleDateString("hi-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const subNavLinks = [
    { label: "होम", href: "/" },
    { label: "LIVE TV", href: "/live" },
    { label: "चुनाव", href: "/election" },
    { label: "क्रिकेट", href: "/cricket" },
    { label: "बॉलीवुड", href: "/bollywood" },
    { label: "विदेश", href: "/foreign" },
    { label: "तकनीक", href: "/technology" },
    { label: "स्वास्थ्य", href: "/health" },
    { label: "धर्म", href: "/religion" },
    { label: "व्यापार", href: "/business" },
    { label: "अपराध", href: "/crime" },
    { label: "शिक्षा", href: "/education" },
    { label: "राजनीति", href: "/politics" },
    { label: "खेल", href: "/sports" },
    { label: "मनोरंजन", href: "/entertainment" },
    { label: "वीडियो", href: "/videos" },
    { label: "शॉर्ट्स", href: "/shorts" },
  ];

  return (
    <header>
      {/* ===== TOP BAR ===== */}
      <div className="bg-teal-50 border-b border-teal-100 px-4 md:px-16 py-1 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-600 shadow-sm gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <span>{dateStr}</span>
          <span className="hidden sm:inline">{timeStr}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hover:text-teal-600 cursor-pointer transition-colors">
            Subscribe
          </span>
          <span className="hover:text-teal-600 cursor-pointer transition-colors">
            Notifications
          </span>
          <span className="hover:text-teal-600 cursor-pointer transition-colors">
            हिंदी | English
          </span>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="bg-white border-b border-teal-100 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-16 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Rachit Chetna Logo"
              width={140}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <TemperatureMeter city="Delhi" temp="18" condition="Foggy" />

            <Link
              href="/live"
              className="w-fit flex items-center gap-1.5 bg-teal-600 text-white text-sm font-bold md:px-3 py-2 px-4 rounded-lg shadow-sm hover:shadow-md hover:bg-teal-500 transition-all"
            >
              <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-white" />
              LIVE देखें
            </Link>

            <Link
              href="/#app"
              className="w-fit flex items-center gap-1.5 border border-teal-600 text-teal-600 text-xs font-bold px-3 py-2 rounded-lg shadow-sm hover:shadow-md hover:bg-teal-50 transition-all"
            >
              📱 App डाउनलोड
            </Link>
          </div>
        </div>

        {/* ===== CATEGORY NAV ===== */}
        <div className="border-t border-teal-100 px-4 md:px-16 py-1.5 flex items-center gap-2 overflow-x-auto no-scrollbar bg-white shadow-sm">
          {subNavLinks.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));

            return (
              <Link
                key={index}
                href={item.href}
                className={`text-sm whitespace-nowrap px-3 py-1 rounded transition-all capitalize
                  
                  ${isActive
                    ? "bg-teal-600 text-white font-semibold shadow-sm"
                    : "text-slate-600 hover:text-teal-600 hover:bg-teal-50"
                  }
                `}
              >
                {item.label || item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}