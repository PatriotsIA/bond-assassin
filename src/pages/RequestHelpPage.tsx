import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { siteCopy } from '../content/siteCopy'
import { Reveal } from '../components/motion/Reveal'
import { Card, CardGlow } from '../components/ui/Card'
import { LinkButton } from '../components/ui/LinkButton'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { Field } from '../components/ui/Field'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Select } from '../components/ui/Select'
import { Button } from '../components/ui/Button'
import { submitPlatformForm } from '../lib/platformApi'
import { EnSpotSmsOptInLabel } from '../components/compliance/EnSpotSmsOptInLabel'

type RequestHelpForm = {
  name: string
  county: string
  entity: string
  amount: string
  electionDate: string
  status: string
  need: string
  phone: string
  email: string
  connected: 'Yes' | 'No' | 'Not sure' | ''
  agreePrivacyPolicy: boolean
  smsConsent: boolean
}

export function RequestHelpPage() {
  const empty: RequestHelpForm = useMemo(
    () => ({
      name: '',
      county: '',
      entity: '',
      amount: '',
      electionDate: '',
      status: '',
      need: '',
      phone: '',
      email: '',
      connected: '',
      agreePrivacyPolicy: false,
      smsConsent: false,
    }),
    [],
  )

  const [form, setForm] = useState<RequestHelpForm>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof RequestHelpForm, string>>>({})
  const [submitting, setSubmitting] = useState(false)

  function validateEmail(email: string) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.trim())
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors: Partial<Record<keyof RequestHelpForm, string>> = {}
    if (!form.name.trim()) nextErrors.name = 'Required'
    if (!form.county.trim()) nextErrors.county = 'Required'
    if (!form.entity.trim()) nextErrors.entity = 'Required'
    if (!form.email.trim()) nextErrors.email = 'Required'
    else if (!validateEmail(form.email)) nextErrors.email = 'Enter a valid email'
    if (!form.need.trim()) nextErrors.need = 'Tell us what help you need most'
    else if (form.need.trim().length < 10) nextErrors.need = 'Please add a bit more detail (at least 10 characters).'
    if (!form.agreePrivacyPolicy) nextErrors.agreePrivacyPolicy = 'Required'
    if (form.phone.trim() && !form.smsConsent) nextErrors.smsConsent = 'Required when a phone number is provided'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setSubmitting(true)
    try {
      await submitPlatformForm('request-help', {
        name: form.name.trim(),
        county: form.county.trim(),
        entity: form.entity.trim(),
        email: form.email.trim(),
        need: form.need.trim(),
        ...(form.amount.trim() ? { amount: form.amount.trim() } : {}),
        ...(form.electionDate.trim() ? { electionDate: form.electionDate.trim() } : {}),
        ...(form.status.trim() ? { status: form.status.trim() } : {}),
        ...(form.phone.trim() ? { phone: form.phone.trim(), smsConsent: true } : {}),
        ...(form.connected ? { connected: form.connected } : {}),
        agreePrivacyPolicy: true,
      })
      toast.success('Request received — our team gets an email with your request and will follow up within 48 hours.')
      setForm(empty)
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <Reveal>
        <PageHeader
          eyebrow="Deploy resources where they matter"
          title={siteCopy.requestHelp.heroTitle}
          subtitle={siteCopy.requestHelp.heroSubtitle}
          actions={
            <>
              <LinkButton to="/how-to-fight" variant="outline">
                Read the playbook
              </LinkButton>
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-patriot-red px-4 text-sm font-semibold tracking-wide text-patriot-white shadow-glowRed transition hover:-translate-y-[1px] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/25 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                href="tel:+18066221334"
              >
                Call 806-622-1334 <PhoneCall className="h-4 w-4" />
              </a>
            </>
          }
        />
      </Reveal>

      <Section title="We’re Here to Help" kicker="Start early">
        <Reveal>
          <Card>
            <CardGlow />
            <div className="relative space-y-4 text-sm leading-relaxed text-patriot-text sm:text-base">
              {siteCopy.requestHelp.hereToHelp.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section title="What We Can Help With" kicker="Support options">
        <Reveal>
          <Card>
            <CardGlow />
            <div className="relative">
              <ul className="grid gap-3 text-sm text-patriot-text sm:text-base">
                {siteCopy.requestHelp.helpWith.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-patriot-blue" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section title="Request Help Form" kicker="Tell us what’s happening">
        <Reveal>
          <Card>
            <CardGlow />
            <form className="relative grid gap-5" onSubmit={onSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Your name" hint="Required" error={errors.name}>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    autoComplete="name"
                  />
                </Field>
                <Field label="County" hint="Required" error={errors.county}>
                  <Input
                    value={form.county}
                    onChange={(e) => setForm((s) => ({ ...s, county: e.target.value }))}
                    placeholder="e.g., Potter County"
                  />
                </Field>
                <Field label="Entity proposing the bond" hint="Required" error={errors.entity}>
                  <Input
                    value={form.entity}
                    onChange={(e) => setForm((s) => ({ ...s, entity: e.target.value }))}
                    placeholder="School district, city, utility district…"
                  />
                </Field>
                <Field label="Bond amount">
                  <Input
                    value={form.amount}
                    onChange={(e) => setForm((s) => ({ ...s, amount: e.target.value }))}
                    placeholder="$125,000,000"
                    inputMode="numeric"
                  />
                </Field>
                <Field label="Election date">
                  <Input
                    value={form.electionDate}
                    onChange={(e) => setForm((s) => ({ ...s, electionDate: e.target.value }))}
                    placeholder="May 2026 / 2026-05-02"
                  />
                </Field>
                <Field label="Current status">
                  <Input
                    value={form.status}
                    onChange={(e) => setForm((s) => ({ ...s, status: e.target.value }))}
                    placeholder="Just announced, campaign underway, etc."
                  />
                </Field>
                <Field label="Phone number">
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Email" hint="Required" error={errors.email}>
                  <Input
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    autoComplete="email"
                    placeholder="you@email.com"
                  />
                </Field>
              </div>

              <Field
                label="What help you need most"
                hint="Required"
                error={errors.need}
              >
                <Textarea
                  value={form.need}
                  onChange={(e) => setForm((s) => ({ ...s, need: e.target.value }))}
                  placeholder="Voter contact, targeting, messaging, records requests, coordination…"
                />
              </Field>

              <Field label="Connected with your precinct chair/county party?">
                <Select
                  value={form.connected}
                  onChange={(e) =>
                    setForm((s) => ({
                      ...s,
                      connected: e.target.value as RequestHelpForm['connected'],
                    }))
                  }
                >
                  <option value="">Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Not sure">Not sure</option>
                </Select>
              </Field>

              <div className="md:col-span-2">
                <label className="flex items-start gap-3 rounded-xl border border-patriot-border bg-patriot-bgSoft px-4 py-3 text-sm text-patriot-text">
                  <input
                    type="checkbox"
                    checked={form.agreePrivacyPolicy}
                    onChange={(e) => setForm((s) => ({ ...s, agreePrivacyPolicy: e.target.checked }))}
                    className="mt-1 h-4 w-4 accent-patriot-blue"
                  />
                  <span>
                    I have read and agree to the{' '}
                    <Link
                      className="font-semibold text-patriot-blue underline decoration-patriot-blue/30 underline-offset-2"
                      to="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link
                      className="font-semibold text-patriot-blue underline decoration-patriot-blue/30 underline-offset-2"
                      to="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms &amp; Conditions
                    </Link>
                    .
                  </span>
                </label>
                {errors.agreePrivacyPolicy ? (
                  <div className="mt-2 text-xs font-semibold text-patriot-red">{errors.agreePrivacyPolicy}</div>
                ) : null}
              </div>

              {form.phone.trim() ? (
                <div className="md:col-span-2">
                  <label className="flex items-start gap-3 rounded-xl border border-patriot-border bg-patriot-bgSoft px-4 py-3 text-sm text-patriot-text">
                    <input
                      type="checkbox"
                      checked={form.smsConsent}
                      onChange={(e) => setForm((s) => ({ ...s, smsConsent: e.target.checked }))}
                      className="mt-1 h-4 w-4 accent-patriot-blue"
                    />
                    <span>
                      <EnSpotSmsOptInLabel
                        organizationName="Patriots for Action PAC"
                        purposePhrase="informational and donation-related"
                      />
                    </span>
                  </label>
                  {errors.smsConsent ? (
                    <div className="mt-2 text-xs font-semibold text-patriot-red">{errors.smsConsent}</div>
                  ) : null}
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-patriot-muted">{siteCopy.requestHelp.followUp}</div>
                <Button type="submit" variant="red" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Submit request'} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </Card>
        </Reveal>
      </Section>

      <Section title="Not Ready to Request Help Yet?" kicker="Connect + learn">
        <Reveal>
            <Card className="p-6">
              <CardGlow />
              <div className="relative">
                <p className="text-sm font-semibold text-patriot-navy">
                  {siteCopy.requestHelp.notReady[0]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-patriot-text sm:text-base">
                  {siteCopy.requestHelp.notReady[1]}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-patriot-border bg-patriot-bg px-4 text-sm font-semibold tracking-wide text-patriot-navy transition hover:border-patriot-blue/55 hover:bg-patriot-bgSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue/20 focus-visible:ring-offset-2 focus-visible:ring-offset-patriot-bg"
                    href="https://patriotsinaction.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join Patriots in Action <ArrowRight className="h-4 w-4" />
                  </a>
                  <LinkButton to="/bond-watch" variant="outline">
                    Use Bond Watch Texas
                  </LinkButton>
                </div>
              </div>
            </Card>
        </Reveal>
      </Section>
    </div>
  )
}

