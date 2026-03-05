import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

const modernThrash = localFont({
  src: "../../public/fonts/Modern Thrash Demo.otf",
  variable: "--font-modern-thrash",
});

const featuredWorks = [
  {
    id: 1,
    title: "Fractured Light",
    category: "Photography",
    href: "/art/images",
    description: "A series exploring the interplay of shadow and light in urban environments.",
    accent: "from-[#c0392b]/20 to-transparent",
    iconColor: "border-red-800",
  },
  {
    id: 2,
    title: "Drift",
    category: "Video",
    href: "/art/videos",
    description: "An experimental short film shot on expired 16mm film.",
    accent: "from-purple-900/20 to-transparent",
    iconColor: "border-purple-800",
  },
  {
    id: 3,
    title: "Hollow Signal",
    category: "Audio",
    href: "/art/audio",
    description: "A 7-track ambient EP crafted from field recordings and synthesizers.",
    accent: "from-blue-900/20 to-transparent",
    iconColor: "border-blue-800",
  },
  {
    id: 4,
    title: "Rust & Red",
    category: "Photography",
    href: "/art/images",
    description: "Industrial decay reframed as quiet beauty.",
    accent: "from-orange-900/20 to-transparent",
    iconColor: "border-orange-800",
  },
];

function FeaturedCard({ work }: { work: (typeof featuredWorks)[number] }) {
  return (
    <Link
      href={work.href}
      className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-[#c0392b]/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(192,57,43,0.15)]"
    >
      <div className="relative flex h-48 items-center justify-center">
        <div className={`absolute inset-0 bg-gradient-to-br ${work.accent}`} />
        <div className="relative z-10 flex flex-col items-center gap-3 opacity-25 group-hover:opacity-40 transition-opacity">
          <div className={`h-14 w-14 rounded-full border-2 ${work.iconColor}`} />
          <div className="w-8 h-0.5 bg-zinc-600" />
          <div className="w-12 h-0.5 bg-zinc-600" />
        </div>
        <span className="absolute top-4 left-4 rounded-full border border-zinc-700 bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
          {work.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[#c0392b]">
          {work.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
          {work.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[#c0392b] opacity-0 transition-opacity group-hover:opacity-100">
          View work
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const { className: thrashClass } = modernThrash;
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Logo background */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/shadowy-vault.webp"
            alt=""
            fill
            className="object-cover opacity-90"
            priority
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-[#080808]/20" />
        </div>

<div className="relative z-10 animate-fade-in">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#c0392b]">
            Creative Showcase
          </p>
          <h1
            className={`${thrashClass} text-center text-[3.58rem] text-black font-bold md:text-[5.02rem] lg:text-[6.45rem]`}
            style={{
              textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)",
              letterSpacing: "0.1em",
              lineHeight: 1.589,
              fontWeight: 900,
            }}
          >
            BRINGING DARK<br />CU<span style={{ letterSpacing: "0.36em" }}>L</span>TURE TO <span style={{ letterSpacing: "0.36em" }}>L</span>IGHT
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Photography, film, and sound — a body of work built at the intersection of
            instinct and craft. Welcome to the archive.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/art"
              className="glow rounded-lg bg-[#c0392b] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#e74c3c] hover:shadow-[0_0_30px_rgba(192,57,43,0.4)]"
            >
              Explore the Work
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-zinc-700 px-7 py-3.5 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs uppercase tracking-widest text-zinc-500">Scroll</span>
          <div className="h-8 w-0.5 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </section>

      {/* Featured Work */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c0392b]">
              Selected Works
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Featured Projects</h2>
          </div>
          <Link
            href="/art"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            View all work
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredWorks.map((work) => (
            <FeaturedCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* Tagline strip */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <blockquote className="text-2xl font-light italic text-zinc-400 md:text-3xl">
            &ldquo;Every frame is a decision. Every sound is an intention.&rdquo;
          </blockquote>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg border border-zinc-700 px-6 py-3 text-sm text-zinc-400 transition-all hover:border-[#c0392b] hover:text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
