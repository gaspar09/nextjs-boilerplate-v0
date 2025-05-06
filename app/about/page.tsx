import Link from "next/link"
//hi
export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white/50 dark:bg-black/30 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <p className="mb-4">
          Welcome to our website. We are a team of passionate developers working on creating amazing web experiences.
        </p>

        <p className="mb-6">
          Our mission is to build beautiful, functional, and accessible web applications that solve real problems.
        </p>

        <Link
          href="/"
          className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-800 dark:text-fuchsia-400 dark:hover:text-fuchsia-300"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
