'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { SectionHeading } from '@/components/section-heading'
import { cloudinaryUrl } from '@/lib/cloudinary'
import content from '@/data/content.json'

const gallery = content.gallery

export function Gallery() {
  const gridRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      const node = gridRef.current
      if (!node) return

      const media = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (media.matches) return

      const cards = gsap.utils.toArray<HTMLElement>('[data-gallery-card]', node)

      cards.forEach((card) => {
        const photo = card.querySelector('[data-gallery-photo]')
        const caption = card.querySelector('[data-gallery-caption]')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        })

        tl.fromTo(
          card,
          { clipPath: 'inset(0% 0% 0% 100%)', autoAlpha: 0 },
          { clipPath: 'inset(0% 0% 0% 0%)', autoAlpha: 1, duration: 1, ease: 'power3.inOut' },
        )
          .fromTo(photo, { scale: 1.18 }, { scale: 1, duration: 1.3, ease: 'power2.out' }, '<')
          .fromTo(
            caption,
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' },
            '-=0.3',
          )
      })
    },
    { scope: gridRef, dependencies: [] },
  )

  return (
    <section className="relative bg-secondary/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          subtitle={gallery.subtitle}
        />

        <div ref={gridRef} className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.items.map((item) => (
            <figure
              key={item.id}
              data-gallery-card
              className="gsap-reveal group relative overflow-hidden bg-card shadow-sm ring-1 ring-border"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  data-gallery-photo
                  src={cloudinaryUrl(item.image, { width: 900 })}
                  alt={`${item.caption} — ${item.year}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              </div>
              <figcaption
                data-gallery-caption
                className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-primary-foreground"
              >
                <span className="font-serif text-2xl italic">{item.caption}</span>
                <span className="text-sm font-light uppercase tracking-[0.25em] text-accent">
                  {item.year}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
