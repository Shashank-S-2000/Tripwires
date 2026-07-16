"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Hero() {

  const [url, setUrl] = useState("");

  const router = useRouter();


  function analyzeWebsite() {

    if (!url) return;

    router.push(
      `/report?url=${encodeURIComponent(url)}`
    );

  }

    return (
      <section className="pt-24 pb-28">
        <div className="container grid gap-16 lg:grid-cols-2 lg:items-center">
  
          {/* Left Content */}
          <div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Because Every Click
              <br />
              Should Move Forward.
            </h1>
  
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              Our AI acts like a first-time visitor and tells you exactly what
              confuses, builds trust, and stops conversions.
            </p>
  
  
            {/* URL Input */}
            <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
  
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter your website URL"
                className="h-12 flex-1 rounded-xl border border-stone-300 bg-white px-4 text-sm outline-none transition focus:border-[#315a43]"
            />
              <button
                onClick={analyzeWebsite}
                className="h-12 rounded-xl bg-[#315a43] px-7 text-sm font-medium text-white transition hover:bg-[#274936]"
              >
                Analyze
              </button>
  
            </div>
  
  
            <p className="mt-4 text-sm text-stone-500">
              Analyze your website like a first-time visitor.
            </p>
  
          </div>
  
  
  
          {/* Report Preview */}
          <div>
  
            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
  
  
              <div className="flex items-center justify-between">
  
                <div>
                  <p className="text-sm text-stone-500">
                    Overall Score
                  </p>
  
                  <div className="mt-2 text-5xl font-semibold">
                    89
                    <span className="text-lg text-stone-400">
                      /100
                    </span>
                  </div>
                </div>
  
  
                <div className="rounded-full bg-[#315a43]/10 px-4 py-2 text-sm font-medium text-[#315a43]">
                  Excellent
                </div>
  
              </div>
  
  
  
              <div className="mt-8 space-y-5">
  
                <Metric
                  label="Clarity"
                  score="92"
                />
  
                <Metric
                  label="Trust"
                  score="78"
                />
  
                <Metric
                  label="Navigation"
                  score="91"
                />
  
                <Metric
                  label="Conversion"
                  score="86"
                />
  
              </div>
  
  
  
              <div className="mt-8 rounded-2xl bg-stone-50 p-4">
  
                <p className="text-sm font-medium">
                  Top Issue Found
                </p>
  
                <p className="mt-2 text-sm text-stone-600">
                  Your primary CTA does not clearly communicate the next step.
                </p>
  
              </div>
  
  
            </div>
  
          </div>
  
  
        </div>
      </section>
    );
  }
  
  
  
  function Metric({
    label,
    score,
  }: {
    label: string;
    score: string;
  }) {
    return (
      <div className="flex items-center justify-between">
  
        <span className="text-sm text-stone-600">
          {label}
        </span>
  
        <span className="font-medium">
          {score}/100
        </span>
  
      </div>
    );
  }