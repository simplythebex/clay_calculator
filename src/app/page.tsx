import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky">
        <nav className="min-w-screen mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <a href="#">home</a>
        </nav>
      </header>
      <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center sm:p-20 min-h-full">
        <main className="min-h-screen overflow-y-scroll flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex items-center">
            <h2 className="sm:text-[50px] text-[25px]">we do the maths, so that you don’t have to</h2>
          </div>
          <div>
            <p>First tell us your desired dimentions and clay details...</p>
          </div>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <input type="text" placeholder="desired height (cm)" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#F4ACB7]text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"></input>
            <input type="text" placeholder="desired width (cm)" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#F4ACB7]text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"></input>
            <input type="text" placeholder="clay shrinkage %" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#F4ACB7]text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"></input>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#D8E2DC] text-background gap-2 hover:bg-[#8bb7a0] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              calculate! <svg aria-hidden="true" viewBox="0 0 24 24"></svg>
            </a>
          </div>
        </main>
      </div>
      <footer className="row-start-3 flex gap-6 p-4 flex-wrap items-center justify-center bottom-0 sticky">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/simplythebex/clay_calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/instagram.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Instagram
        </a>
      </footer>
    </div>
  );
}
