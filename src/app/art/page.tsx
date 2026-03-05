import Link from "next/link";

const artCategories = [
  {
    href: "/art/images",
    label: "Images",
    subtitle: "Photography & Visual Art",
    description:
      "A curated archive of still photography spanning street, portrait, abstract, and experimental work. Shot on film and digital.",
    count: "48 works",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    accent: "group-hover:border-[#c0392b]/50 group-hover:shadow-[0_8px_40px_rgba(192,57,43,0.15)]",
    glow: "from-[#c0392b]/10",
    tag: "bg-[#c0392b]/10 text-[#c0392b] border-[#c0392b]/20",
  },
  {
    href: "/art/videos",
    label: "Videos",
    subtitle: "Film & Motion",
    description:
      "Short films, music videos, and experimental moving image pieces. Driven by texture, timing, and atmosphere.",
    count: "12 films",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
        />
      </svg>
    ),
    accent: "group-hover:border-purple-500/50 group-hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)]",
    glow: "from-purple-900/10",
    tag: "bg-purple-900/20 text-purple-400 border-purple-800/30",
  },
  {
    href: "/art/audio",
    label: "Audio",
    subtitle: "Music & Sound Design",
    description:
      "Original compositions, field recordings, and ambient soundscapes. Music that sits at the edge of genre.",
    count: "3 releases",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
    accent: "group-hover:border-blue-500/50 group-hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)]",
    glow: "from-blue-900/10",
    tag: "bg-blue-900/20 text-blue-400 border-blue-800/30",
  },
];

export default function ArtPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c0392b]">
          The Archive
        </p>
        <h1 className="text-4xl font-bold text-white md:text-6xl">Art Hub</h1>
        <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">
          Everything lives here. Browse by medium — images, video, or audio — and find
          what resonates. Each section is its own world.
        </p>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {artCategories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 ${cat.accent}`}
          >
            {/* Glow bg */}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />

            <div className="relative z-10">
              <div className="mb-6 text-zinc-500 transition-colors group-hover:text-zinc-300">
                {cat.icon}
              </div>

              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">{cat.label}</h2>
                  <p className="text-sm text-zinc-500">{cat.subtitle}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${cat.tag}`}
                >
                  {cat.count}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {cat.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-white">
                Explore
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Divider line with label */}
      <div className="mt-20 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-800" />
        <span className="text-xs uppercase tracking-widest text-zinc-600">Latest additions</span>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      {/* Recent items grid */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg border border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-700"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(${i % 2 === 0 ? "192,57,43" : "99,102,241"},0.08) 0%, transparent 100%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
