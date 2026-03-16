import { ArrowRight, ShieldCheck, Target, Zap } from 'lucide-react'
import { siteCopy } from '../content/siteCopy'
import { Reveal } from '../components/motion/Reveal'
import { Card, CardGlow } from '../components/ui/Card'
import { LinkButton } from '../components/ui/LinkButton'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'

export function HomePage() {
  return (
    <div>
      <Reveal>
        <PageHeader
          eyebrow="Texas bond election defense"
          title={siteCopy.home.heroTitle}
          subtitle={siteCopy.home.heroSubtitle}
          actions={
            <>
              <LinkButton to="/bond-watch#submit" variant="primary">
                Report a bond election <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton to="/how-to-fight" variant="outline">
                Read the playbook
              </LinkButton>
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-patriot-border bg-patriot-bg px-4 text-sm font-semibold tracking-wide text-patriot-navy transition hover:border-patriot-blue/55 hover:bg-patriot-bgSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/20 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                href="https://patriotsinaction.com/"
                target="_blank"
                rel="noreferrer"
              >
                Join Patriots in Action <ArrowRight className="h-4 w-4" />
              </a>
            </>
          }
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Reveal delay={0.05}>
          <Card className="p-5">
            <CardGlow />
            <div className="relative">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-patriot-blue" />
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-patriot-red">
                  Targeted
                </div>
              </div>
              <div className="mt-3 text-base font-semibold text-patriot-navy">
                Voter contact that reaches taxpayers—fast.
              </div>
              <div className="mt-2 text-sm leading-relaxed text-patriot-text">
                Text + email campaigns built around districts, turnout reality, and the math.
              </div>
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="p-5">
            <CardGlow />
            <div className="relative">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-patriot-blue" />
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-patriot-red">
                  Prepared
                </div>
              </div>
              <div className="mt-3 text-base font-semibold text-patriot-navy">
                Infrastructure beats last-minute panic.
              </div>
              <div className="mt-2 text-sm leading-relaxed text-patriot-text">
                Elections are won by whoever shows up. We make sure the right people show up.
              </div>
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.15}>
          <Card className="p-5">
            <CardGlow />
            <div className="relative">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-patriot-blue" />
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-patriot-red">
                  Replicable
                </div>
              </div>
              <div className="mt-3 text-base font-semibold text-patriot-navy">
                Texas goes first. Others follow.
              </div>
              <div className="mt-2 text-sm leading-relaxed text-patriot-text">
                Build the model here—then scale it.
              </div>
            </div>
          </Card>
        </Reveal>
      </div>

      <Section title="The Problem" kicker="Why bonds keep passing">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <Card>
              <CardGlow />
              <div className="relative space-y-4 text-sm leading-relaxed text-patriot-text sm:text-base">
                {siteCopy.home.problem.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="p-6">
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-patriot-red">
                Reality check
              </div>
              <div className="mt-3 font-display text-2xl font-bold tracking-wide">
                Bonds pass in the dark.
              </div>
              <div className="mt-3 text-sm leading-relaxed text-patriot-text">
                Vendors fund “yes.” Citizens find out late. Turnout decides everything.
              </div>
              <div className="mt-6">
                <LinkButton to="/bond-watch" variant="outline">
                  Track elections early <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section title="What We Do" kicker="The mission">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card>
              <CardGlow />
              <div className="relative">
                <p className="text-sm leading-relaxed text-patriot-text sm:text-base">
                  {siteCopy.home.whatWeDo.lead}
                </p>
                <ul className="mt-6 grid gap-3 text-sm text-patriot-text sm:text-base">
                  {siteCopy.home.whatWeDo.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-patriot-blue" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="p-6">
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-patriot-red">
                The edge
              </div>
              <div className="mt-3 font-display text-2xl font-bold tracking-wide">
                Numbers. Targeting. Turnout.
              </div>
              <div className="mt-3 text-sm leading-relaxed text-patriot-text">
                The most powerful argument against a bond is usually math. Let the numbers do the
                talking.
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton to="/how-to-fight" variant="outline">
                  Step-by-step guide
                </LinkButton>
                <LinkButton to="/request-help" variant="red">
                  Request help <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section title="Why Texas" kicker="Why we start here">
        <Reveal>
          <Card>
            <CardGlow />
            <div className="relative space-y-4 text-sm leading-relaxed text-patriot-text sm:text-base">
              {siteCopy.home.whyTexas.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section title="Get Involved" kicker="Three ways to join">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <Card className="p-6">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-patriot-red">
                Bond Watch
              </div>
              <div className="mt-3 font-display text-2xl font-bold tracking-wide">
                Report an election.
              </div>
              <div className="mt-3 text-sm leading-relaxed text-patriot-text">
                Be the first line of defense in your county.
              </div>
              <div className="mt-6">
                <LinkButton to="/bond-watch#submit" variant="primary">
                  Submit a bond <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="p-6">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-patriot-red">
                Community
              </div>
              <div className="mt-3 font-display text-2xl font-bold tracking-wide">
                Coordinate locally.
              </div>
              <div className="mt-3 text-sm leading-relaxed text-patriot-text">
                Join Patriots in Action to stay informed and connect with others.
              </div>
              <div className="mt-6">
                <a
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-patriot-border bg-patriot-bg px-4 text-sm font-semibold tracking-wide text-patriot-navy transition hover:border-patriot-blue/55 hover:bg-patriot-bgSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/20 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                  href="https://patriotsinaction.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to PatriotsInAction.com <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.16}>
            <Card className="p-6">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-patriot-red">
                Support
              </div>
              <div className="mt-3 font-display text-2xl font-bold tracking-wide">
                Fund the mission.
              </div>
              <div className="mt-3 text-sm leading-relaxed text-patriot-text">
                Every dollar goes toward voter contact, data, and campaign infrastructure.
              </div>
              <div className="mt-6">
                <a
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-patriot-red px-4 text-sm font-semibold tracking-wide text-patriot-white shadow-glowRed transition hover:-translate-y-[1px] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                  href="https://patriotsforaction.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PatriotsforAction.org <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </div>
  )
}

