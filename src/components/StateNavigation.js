"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, MapPinned } from "lucide-react";
import { STATES } from "@/datas/data";

const StateNavigation = () => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openState, setOpenState] = useState(null);

  const isStateActive = (state) => pathname?.startsWith(state.href);
  const isCityActive = (cityHref) => pathname === cityHref;

  const toggleState = (stateName) => {
    setOpenState((prev) => (prev === stateName ? null : stateName));
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm">
      {/* Header */}
      <div className="bg-teal-600 px-5 py-5 md:px-3 md:py-2.5">
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex w-full items-center justify-between md:cursor-default"
        >
          <div className="text-left">
            <h3 className="text-lg font-extrabold text-white md:text-base">
              राज्यवार खबरें
            </h3>
            <p className="mt-1 text-sm font-semibold text-white/90 md:hidden">
              शहर देखने के लिए क्लिक करें
            </p>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <span className="text-sm font-bold text-white">
              {mobileOpen ? "बंद करें" : "क्लिक करें"}
            </span>
            <ChevronDown
              size={24}
              className={`text-white transition-transform duration-300 ${mobileOpen ? "rotate-180" : ""
                }`}
            />
          </div>
        </button>
      </div>

      {/* Desktop View */}
      <div className="hidden divide-y divide-teal-50 md:block">
        {STATES.map((state, index) => {
          const activeState = isStateActive(state);
          const expanded = openState === state.name;

          return (
            <div key={index}>
              <button
                onClick={() => toggleState(state.name)}
                className={`flex w-full items-center justify-between px-3 py-2.5 text-left text-base font-semibold transition-all ${activeState || expanded
                  ? "bg-teal-50 text-teal-700"
                  : "text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                  }`}
              >
                <span>{state.name}</span>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-400">

                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-300 ${expanded ? "rotate-180" : ""
                      }`}
                  />
                </div>
              </button>

              {expanded && state.cities?.length > 0 && (
                <div className="border-t border-teal-50 bg-slate-50">
                  {state.cities.map((city, cityIndex) => (
                    <Link
                      key={cityIndex}
                      href={city.href}
                      className={`block px-6 py-2.5 text-sm font-medium transition ${isCityActive(city.href)
                        ? "bg-teal-600 text-white"
                        : "text-slate-600 hover:bg-teal-50 hover:text-teal-600"
                        }`}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
      {mobileOpen && (
        <div className="divide-y divide-teal-50 md:hidden">
          {STATES.map((state, index) => {
            const activeState = isStateActive(state);
            const expanded = openState === state.name;

            return (
              <div key={index}>
                <button
                  onClick={() => toggleState(state.name)}
                  className={`flex w-full items-center justify-between px-4 py-4 text-left transition-all ${activeState || expanded
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <MapPinned size={18} className="mt-1 shrink-0" />
                    <div>
                      <div className="text-base font-bold">{state.name}</div>
                      <div className="mt-1 text-xs font-medium text-slate-500">

                      </div>
                    </div>
                  </div>

                  <div className="ml-3 flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">

                    </span>
                    <ChevronRight
                      size={20}
                      className={`shrink-0 transition-transform duration-300 ${expanded ? "rotate-90 text-teal-600" : ""
                        }`}
                    />
                  </div>
                </button>

                {expanded && state.cities?.length > 0 && (
                  <div className="border-t border-teal-50 bg-slate-50">
                    {state.cities.map((city, cityIndex) => (
                      <Link
                        key={cityIndex}
                        href={city.href}
                        className={`block px-8 py-3 text-sm font-medium transition ${isCityActive(city.href)
                          ? "bg-teal-600 text-white"
                          : "text-slate-600 hover:bg-teal-50 hover:text-teal-600"
                          }`}
                        onClick={() => {
                          setMobileOpen(false);
                          setOpenState(null);
                        }}
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StateNavigation;