import content from '@/data/content.json'

const footer = content.footer

export function SiteFooter() {
  return (
    <footer className="bg-primary px-6 py-16 text-center text-primary-foreground">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <p className="font-serif text-4xl italic sm:text-5xl">{footer.names}</p>

        <div className="my-6 flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-10 bg-accent" />
          <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
          <span className="h-px w-10 bg-accent" />
        </div>

        <p className="max-w-md leading-relaxed text-primary-foreground/80">{footer.message}</p>
        <p className="mt-6 text-sm font-light uppercase tracking-[0.4em] text-accent">
          {footer.date}
        </p>
      </div>
    </footer>
  )
}
