import Image from 'next/image'
import { MapPin, Clock, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cloudinaryUrl } from '@/lib/cloudinary'
import content from '@/data/content.json'

type Place = typeof content.church

function LocationCard({ place }: { place: Place }) {
  return (
    <article className="flex h-full flex-col overflow-hidden bg-card shadow-sm ring-1 ring-border">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={cloudinaryUrl(place.image, { width: 1000 })}
          alt={place.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-[11px] font-light uppercase tracking-[0.25em] text-primary-foreground">
          {place.eyebrow}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-serif text-3xl font-medium text-foreground">{place.title}</h3>
        <p className="mt-2 font-serif text-xl italic text-primary">{place.name}</p>

        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span className="leading-relaxed">{place.address}</span>
          </li>
          <li className="flex items-center gap-3">
            <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{place.time}</span>
          </li>
        </ul>

        <p className="mt-5 text-sm leading-relaxed text-foreground/80">{place.note}</p>

        <a
          href={place.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-7 inline-flex items-center gap-2 self-start border-b border-primary/40 pb-1 text-sm font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:border-accent hover:text-accent"
        >
          {place.mapLabel}
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  )
}

export function Locations() {
  return (
    <section id="lugares" className="relative bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <Reveal direction="left">
          <LocationCard place={content.church} />
        </Reveal>
        <Reveal direction="right" delay={140}>
          <LocationCard place={content.venue} />
        </Reveal>
      </div>
    </section>
  )
}
