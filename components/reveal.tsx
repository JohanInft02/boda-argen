'use client'

import { useRef, type ElementType, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: number
  /** Direction the element travels in from. Defaults to a gentle rise from below. */
  direction?: 'up' | 'left' | 'right'
}

const OFFSETS: Record<NonNullable<RevealProps['direction']>, { x?: number; y?: number }> = {
  up: { y: 32 },
  left: { x: -48 },
  right: { x: 48 },
}

export function Reveal({ children, className, as, delay = 0, direction = 'up' }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      const node = ref.current
      if (!node) return

      const media = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (media.matches) return

      gsap.fromTo(
        node,
        { autoAlpha: 0, scale: 0.98, ...OFFSETS[direction] },
        {
          autoAlpha: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1.1,
          delay: delay / 1000,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      )
    },
    { scope: ref, dependencies: [delay, direction] },
  )

  return (
    <Tag ref={ref} className={cn('gsap-reveal', className)}>
      {children}
    </Tag>
  )
}
