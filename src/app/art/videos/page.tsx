import Link from "next/link";

const videos = [
  {
    id: 1,
    title: "Drift",
    year: "2024",
    duration: "12:34",
    category: "Short Film",
    description:
      "Shot on expired 16mm film across three cities, Drift follows the emotional residue left in transit spaces — airports, train platforms, hotel corridors.",
    featured: true,
    youtubeId: "dQw4w9WgXcQ",
    tags: ["16mm", "Experimental", "Cities"],
  },
  {
    id: 2,
    title: "Between Structures",
    year: "2023",
    duration: "4:17",
    category: "Music Video",
    description:
      "A visual companion to the track 'Hollow Signal' — industrial locations reanimated through slow motion and long exposure.",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
    tags: ["Music Video", "Industrial", "Slow Motion"],
  },
  {
    id: 3,
    title: "Pressure Glass",
    year: "2023",
    duration: "7:52",
    category: "Experimental",
    description:
      "A study in compression. One location, one hour, sixteen layers of time-lapse stacked into a seven-minute meditation.",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
    tags: ["Time-lapse", "Abstract", "Single Location"],
  },
  {
    id: 4,
    title: "No Maps Here",
    year: "2022",
    duration: "18:03",
    category: "Documentary",
    description:
      "Following four artists through a month-long residency in an abandoned textile factory in the south of France.",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
    tags: ["Documentary", "Residency", "Artists"],
  },
];

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  if (video.featured) {
    return (
      <div className="col-span-full rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Embed placeholder */}
          <div className="relative aspect-video bg-zinc-950 flex items-center justify-center">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* Info */}
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#c0392b]/30 bg-[#c0392b]/10 px-3 py-1 text-xs font-medium text-[#c0392b]">
                Featured
              </span>
              <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-500">
                {video.category}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white">{video.title}</h2>
            <p className="mt-1 text-sm text-zinc-500">
              {video.year} &nbsp;&middot;&nbsp; {video.duration}
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">{video.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {video.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_4px_20px_rgba(139,92,246,0.1)]">
      <div className="relative aspect-video bg-zinc-950">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-zinc-500">{video.category}</span>
          <span className="text-xs text-zinc-600 font-mono">{video.duration}</span>
        </div>
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-purple-300">
          {video.title}
        </h3>
        <p className="mt-1 text-xs text-zinc-600">{video.year}</p>
        <p className="mt-2 text-sm text-zinc-500 leading-relaxed line-clamp-2">{video.description}</p>
      </div>
    </div>
  );
}

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Breadcrumb */}
      <div className="mb-10 flex items-center gap-2 text-sm text-zinc-600">
        <Link href="/art" className="transition-colors hover:text-zinc-400">Art</Link>
        <span>/</span>
        <span className="text-zinc-400">Videos</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-500">
          Film &amp; Motion
        </p>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Video Showcase</h1>
        <p className="mt-3 max-w-xl text-zinc-500">
          Short films, music videos, and experimental motion work. Each piece is built
          around a specific texture — of place, of time, of feeling.
        </p>
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
