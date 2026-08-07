'use client'

import { useState, type FormEvent } from 'react'
import { Heart, Check } from 'lucide-react'
import { Parallax } from '@/components/parallax'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { cloudinaryUrl } from '@/lib/cloudinary'
import content from '@/data/content.json'

const rsvp = content.rsvp
const form = rsvp.form

export function Rsvp() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Static site: no backend. Show a confirmation state locally.
    setSubmitted(true)
  }

  return (
    <Parallax
      id="rsvp"
      image={cloudinaryUrl(rsvp.image, { width: 1600 })}
      strength={0.22}
      className="w-full py-28 sm:py-36"
      overlayClassName="bg-primary/80"
    >
      <div className="mx-auto w-full max-w-xl px-6">
        <SectionHeading eyebrow={rsvp.eyebrow} title={rsvp.title} subtitle={rsvp.subtitle} light />

        <div className="mt-12 flex flex-col items-center">
          {submitted ? (
            <div className="w-full border border-accent/40 bg-primary-foreground/10 p-10 text-center backdrop-blur-sm">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-3xl text-primary-foreground">
                {form.successTitle}
              </h3>
              <p className="mt-3 text-primary-foreground/85 leading-relaxed">
                {form.successMessage}
              </p>
            </div>
          ) : open ? (
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-5 border border-accent/30 bg-primary-foreground/10 p-8 text-left backdrop-blur-sm"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="rsvp-name" className="text-xs uppercase tracking-[0.2em] text-accent">
                  {form.name}
                </label>
                <input
                  id="rsvp-name"
                  name="name"
                  type="text"
                  required
                  className="border border-primary-foreground/25 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 outline-none focus:border-accent"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="rsvp-guests" className="text-xs uppercase tracking-[0.2em] text-accent">
                  {form.guests}
                </label>
                <input
                  id="rsvp-guests"
                  name="guests"
                  type="number"
                  min={1}
                  max={10}
                  defaultValue={1}
                  required
                  className="border border-primary-foreground/25 bg-transparent px-4 py-3 text-primary-foreground outline-none focus:border-accent"
                />
              </div>

              <fieldset className="flex flex-col gap-3">
                <legend className="text-xs uppercase tracking-[0.2em] text-accent">
                  {form.attendance}
                </legend>
                <label className="flex items-center gap-3 text-primary-foreground/90">
                  <input type="radio" name="attendance" value="yes" defaultChecked className="accent-[var(--accent)]" />
                  {form.attendanceYes}
                </label>
                <label className="flex items-center gap-3 text-primary-foreground/90">
                  <input type="radio" name="attendance" value="no" className="accent-[var(--accent)]" />
                  {form.attendanceNo}
                </label>
              </fieldset>

              <div className="flex flex-col gap-2">
                <label htmlFor="rsvp-message" className="text-xs uppercase tracking-[0.2em] text-accent">
                  {form.message}
                </label>
                <textarea
                  id="rsvp-message"
                  name="message"
                  rows={3}
                  className="resize-none border border-primary-foreground/25 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 outline-none focus:border-accent"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {form.submit}
              </Button>
            </form>
          ) : (
            <Button
              type="button"
              onClick={() => setOpen(true)}
              className="group gap-2 bg-accent px-10 py-6 text-sm uppercase tracking-[0.25em] text-accent-foreground hover:bg-accent/90"
            >
              <Heart className="h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true" />
              {rsvp.button}
            </Button>
          )}
        </div>
      </div>
    </Parallax>
  )
}
