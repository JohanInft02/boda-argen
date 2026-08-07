import { Hero } from '@/components/hero'
import { Invitation } from '@/components/invitation'
import { Countdown } from '@/components/countdown'
import { Gallery } from '@/components/gallery'
import { Locations } from '@/components/locations'
import { Details } from '@/components/details'
import { Rsvp } from '@/components/rsvp'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <Invitation />
      <Countdown />
      <Gallery />
      <Locations />
      <Details />
      <Rsvp />
      <SiteFooter />
    </main>
  )
}
