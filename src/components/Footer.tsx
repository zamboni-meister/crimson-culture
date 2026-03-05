import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              Crimson<span className="text-[#c0392b]">.</span>
            </Link>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              A personal creative showcase. Visual art, sound, and motion — all in one place.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/art", label: "Art Hub" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Art sub-pages */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Art
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/art/images", label: "Image Gallery" },
                { href: "/art/videos", label: "Video Showcase" },
                { href: "/art/audio", label: "Audio" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Crimson Culture. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Instagram", "Twitter", "Bandcamp"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-xs text-zinc-600 transition-colors hover:text-[#c0392b]"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
