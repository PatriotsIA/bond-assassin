import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { ArrowRight, Bell, ClipboardList, Search } from 'lucide-react'
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
import { useHashScroll } from '../lib/useHashScroll'
import { submitPlatformForm } from '../lib/platformApi'
import { EnSpotSmsOptInLabel } from '../components/compliance/EnSpotSmsOptInLabel'

type SubmitBondForm = {
  county: string
  entity: string
  amount: string
  electionDate: string
  name: string
  email: string
  details: string
  agreePrivacyPolicy: boolean
}

type AlertsForm = {
  county: string
  name: string
  email: string
  phone: string
  agreePrivacyPolicy: boolean
  smsConsent: boolean
}

const countySuggestions = [
  'Bexar',
  'Brazoria',
  'Cameron',
  'Collin',
  'Dallas',
  'Denton',
  'El Paso',
  'Fort Bend',
  'Harris',
  'Hays',
  'Hidalgo',
  'Lubbock',
  'Montgomery',
  'Nueces',
  'Tarrant',
  'Travis',
  'Williamson',
] as const

export function BondWatchPage() {
  useHashScroll()

  const emptySubmit: SubmitBondForm = useMemo(
    () => ({
      county: '',
      entity: '',
      amount: '',
      electionDate: '',
      name: '',
      email: '',
      details: '',
      agreePrivacyPolicy: false,
    }),
    [],
  )

  const emptyAlerts: AlertsForm = useMemo(
    () => ({
      county: '',
      name: '',
      email: '',
      phone: '',
      agreePrivacyPolicy: false,
      smsConsent: false,
    }),
    [],
  )

  const [submit, setSubmit] = useState<SubmitBondForm>(emptySubmit)
  const [alerts, setAlerts] = useState<AlertsForm>(emptyAlerts)
  const [submitErrors, setSubmitErrors] = useState<Partial<Record<keyof SubmitBondForm, string>>>(
    {},
  )
  const [alertsErrors, setAlertsErrors] = useState<Partial<Record<keyof AlertsForm, string>>>({})
  const [submittingBond, setSubmittingBond] = useState(false)
  const [submittingAlerts, setSubmittingAlerts] = useState(false)

  function validateEmail(email: string) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.trim())
  }

  async function onSubmitBond(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors: Partial<Record<keyof SubmitBondForm, string>> = {}
    if (!submit.county.trim()) nextErrors.county = 'Required'
    if (!submit.entity.trim()) nextErrors.entity = 'Required'
    if (!submit.name.trim()) nextErrors.name = 'Required'
    if (!submit.email.trim()) nextErrors.email = 'Required'
    else if (!validateEmail(submit.email)) nextErrors.email = 'Enter a valid email'
    if (!submit.agreePrivacyPolicy) nextErrors.agreePrivacyPolicy = 'Required'

    setSubmitErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setSubmittingBond(true)
    try {
      await submitPlatformForm('bond-watch-submit', {
        county: submit.county.trim(),
        entity: submit.entity.trim(),
        name: submit.name.trim(),
        email: submit.email.trim(),
        ...(submit.amount.trim() ? { amount: submit.amount.trim() } : {}),
        ...(submit.electionDate.trim() ? { electionDate: submit.electionDate.trim() } : {}),
        ...(submit.details.trim() ? { details: submit.details.trim() } : {}),
        agreePrivacyPolicy: true,
      })
      toast.success('Submitted. We’ll review and verify the election — our team receives an email with your report.')
      setSubmit(emptySubmit)
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSubmittingBond(false)
    }
  }

  async function onSubmitAlerts(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors: Partial<Record<keyof AlertsForm, string>> = {}
    if (!alerts.county.trim()) nextErrors.county = 'Required'
    if (!alerts.name.trim()) nextErrors.name = 'Required'
    if (!alerts.email.trim()) nextErrors.email = 'Required'
    else if (!validateEmail(alerts.email)) nextErrors.email = 'Enter a valid email'
    if (!alerts.agreePrivacyPolicy) nextErrors.agreePrivacyPolicy = 'Required'
    if (alerts.phone.trim() && !alerts.smsConsent) nextErrors.smsConsent = 'Required when a phone number is provided'

    setAlertsErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setSubmittingAlerts(true)
    try {
      await submitPlatformForm('bond-alert-signup', {
        county: alerts.county.trim(),
        name: alerts.name.trim(),
        email: alerts.email.trim(),
        ...(alerts.phone.trim() ? { phone: alerts.phone.trim(), smsConsent: true } : {}),
        agreePrivacyPolicy: true,
      })
      toast.success('You’re signed up for alerts — our team receives an email with your signup.')
      setAlerts(emptyAlerts)
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSubmittingAlerts(false)
    }
  }

  return (
    <div>
      <Reveal>
        <PageHeader
          eyebrow="Statewide tracking"
          title={siteCopy.bondWatch.heroTitle}
          subtitle={siteCopy.bondWatch.heroSubtitle}
          actions={
            <>
              <LinkButton to="#alerts" variant="outline">
                Sign up for alerts <Bell className="h-4 w-4" />
              </LinkButton>
              <LinkButton to="#submit" variant="primary">
                Submit a bond election <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </>
          }
        />
      </Reveal>

      <Section title="Why Bond Watch Exists" kicker="The problem is timing">
        <Reveal>
          <Card>
            <CardGlow />
            <div className="relative space-y-4 text-sm leading-relaxed text-patriot-text sm:text-base">
              {siteCopy.bondWatch.why.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section title="How to Use Bond Watch" kicker="Do this early">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card>
              <CardGlow />
              <div className="relative">
                <ul className="grid gap-3 text-sm text-patriot-text sm:text-base">
                  {siteCopy.bondWatch.howToUse.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-patriot-blue" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-patriot-navy">
                  {siteCopy.bondWatch.punchline}
                </p>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-patriot-blue" />
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-patriot-red">
                  Upcoming elections
                </div>
              </div>
              <div className="mt-3 font-display text-2xl font-bold tracking-wide">
                Database coming online.
              </div>
              <div className="mt-3 text-sm leading-relaxed text-patriot-text">
                Wire a data source later (CSV, Airtable, public content API) and this section becomes a live tracker.
                Bond Watch form submissions already post to the Patriots Platform API.
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-patriot-border bg-patriot-bgSoft px-3 py-2 text-xs text-patriot-muted">
                <ClipboardList className="h-4 w-4" />
                Empty state by design
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section id="submit" title="Submit a Bond Election" kicker="Bond Watch form">
        <Reveal>
          <Card>
            <CardGlow />
            <form className="relative grid gap-5" onSubmit={onSubmitBond}>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="County" hint="Required" error={submitErrors.county}>
                  <Input
                    value={submit.county}
                    onChange={(e) => setSubmit((s) => ({ ...s, county: e.target.value }))}
                    placeholder="e.g., Potter County"
                    list="texas-counties"
                    autoComplete="address-level2"
                  />
                </Field>
                <Field label="Entity proposing the bond" hint="Required" error={submitErrors.entity}>
                  <Input
                    value={submit.entity}
                    onChange={(e) => setSubmit((s) => ({ ...s, entity: e.target.value }))}
                    placeholder="School district, city, utility district…"
                  />
                </Field>
                <Field label="Bond amount (if known)">
                  <Input
                    value={submit.amount}
                    onChange={(e) => setSubmit((s) => ({ ...s, amount: e.target.value }))}
                    placeholder="$125,000,000"
                    inputMode="numeric"
                  />
                </Field>
                <Field label="Election date (if known)">
                  <Input
                    value={submit.electionDate}
                    onChange={(e) => setSubmit((s) => ({ ...s, electionDate: e.target.value }))}
                    placeholder="May 2026 / 2026-05-02"
                  />
                </Field>
                <Field label="Your name" hint="Required" error={submitErrors.name}>
                  <Input
                    value={submit.name}
                    onChange={(e) => setSubmit((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Full name"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Your email" hint="Required" error={submitErrors.email}>
                  <Input
                    value={submit.email}
                    onChange={(e) => setSubmit((s) => ({ ...s, email: e.target.value }))}
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field label="Any additional details">
                <Textarea
                  value={submit.details}
                  onChange={(e) => setSubmit((s) => ({ ...s, details: e.target.value }))}
                  placeholder="Links, meeting dates, documents, what you’ve heard…"
                />
              </Field>

              <div>
                <label className="flex items-start gap-3 rounded-xl border border-patriot-border bg-patriot-bgSoft px-4 py-3 text-sm text-patriot-text">
                  <input
                    type="checkbox"
                    checked={submit.agreePrivacyPolicy}
                    onChange={(e) => setSubmit((s) => ({ ...s, agreePrivacyPolicy: e.target.checked }))}
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
                {submitErrors.agreePrivacyPolicy ? (
                  <div className="mt-2 text-xs font-semibold text-patriot-red">{submitErrors.agreePrivacyPolicy}</div>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-patriot-muted">
                  We review every submission and add verified elections to the database.
                </div>
                <Button type="submit" variant="primary" disabled={submittingBond}>
                  {submittingBond ? 'Sending…' : 'Submit election'} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <datalist id="texas-counties">
                {countySuggestions.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </form>
          </Card>
        </Reveal>
      </Section>

      <Section id="alerts" title="Sign Up for Alerts" kicker="Get notified first">
        <Reveal>
          <Card>
            <CardGlow />
            <form className="relative grid gap-5" onSubmit={onSubmitAlerts}>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="County" hint="Required" error={alertsErrors.county}>
                  <Select
                    value={alerts.county}
                    onChange={(e) => setAlerts((s) => ({ ...s, county: e.target.value }))}
                  >
                    <option value="">Select a county</option>
                    {countySuggestions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                    <option value="Other">Other / Type in form above</option>
                  </Select>
                </Field>
                <Field label="Your name" hint="Required" error={alertsErrors.name}>
                  <Input
                    value={alerts.name}
                    onChange={(e) => setAlerts((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Full name"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email" hint="Required" error={alertsErrors.email}>
                  <Input
                    value={alerts.email}
                    onChange={(e) => setAlerts((s) => ({ ...s, email: e.target.value }))}
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                </Field>
                <Field label="Phone (optional)">
                  <Input
                    value={alerts.phone}
                    onChange={(e) => setAlerts((s) => ({ ...s, phone: e.target.value }))}
                    placeholder="(806) 622-1334"
                    autoComplete="tel"
                  />
                </Field>
              </div>

              <div>
                <label className="flex items-start gap-3 rounded-xl border border-patriot-border bg-patriot-bgSoft px-4 py-3 text-sm text-patriot-text">
                  <input
                    type="checkbox"
                    checked={alerts.agreePrivacyPolicy}
                    onChange={(e) => setAlerts((s) => ({ ...s, agreePrivacyPolicy: e.target.checked }))}
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
                {alertsErrors.agreePrivacyPolicy ? (
                  <div className="mt-2 text-xs font-semibold text-patriot-red">{alertsErrors.agreePrivacyPolicy}</div>
                ) : null}
              </div>

              {alerts.phone.trim() ? (
                <div>
                  <label className="flex items-start gap-3 rounded-xl border border-patriot-border bg-patriot-bgSoft px-4 py-3 text-sm text-patriot-text">
                    <input
                      type="checkbox"
                      checked={alerts.smsConsent}
                      onChange={(e) => setAlerts((s) => ({ ...s, smsConsent: e.target.checked }))}
                      className="mt-1 h-4 w-4 accent-patriot-blue"
                    />
                    <span>
                      <EnSpotSmsOptInLabel
                        organizationName="Patriots for Action PAC"
                        purposePhrase="informational and donation-related"
                      />
                    </span>
                  </label>
                  {alertsErrors.smsConsent ? (
                    <div className="mt-2 text-xs font-semibold text-patriot-red">{alertsErrors.smsConsent}</div>
                  ) : null}
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-patriot-muted">
                  We will never share your information. Unsubscribe anytime.
                </div>
                <Button type="submit" variant="outline" disabled={submittingAlerts}>
                  {submittingAlerts ? 'Sending…' : 'Sign up'} <Bell className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </Card>
        </Reveal>
      </Section>
    </div>
  )
}

