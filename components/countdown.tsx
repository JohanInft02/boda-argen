'use client'

import { useEffect, useState } from 'react'
import { Parallax } from '@/components/parallax'
import { SectionHeading } from '@/components/section-heading'
import { cloudinaryUrl } from '@/lib/cloudinary'
import content from '@/data/content.json'

const countdown = content.countdown

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export function Countdown() {
  const target = new Date(countdown.targetDate).getTime()
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft(target))
    const id = window.setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => window.clearInterval(id)
  }, [target])

  const units = [
    { label: countdown.labels.days, value: time?.days },
    { label: countdown.labels.hours, value: time?.hours },
    { label: countdown.labels.minutes, value: time?.minutes },
    { label: countdown.labels.seconds, value: time?.seconds },
  ]

  return (
    <Parallax
      image={cloudinaryUrl(countdown.image, { width: 1600 })}
      strength={0.25}
      className="w-full py-28 sm:py-36"
      overlayClassName="bg-primary/45"
    >
      <div className="mx-auto w-full max-w-3xl px-6">
        <SectionHeading eyebrow={countdown.eyebrow} title={countdown.title} light />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center border border-accent/40 bg-primary-foreground/5 px-4 py-6 backdrop-blur-sm"
            >
              <span className="font-serif text-5xl font-medium tabular-nums text-primary-foreground sm:text-6xl">
                {unit.value === undefined ? '—' : String(unit.value).padStart(2, '0')}
              </span>
              <span className="mt-2 text-[11px] font-light uppercase tracking-[0.28em] text-accent">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Parallax>
  )
}
