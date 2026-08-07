'use client'

import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'

type ParallaxProps = {
  image: string
  children?: ReactNode
  className?: string
  /** How strongly the image drifts. 0.15–0.4 feels natural. */
  strength?: number
  overlayClassName?: string
  id?: string
}

export function Parallax({
  image,
  children,
  className,
  strength = 0.28,
  overlayClassName,
  id,
}: ParallaxProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (media.matches || !sectionRef.current || !bgRef.current) return

      gsap.fromTo(
        bgRef.current,
        { yPercent: -strength * 50 },
        {
          yPercent: strength * 50,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        },
      )
    },
    { scope: sectionRef, dependencies: [strength] },
  )

  return (
    <div id={id} ref={sectionRef} className={cn('relative overflow-hidden', className)}>
      <div
        ref={bgRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[20%] h-[140%] bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div aria-hidden="true" className={cn('absolute inset-0', overlayClassName)} />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
