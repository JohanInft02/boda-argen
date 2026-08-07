'use client'

import { Parallax } from '@/components/parallax'
import { cloudinaryUrl } from '@/lib/cloudinary'
import content from '@/data/content.json'

const hero = content.hero

export function Hero() {
  return (
    <Parallax
      image={cloudinaryUrl(hero.image, { width: 1920 })}
      strength={0.35}
      className="h-[100svh] min-h-[640px] w-full"
      overlayClassName="bg-gradient-to-b from-primary/80 from-10% via-primary/72 via-72% to-background/95"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-primary-foreground">
        <span className="text-shadow-soft text-xs font-light uppercase tracking-[0.5em] text-primary-foreground/90">
          {hero.eyebrow}
        </span>

        <div className="my-6 flex items-center gap-4" aria-hidden="true">
          <span className="h-px w-14 bg-accent/80" />
          <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
          <span className="h-px w-14 bg-accent/80" />
        </div>

        <h1 className="text-shadow-strong font-serif text-6xl font-medium leading-none text-balance sm:text-7xl md:text-8xl">
          {hero.names}
        </h1>

        <p className="text-shadow-soft mt-6 max-w-xl font-serif text-xl italic text-primary-foreground text-pretty sm:text-2xl">
          {hero.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center gap-2 text-sm font-light uppercase tracking-[0.28em]">
          <span className="text-shadow-soft text-primary-foreground">{hero.date}</span>
          <span className="text-shadow-strong font-normal text-accent-bright">{hero.location}</span>
        </div>
      </div>

      {/* Cae sobre la franja marfil del degradado, por eso usa tinta oscura */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="max-w-[15rem] text-center text-[11px] font-normal uppercase leading-relaxed tracking-[0.3em] text-foreground/75 text-balance">
          {hero.scrollHint}
        </span>
        <span className="h-10 w-px animate-pulse bg-primary/50" aria-hidden="true" />
      </div>
    </Parallax>
  )
}
