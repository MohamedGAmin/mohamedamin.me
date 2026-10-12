const LINKEDIN_URL = "https://www.linkedin.com/in/mohamedgamin";
const TYPED_TEXT = "building mohamedamin.me"; // 23 chars, matches w-[23ch] and steps(23)

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <h1 className="text-[clamp(2rem,6vw,3rem)] font-bold">Mohamed Amin</h1>
      <p className="mt-2 mb-6 text-xl text-zinc-600 dark:text-zinc-400">AI Engineer</p>

      {/* Fixed 26ch width ("$ " + 23 chars + cursor) so the box never resizes while typing */}
      <div
        role="img"
        aria-label="Website coming soon"
        className="mb-6 box-content w-[26ch] rounded-lg border border-transparent bg-[#0f1115] px-5 py-3 text-left font-mono text-[0.95rem] leading-snug text-zinc-200 dark:border-[#30363d] dark:bg-[#161b22]"
      >
        <span className="text-[#3fb950]">$</span>{" "}
        <span className="inline-block w-[23ch] overflow-hidden whitespace-nowrap align-bottom animate-type motion-reduce:animate-none">
          {TYPED_TEXT}
        </span>
        <span className="animate-blink motion-reduce:animate-none">▌</span>
      </div>

      <p className="text-zinc-600 dark:text-zinc-400">
        Contact me on{" "}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#0a66c2] hover:underline dark:text-[#70b5f9]"
        >
          LinkedIn →
        </a>
      </p>
    </main>
  );
}
