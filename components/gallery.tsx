import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cloudinaryUrl } from '@/lib/cloudinary'
import content from '@/data/content.json'

const gallery = content.gallery

export function Gallery() {
  return (
    <section className="relative bg-secondary/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={gallery.eyebrow}
            title={gallery.title}
            subtitle={gallery.subtitle}
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.items.map((item, index) => (
            <Reveal key={item.year} delay={(index % 3) * 120} className="group">
              <figure className="relative overflow-hidden bg-card shadow-sm ring-1 ring-border">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={cloudinaryUrl(item.image, { width: 900 })}
                    alt={`${item.caption} — ${item.year}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-primary-foreground">
                  <span className="font-serif text-2xl italic">{item.caption}</span>
                  <span className="text-sm font-light uppercase tracking-[0.25em] text-accent">
                    {item.year}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
