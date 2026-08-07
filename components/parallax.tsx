'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
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
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const node = sectionRef.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const viewportH = window.innerHeight
      // progress from -1 (below) to 1 (above) relative to viewport center
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / (viewportH + rect.height)
      setOffset(-progress * rect.height * strength)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [strength])

  return (
    <div id={id} ref={sectionRef} className={cn('relative overflow-hidden', className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-[20%] h-[140%] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translate3d(0, ${offset}px, 0)`,
        }}
      />
      <div aria-hidden="true" className={cn('absolute inset-0', overlayClassName)} />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
