import Image from "next/image"
// hi
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background elements that make it "pop" */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100 via-white to-fuchsia-50 dark:from-fuchsia-950 dark:via-gray-900 dark:to-fuchsia-900 -z-10"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-fuchsia-300 to-pink-300 rounded-full blur-3xl opacity-30 dark:from-fuchsia-600 dark:to-pink-600 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-pink-200 to-fuchsia-200 rounded-full blur-3xl opacity-30 dark:from-pink-700 dark:to-fuchsia-700 -z-10"></div>

      {/* Main content */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative z-10">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start backdrop-blur-sm bg-white/50 dark:bg-black/30 p-8 rounded-2xl shadow-lg">
          <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                app/page.tsx
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-fuchsia-600 text-white gap-2 hover:bg-fuchsia-700 dark:hover:bg-fuchsia-500 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto shadow-md hover:shadow-lg"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-fuchsia-600 dark:border-fuchsia-500 transition-colors flex items-center justify-center hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/20 hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] shadow-md hover:shadow-lg"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center backdrop-blur-sm bg-white/50 dark:bg-black/30 p-4 rounded-full shadow-md">
          <a
            className="flex items-center gap-2 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  )
}
