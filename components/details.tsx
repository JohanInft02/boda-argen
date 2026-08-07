import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import content from '@/data/content.json'

const details = content.details

export function Details() {
  return (
    <section className="relative bg-secondary/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading eyebrow={details.eyebrow} title={details.title} />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {details.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 120}>
              <div className="flex h-full flex-col items-center border border-border bg-card px-6 py-10 text-center">
                <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  {item.label}
                </h3>
                <span className="my-4 h-px w-8 bg-accent" aria-hidden="true" />
                <p className="font-serif text-lg leading-relaxed text-foreground/90 text-pretty">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
