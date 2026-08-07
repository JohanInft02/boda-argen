'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Parallax } from '@/components/parallax'
import { cloudinaryUrl } from '@/lib/cloudinary'
import content from '@/data/content.json'

const hero = content.hero

export function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      const node = rootRef.current
      if (!node) return

      const media = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (media.matches) return

      gsap
        .timeline({ delay: 0.2 })
        .fromTo(
          node.querySelectorAll('[data-hero-eyebrow]'),
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        )
        .fromTo(
          node.querySelectorAll('[data-hero-divider]'),
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
          '-=0.3',
        )
        .fromTo(
          node.querySelectorAll('[data-hero-names]'),
          { autoAlpha: 0, y: 34 },
          { autoAlpha: 1, y: 0, duration: 1.1, ease: 'power3.out' },
          '-=0.25',
        )
        .fromTo(
          node.querySelectorAll('[data-hero-tagline]'),
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.6',
        )
        .fromTo(
          node.querySelectorAll('[data-hero-meta]'),
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out' },
          '-=0.5',
        )

      gsap.to(node.querySelector('[data-hero-scrollhint]'), {
        autoAlpha: 0,
        y: 14,
        ease: 'none',
        scrollTrigger: {
          trigger: node,
          start: 'top top',
          end: '35% top',
          scrub: true,
        },
      })
    },
    { scope: rootRef },
  )

  return (
    <Parallax
      image={cloudinaryUrl(hero.image, { width: 1920 })}
      strength={0.35}
      className="h-[100svh] min-h-[640px] w-full"
      overlayClassName="bg-gradient-to-b from-primary/80 from-10% via-primary/72 via-72% to-background/95"
    >
      <div ref={rootRef} className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-primary-foreground">
        <span
          data-hero-eyebrow
          className="gsap-reveal text-shadow-soft text-xs font-light uppercase tracking-[0.5em] text-primary-foreground/90"
        >
          {hero.eyebrow}
        </span>

        <div
          data-hero-divider
          className="my-6 flex origin-center items-center gap-4"
          style={{ transform: 'scaleX(0)' }}
          aria-hidden="true"
        >
          <span className="h-px w-14 bg-accent/80" />
          <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
          <span className="h-px w-14 bg-accent/80" />
        </div>

        <h1
          data-hero-names
          className="gsap-reveal text-shadow-strong font-serif text-6xl font-medium leading-none text-balance sm:text-7xl md:text-8xl"
        >
          {hero.names}
        </h1>

        <p
          data-hero-tagline
          className="gsap-reveal text-shadow-soft mt-6 max-w-xl font-serif text-xl italic text-primary-foreground text-pretty sm:text-2xl"
        >
          {hero.tagline}
        </p>

        <div
          data-hero-meta
          className="gsap-reveal mt-10 flex flex-col items-center gap-2 text-sm font-light uppercase tracking-[0.28em]"
        >
          <span className="text-shadow-soft text-primary-foreground">{hero.date}</span>
          <span className="text-shadow-strong font-normal text-accent-bright">{hero.location}</span>
        </div>
      </div>

      {/* Cae sobre la franja marfil del degradado, por eso usa tinta oscura */}
      <div
        data-hero-scrollhint
        className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="max-w-[15rem] text-center text-[11px] font-normal uppercase leading-relaxed tracking-[0.3em] text-foreground/75 text-balance">
          {hero.scrollHint}
        </span>
        <span className="h-10 w-px animate-pulse bg-primary/50" aria-hidden="true" />
      </div>
    </Parallax>
  )
}
