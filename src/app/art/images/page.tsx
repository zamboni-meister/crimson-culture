import Link from "next/link";

const images = [
  { id: 1, title: "Ember Street", series: "Urban Decay", size: "col-span-2 row-span-2", gradient: "from-red-950/40 via-zinc-900 to-zinc-900" },
  { id: 2, title: "Glass Hour", series: "Reflections", size: "", gradient: "from-zinc-800 via-zinc-900 to-orange-950/20" },
  { id: 3, title: "Rust Line", series: "Urban Decay", size: "", gradient: "from-zinc-900 via-red-950/20 to-zinc-900" },
  { id: 4, title: "Pale Noon", series: "Portraits", size: "col-span-2", gradient: "from-zinc-800 via-zinc-900 to-zinc-800" },
  { id: 5, title: "Fog Light", series: "Atmosphere", size: "", gradient: "from-blue-950/20 via-zinc-900 to-zinc-900" },
  { id: 6, title: "The Wait", series: "Portraits", size: "", gradient: "from-zinc-900 via-purple-950/20 to-zinc-900" },
  { id: 7, title: "Overpass", series: "Urban Decay", size: "", gradient: "from-zinc-900 to-red-950/20" },
  { id: 8, title: "Static", series: "Abstract", size: "col-span-2", gradient: "from-zinc-800 via-zinc-900 to-blue-950/20" },
  { id: 9, title: "Mirror Self", series: "Portraits", size: "", gradient: "from-zinc-900 via-zinc-800 to-zinc-900" },
];

const seriesFilters = ["All", "Urban Decay", "Portraits", "Reflections", "Abstract", "Atmosphere"];

export default function ImagesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Breadcrumb */}
      <div className="mb-10 flex items-center gap-2 text-sm text-zinc-600">
        <Link href="/art" className="transition-colors hover:text-zinc-400">Art</Link>
        <span>/</span>
        <span className="text-zinc-400">Images</span>
      </div>

      {/* Header */}
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#c0392b]">
            Photography &amp; Visual Art
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">Image Gallery</h1>
          <p className="mt-3 text-zinc-500">
            {images.length} works across {seriesFilters.length - 1} series
          </p>
        </div>
      </div>

      {/* Series filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        {seriesFilters.map((s) => (
          <button
            key={s}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all ${
              s === "All"
                ? "border-[#c0392b] bg-[#c0392b]/10 text-[#c0392b]"
                : "border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 auto-rows-[180px]">
        {images.map((img) => (
          <div
            key={img.id}
            className={`group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 cursor-pointer transition-all duration-300 hover:border-[#c0392b]/40 hover:shadow-[0_4px_20px_rgba(192,57,43,0.12)] ${img.size}`}
          >
            {/* Gradient placeholder */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${img.gradient} transition-opacity group-hover:opacity-80`}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-xs uppercase tracking-widest text-[#c0392b]">{img.series}</p>
              <h3 className="text-sm font-semibold text-white">{img.title}</h3>
            </div>

            {/* Always-visible subtle watermark text in corners */}
            <div className="absolute bottom-3 right-3 text-xs text-zinc-700 font-mono opacity-50">
              {String(img.id).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>

      {/* Load more */}
      <div className="mt-12 flex justify-center">
        <button className="rounded-lg border border-zinc-700 px-8 py-3 text-sm text-zinc-400 transition-all hover:border-zinc-500 hover:text-white">
          Load more
        </button>
      </div>
    </div>
  );
}
