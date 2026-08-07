import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import content from '@/data/content.json'

const invitation = content.invitation

export function Invitation() {
  return (
    <section className="relative bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={invitation.eyebrow} title={invitation.title} />

        <Reveal delay={120}>
          <p className="mt-10 text-center font-serif text-xl leading-relaxed text-foreground/90 text-pretty sm:text-2xl">
            {invitation.message}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-10 text-center font-serif text-2xl italic text-primary">
            {invitation.signature}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
