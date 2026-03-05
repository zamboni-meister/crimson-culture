import Link from "next/link";

const timeline = [
  {
    year: "2024",
    items: [
      "Solo exhibition — \"Rust & Signal\", Manchester",
      "Released EP \"Hollow Signal\"",
      "Film \"Drift\" screened at Edinburgh Short Film Festival",
    ],
  },
  {
    year: "2023",
    items: [
      "Artist residency — La Friche, Marseille",
      "Released album \"Residue\"",
      "Group show — \"Material Witness\", London",
    ],
  },
  {
    year: "2022",
    items: [
      "Commissioned short film for BBC Arts Online",
      "Released \"Fieldwork\" sound recordings",
      "First solo show — \"Negative Space\", Sheffield",
    ],
  },
  {
    year: "2021",
    items: [
      "Graduate show — Royal College of Art",
      "Began field recording practice",
    ],
  },
];

const skills = [
  { label: "Photography", note: "Film & Digital" },
  { label: "Film & Video", note: "16mm, Super 8, Digital" },
  { label: "Sound Design", note: "Modular, Field Recording" },
  { label: "Dark Room", note: "B&W Printing" },
  { label: "Installation", note: "Site-Specific" },
  { label: "Writing", note: "Essays & Artist Statements" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Hero section */}
      <div className="mb-20 grid gap-12 md:grid-cols-[1fr_280px]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c0392b]">
            About
          </p>
          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            Alex Morrow
          </h1>
          <p className="mt-2 text-xl text-zinc-500">Artist &amp; Filmmaker</p>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-400">
            <p>
              I make images, sounds, and films about the spaces between things — the
              silence after a sound, the light that lingers after a person leaves, the
              texture of a surface worn down by decades of weather.
            </p>
            <p>
              My practice spans photography, experimental film, and sound design. I&apos;m
              drawn to obsolete formats — expired film, analogue tape, cassettes — not
              out of nostalgia, but because their failures feel honest. The grain, the
              dropout, the hiss: these aren&apos;t mistakes. They&apos;re evidence.
            </p>
            <p>
              Based between London and the north of England. Available for commissions,
              collaborations, and residencies.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-[#c0392b] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#e74c3c]"
            >
              Get in Touch
            </Link>
            <Link
              href="/art"
              className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
            >
              View the Work
            </Link>
          </div>
        </div>

        {/* Portrait placeholder */}
        <div className="flex flex-col gap-4">
          <div className="aspect-[3/4] rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c0392b]/10 via-zinc-900 to-zinc-950" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 opacity-20">
                <div className="h-16 w-16 rounded-full border-2 border-zinc-500" />
                <div className="h-0.5 w-10 bg-zinc-500" />
                <div className="h-0.5 w-16 bg-zinc-500" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-xs text-zinc-700">Portrait</div>
          </div>
          <p className="text-xs text-zinc-600 text-center">London, 2024 &nbsp;&middot;&nbsp; Photo by M. Chen</p>
        </div>
      </div>

      {/* Disciplines */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold text-white">Disciplines</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-700"
            >
              <p className="font-semibold text-white">{skill.label}</p>
              <p className="mt-1 text-xs text-zinc-500">{skill.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-20">
        <h2 className="mb-10 text-2xl font-bold text-white">Timeline</h2>
        <div className="relative space-y-10">
          {/* Vertical line */}
          <div className="absolute left-[52px] top-2 bottom-2 w-px bg-zinc-800 hidden md:block" />

          {timeline.map((block) => (
            <div key={block.year} className="flex gap-6">
              {/* Year */}
              <div className="hidden w-24 shrink-0 md:flex flex-col items-end pt-0.5">
                <span className="text-sm font-mono font-semibold text-[#c0392b]">
                  {block.year}
                </span>
              </div>

              {/* Dot */}
              <div className="relative hidden md:flex items-start">
                <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#c0392b] bg-[#080808]" />
              </div>

              {/* Content */}
              <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                <p className="mb-3 text-sm font-semibold text-[#c0392b] md:hidden">{block.year}</p>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-zinc-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 md:p-12">
        <p className="mb-4 text-xs uppercase tracking-widest text-zinc-600">Artist Statement</p>
        <blockquote className="text-xl font-light leading-relaxed text-zinc-300 md:text-2xl">
          &ldquo;I make work about the evidence of time — rust, grain, static, decay. Not
          because I think the past is better, but because I think it tells the truth
          in ways the present is still too close to understand.&rdquo;
        </blockquote>
      </section>
    </div>
  );
}
