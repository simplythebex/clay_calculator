"use client";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  const [desiredWidth, setDesiredWidth] = useState<number | "">("");
  const [desiredHeight, setDesiredHeight] = useState<number | "">("");
  const [desiredDepth, setDesiredDepth] = useState<number | "">("");
  const [shrinkagePercentage, setShrinkagePercentage] = useState<number | "">("");
  const [result, setResult] = useState<{ width: number; height: number;} | null>(null);

  const calculateShrinkage = (event: React.FormEvent) => {
    event.preventDefault();

    if (desiredWidth === "" || desiredHeight === "" || shrinkagePercentage === "") return;

    const calculatedWidth = (desiredWidth / (1 - shrinkagePercentage / 100)).toFixed(1);
    const calculatedHeight = (desiredHeight / (1 - shrinkagePercentage / 100)).toFixed(1);

    setResult({
      width: calculatedWidth,
      height: calculatedHeight
    });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky">
        <nav className="min-w-screen mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-5">
          <Link href=""><Image aria-hidden src="/cat-logo.svg" alt="clay calculator icon" width={35} height={35} /></Link>
        </nav>
      </header>

      <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center sm:p-20 min-h-full">
        <main className="min-h-screen overflow-y-scroll flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-col">
            <h2 className="sm:text-[50px] text-[25px]">Clay Shrinkage Calculator</h2>
            <p className="pt-8 sm:text-[15px] sm:m-5">First, tell us your desired dimensions and clay details...</p>
          </div>

          {/* Form */}
          <form onSubmit={calculateShrinkage} className="flex gap-4 flex-col sm:flex-row">
            <div className="flex items-center gap-2">
            <input
              name="desiredWidth"
              id="desiredWidth"
              type="number"
              placeholder="desired width (cm)"
              required
              value={desiredWidth}
              onChange={(e) => setDesiredWidth(Number(e.target.value) || "")}
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#F4ACB7] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            />
            <p>cm wide</p>
            </div>
            <div className="flex items-center gap-2">
            <input
              name="desiredHeight"
              id="desiredHeight"
              type="number"
              placeholder="desired height (cm)"
              required
              value={desiredHeight}
              onChange={(e) => setDesiredHeight(Number(e.target.value) || "")}
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#F4ACB7] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            />
            <p>cm high</p>
            </div>
            <div className="flex items-center gap-2">
            <input
              name="shrinkagePercentage"
              id="shrinkagePercentage"
              type="number"
              placeholder="clay shrinkage %"
              required
              value={shrinkagePercentage}
              onChange={(e) => setShrinkagePercentage(Number(e.target.value) || "")}
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#F4ACB7] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            />
            <p>shrinkage %</p>
            </div>
            <button
              type="submit"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#D8E2DC] text-background gap-2 hover:bg-[#8bb7a0] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              calculate!
            </button>
          </form>

          {/* Result Display */}
          {result !== null && (
            <div className="sm:m-5 p-4 bg-[#F4ACB7] rounded-lg">
              <p>You need to throw a shape that measures <strong>{result.height}cm high and {result.width}cm wide.</strong></p>
            </div>
          )}
        </main>
      </div>

      <footer className="row-start-3 flex gap-6 p-4 flex-wrap items-center justify-center bottom-0 sticky">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/simplythebex/clay_calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/github-mark.svg" alt="GitHub icon" width={16} height={16} />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/bex-jones/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/linkedin.svg" alt="LinkedIn icon" width={16} height={16} />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
