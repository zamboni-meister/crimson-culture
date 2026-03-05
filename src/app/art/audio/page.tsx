"use client";

import Link from "next/link";
import { useState } from "react";

const releases = [
  {
    id: 1,
    title: "Hollow Signal",
    year: "2024",
    type: "EP",
    trackCount: 7,
    duration: "38:14",
    description:
      "Seven tracks built from synthesizers, bowed metal, and field recordings captured across industrial sites in Northern England. Ambient, sparse, and unsettling.",
    tracks: [
      { num: 1, title: "Entry Point", duration: "4:22" },
      { num: 2, title: "Pipe Resonance", duration: "6:01" },
      { num: 3, title: "Oxidized", duration: "5:44" },
      { num: 4, title: "Hollow Signal", duration: "7:30" },
      { num: 5, title: "Thermal Drift", duration: "4:55" },
      { num: 6, title: "Last Frequency", duration: "5:12" },
      { num: 7, title: "Exit", duration: "4:30" },
    ],
    accent: "border-blue-800/30 bg-blue-950/10",
    badge: "bg-blue-900/20 text-blue-400 border-blue-800/30",
  },
  {
    id: 2,
    title: "Residue",
    year: "2023",
    type: "Album",
    trackCount: 10,
    duration: "52:08",
    description:
      "A full-length record exploring memory and disintegration. Warm analog textures sit against cold digital decay.",
    tracks: [
      { num: 1, title: "Residue I", duration: "4:55" },
      { num: 2, title: "The Slow Return", duration: "5:20" },
      { num: 3, title: "Amber Room", duration: "4:40" },
      { num: 4, title: "Reel-to-Reel", duration: "6:10" },
      { num: 5, title: "Interlude (Rain)", duration: "2:11" },
      { num: 6, title: "Static Memory", duration: "5:48" },
      { num: 7, title: "Warped", duration: "4:30" },
      { num: 8, title: "Residue II", duration: "5:55" },
      { num: 9, title: "Bloom", duration: "6:29" },
      { num: 10, title: "End Grain", duration: "7:10" },
    ],
    accent: "border-zinc-700/30 bg-zinc-900",
    badge: "bg-zinc-800/50 text-zinc-400 border-zinc-700",
  },
  {
    id: 3,
    title: "Fieldwork",
    year: "2022",
    type: "Single",
    trackCount: 3,
    duration: "18:44",
    description:
      "Three pieces composed entirely from unedited field recordings. No synthesis, no processing — just space and time.",
    tracks: [
      { num: 1, title: "Fieldwork I (Coast)", duration: "7:02" },
      { num: 2, title: "Fieldwork II (Forest)", duration: "5:30" },
      { num: 3, title: "Fieldwork III (City, 3am)", duration: "6:12" },
    ],
    accent: "border-green-800/20 bg-green-950/5",
    badge: "bg-green-900/20 text-green-500 border-green-800/30",
  },
];

function PlayIcon({ playing }: { playing: boolean }) {
  if (playing) {
    return (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ReleaseCard({ release }: { release: (typeof releases)[number] }) {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const visibleTracks = expanded ? release.tracks : release.tracks.slice(0, 5);

  return (
    <div className={`rounded-2xl border ${release.accent} overflow-hidden`}>
      <div className="grid gap-0 md:grid-cols-[280px_1fr]">
        {/* Album art placeholder */}
        <div className="relative flex aspect-square items-center justify-center bg-zinc-950 md:aspect-auto">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-zinc-700 bg-zinc-900">
              <svg className="h-8 w-8 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3a9 9 0 100 18A9 9 0 0012 3zm0 16a7 7 0 110-14 7 7 0 010 14zm0-10a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-zinc-300">{release.title}</p>
              <p className="text-xs text-zinc-600">{release.year}</p>
            </div>
          </div>
        </div>

        {/* Track list */}
        <div className="flex flex-col p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white">{release.title}</h2>
                <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${release.badge}`}>
                  {release.type}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-600">
                {release.trackCount} tracks &nbsp;&middot;&nbsp; {release.duration} &nbsp;&middot;&nbsp; {release.year}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{release.description}</p>
            </div>
          </div>

          {/* Tracks */}
          <div className="flex-1 space-y-1">
            {visibleTracks.map((track) => (
              <button
                key={track.num}
                onClick={() =>
                  setActiveTrack(activeTrack === track.num ? null : track.num)
                }
                className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all ${
                  activeTrack === track.num
                    ? "bg-[#c0392b]/15 text-white"
                    : "hover:bg-zinc-800/60 text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                  {activeTrack === track.num ? (
                    <PlayIcon playing={true} />
                  ) : (
                    <span className="text-xs font-mono text-zinc-600 group-hover:hidden">
                      {String(track.num).padStart(2, "0")}
                    </span>
                  )}
                  {activeTrack !== track.num && (
                    <PlayIcon playing={false} />
                  )}
                </span>
                <span className="flex-1 text-sm font-medium">{track.title}</span>
                <span className="text-xs font-mono text-zinc-600">{track.duration}</span>
              </button>
            ))}
          </div>

          {release.tracks.length > 5 && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-3 text-xs text-zinc-600 transition-colors hover:text-zinc-400 text-left"
            >
              {expanded
                ? "Show less"
                : `+ ${release.tracks.length - 5} more tracks`}
            </button>
          )}

          {/* Mini waveform visual */}
          {activeTrack !== null && (
            <div className="mt-4 flex items-center gap-1 h-8">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-[#c0392b]"
                  style={{
                    height: `${20 + Math.sin((i / 32) * Math.PI * 4) * 50 + Math.random() * 30}%`,
                    opacity: 0.6 + Math.random() * 0.4,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))}
              <span className="ml-3 text-xs text-zinc-600">Now playing</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AudioPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Breadcrumb */}
      <div className="mb-10 flex items-center gap-2 text-sm text-zinc-600">
        <Link href="/art" className="transition-colors hover:text-zinc-400">Art</Link>
        <span>/</span>
        <span className="text-zinc-400">Audio</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
          Music &amp; Sound Design
        </p>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Audio</h1>
        <p className="mt-3 max-w-xl text-zinc-500">
          Three releases spanning ambient, experimental, and field recording composition.
          Click any track to preview.
        </p>
      </div>

      {/* Releases */}
      <div className="flex flex-col gap-8">
        {releases.map((release) => (
          <ReleaseCard key={release.id} release={release} />
        ))}
      </div>

      {/* Streaming links */}
      <div className="mt-14 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <p className="mb-4 text-xs uppercase tracking-widest text-zinc-600">Available on</p>
        <div className="flex flex-wrap gap-3">
          {["Bandcamp", "Spotify", "Apple Music", "SoundCloud"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-400 transition-all hover:border-zinc-500 hover:text-white"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
