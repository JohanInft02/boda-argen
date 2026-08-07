'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
  light?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, className, light }: SectionHeadingProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const lineRef = useRef<HTMLSpanElement | null>(null)

  useGSAP(
    () => {
      const node = rootRef.current
      if (!node) return

      const media = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (media.matches) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: node,
          start: 'top 82%',
          toggleActions: 'play none none none',
          once: true,
        },
      })

      tl.fromTo(
        node.querySelectorAll('[data-heading-eyebrow]'),
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, ease: 'power2.inOut' },
          '-=0.25',
        )
        .fromTo(
          node.querySelectorAll('[data-heading-title]'),
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.4',
        )
        .fromTo(
          node.querySelectorAll('[data-heading-subtitle]'),
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out' },
          '-=0.45',
        )
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className={cn('flex flex-col items-center text-center', className)}>
      <span
        data-heading-eyebrow
        className={cn(
          'gsap-reveal text-xs font-light uppercase tracking-[0.4em]',
          light ? 'text-accent-bright' : 'text-primary',
        )}
      >
        {eyebrow}
      </span>

      <div className="my-5 flex items-center gap-3" aria-hidden="true">
        <span
          ref={lineRef}
          className="flex origin-center items-center gap-3"
          style={{ transform: 'scaleX(0)' }}
        >
          <span className="h-px w-10 bg-accent" />
          <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
          <span className="h-px w-10 bg-accent" />
        </span>
      </div>

      <h2
        data-heading-title
        className={cn(
          'gsap-reveal font-serif text-4xl font-medium leading-tight text-balance sm:text-5xl',
          light ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          data-heading-subtitle
          className={cn(
            'gsap-reveal mt-4 max-w-xl text-base leading-relaxed text-pretty',
            light ? 'text-primary-foreground/85' : 'text-muted-foreground',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
