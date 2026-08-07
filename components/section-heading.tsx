import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
  light?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, className, light }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      <span
        className={cn(
          'text-xs font-light uppercase tracking-[0.4em]',
          light ? 'text-accent' : 'text-primary',
        )}
      >
        {eyebrow}
      </span>

      <div className="my-5 flex items-center gap-3" aria-hidden="true">
        <span className="h-px w-10 bg-accent" />
        <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
        <span className="h-px w-10 bg-accent" />
      </div>

      <h2
        className={cn(
          'font-serif text-4xl font-medium leading-tight text-balance sm:text-5xl',
          light ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={cn(
            'mt-4 max-w-xl text-base leading-relaxed text-pretty',
            light ? 'text-primary-foreground/85' : 'text-muted-foreground',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
