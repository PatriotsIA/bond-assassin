import { ArrowRight, HeartHandshake } from 'lucide-react'
import { siteCopy } from '../content/siteCopy'
import { Reveal } from '../components/motion/Reveal'
import { Card, CardGlow } from '../components/ui/Card'
import { LinkButton } from '../components/ui/LinkButton'
import { CONTACT_EMAIL } from '../config/contact'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'

export function AboutSupportPage() {
  return (
    <div>
      <Reveal>
        <PageHeader
          eyebrow="Who we are"
          title={siteCopy.aboutSupport.heroTitle}
          subtitle={siteCopy.aboutSupport.heroSubtitle}
          actions={
            <>
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-patriot-red px-4 text-sm font-semibold tracking-wide text-patriot-white shadow-glowRed transition hover:-translate-y-[1px] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                href="https://patriotsforaction.org/"
                target="_blank"
                rel="noreferrer"
              >
                Support the mission <HeartHandshake className="h-4 w-4" />
              </a>
              <LinkButton to="/bond-watch#submit" variant="outline">
                Report a bond election <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </>
          }
        />
      </Reveal>

      <Section title="Our Story" kicker="How it started">
        <Reveal>
          <Card>
            <CardGlow />
            <div className="relative space-y-4 text-sm leading-relaxed text-patriot-text sm:text-base">
              {siteCopy.aboutSupport.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section title="Our Mission" kicker="What we believe">
        <Reveal>
          <Card>
            <CardGlow />
            <div className="relative space-y-4 text-sm leading-relaxed text-patriot-text sm:text-base">
              {siteCopy.aboutSupport.mission.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section title="Our Model" kicker="Build it. Prove it. Scale it.">
        <Reveal>
          <Card>
            <CardGlow />
            <div className="relative space-y-4 text-sm leading-relaxed text-patriot-text sm:text-base">
              {siteCopy.aboutSupport.model.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section title="Support the Mission" kicker="Make opposition competitive">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <Card>
              <CardGlow />
              <div className="relative space-y-4 text-sm leading-relaxed text-patriot-text sm:text-base">
                {siteCopy.aboutSupport.support.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <ul className="mt-6 grid gap-3">
                  {siteCopy.aboutSupport.supportBullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-patriot-blue" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="p-6">
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-patriot-red">
                Quick links
              </div>
              <div className="mt-3 grid gap-3">
                <a
                  className="inline-flex h-11 items-center justify-between gap-2 rounded-lg border border-patriot-border bg-patriot-bg px-4 text-sm font-semibold tracking-wide text-patriot-navy transition hover:border-patriot-blue/55 hover:bg-patriot-bgSoft"
                  href="https://patriotsforaction.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PatriotsforAction.org <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex h-11 items-center justify-between gap-2 rounded-lg border border-patriot-border bg-patriot-bg px-4 text-sm font-semibold tracking-wide text-patriot-navy transition hover:border-patriot-blue/55 hover:bg-patriot-bgSoft"
                  href="https://patriotsinaction.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PatriotsInAction.com <ArrowRight className="h-4 w-4" />
                </a>
                <LinkButton to="/request-help" variant="red">
                  Request help <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
              <div className="mt-6 rounded-xl border border-patriot-border bg-patriot-bgSoft p-4">
                <div className="text-xs font-bold uppercase tracking-[0.28em] text-patriot-red">
                  Contact
                </div>
                <div className="mt-3 grid gap-2 text-sm text-patriot-text">
                  <a className="hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                  <a className="hover:underline" href="tel:+18066221334">
                    806-622-1334
                  </a>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Reveal>
        <div className="mt-14 rounded-3xl border border-patriot-border bg-patriot-bg p-8 text-center shadow-card">
          <div className="text-sm font-bold uppercase tracking-[0.28em] text-patriot-red">
            Closing
          </div>
          <div className="mt-4 font-display text-3xl font-bold tracking-wide text-patriot-navy sm:text-4xl">
            {siteCopy.aboutSupport.closing[0]}
            <br />
            <span className="bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-navy bg-clip-text text-transparent">
              {siteCopy.aboutSupport.closing[1]}
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

