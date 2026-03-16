import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { siteCopy } from '../content/siteCopy'
import { Reveal } from '../components/motion/Reveal'
import { Card, CardGlow } from '../components/ui/Card'
import { LinkButton } from '../components/ui/LinkButton'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'

export function FightBondPage() {
  return (
    <div>
      <Reveal>
        <PageHeader
          eyebrow="Field manual"
          title={siteCopy.fightBond.heroTitle}
          subtitle={siteCopy.fightBond.heroSubtitle}
          actions={
            <>
              <LinkButton to="/bond-watch" variant="outline">
                Track elections early
              </LinkButton>
              <LinkButton to="/request-help" variant="red">
                Request help <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </>
          }
        />
      </Reveal>

      <Section title="The Steps" kicker="Do them in order">
        <div className="grid gap-6">
          {siteCopy.fightBond.steps.map((step, idx) => (
            <Reveal key={step.title} delay={Math.min(idx * 0.06, 0.24)}>
              <Card>
                <CardGlow />
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold tracking-wide">
                      {step.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 rounded-full border border-patriot-border bg-patriot-bgSoft px-3 py-1 text-xs font-semibold text-patriot-muted">
                      Step {idx + 1} / {siteCopy.fightBond.steps.length}
                    </div>
                  </div>

                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-patriot-text sm:text-base">
                    {step.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>

                  <ul className="mt-6 grid gap-3 text-sm text-patriot-text sm:text-base">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-patriot-blue" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={siteCopy.fightBond.requestHelp.title} kicker="When you need backup">
        <Reveal>
          <Card className="p-6">
            <CardGlow />
            <div className="relative">
                <div className="space-y-3 text-sm leading-relaxed text-patriot-text sm:text-base">
                {siteCopy.fightBond.requestHelp.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton to="/request-help" variant="red">
                  Open Request Help form <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton to="/bond-watch#submit" variant="outline">
                  Report a bond election
                </LinkButton>
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>
    </div>
  )
}

