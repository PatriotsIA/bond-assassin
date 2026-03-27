import { Link } from 'react-router-dom'
import { Reveal } from '../components/motion/Reveal'
import { Card, CardGlow } from '../components/ui/Card'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { CONTACT_EMAIL } from '../config/contact'

const org = 'Bond Assassins'
const lastRevised = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

export function TermsPage() {
  return (
    <div>
      <Reveal>
        <PageHeader eyebrow="Legal" title="Terms &amp; conditions" subtitle={`Terms for ${org} website and services.`} />
      </Reveal>

      <Section title="Terms" kicker={lastRevised}>
        <Reveal>
          <Card>
            <CardGlow />
            <div className="relative space-y-6 text-sm leading-relaxed text-patriot-text sm:text-base">
              <p>
                These Terms apply to your use of the online services (&quot;Services&quot;) provided by {org} as part of Patriots
                for Action PAC. By using the Services, you agree to these Terms.
              </p>
              <p>
                Contact:{' '}
                <a className="font-semibold text-patriot-blue underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wide text-patriot-navy">Privacy policy</h2>
                <p>
                  See our{' '}
                  <Link className="font-semibold text-patriot-blue underline" to="/privacy">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wide text-patriot-navy">Mobile communications</h2>
                <p>
                  If you subscribe to messages or calls, you consent to receive automated messages from us. Subscribers may
                  receive multiple messages a week. Your carrier&apos;s rates apply. Text STOP to cancel or HELP for support.
                  Carriers are not liable for delayed or undelivered messages.
                </p>
                <p>
                  By opting in with your phone number, you consent to recurring SMS/MMS that may include bond alerts,
                  donation requests, and updates. No purchase required. Msg &amp; data rates may apply. SMS information is not
                  rented, sold, or shared. See our{' '}
                  <Link className="font-semibold text-patriot-blue underline" to="/privacy">
                    Privacy Policy
                  </Link>{' '}
                  and these Terms.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wide text-patriot-navy">Disclaimer</h2>
                <p>
                  THE SERVICES ARE PROVIDED &quot;AS IS.&quot; TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM WARRANTIES AND
                  LIMIT LIABILITY FOR INDIRECT DAMAGES ARISING FROM YOUR USE OF THE SERVICES.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>
    </div>
  )
}
